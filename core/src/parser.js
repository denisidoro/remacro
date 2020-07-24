import React from 'react'
import { transform } from "@babel/standalone"

const reactProxy = React

function withExports(jsxCode) {
    jsxCode
        .replace('/^const/', 'export const')
        .replace('/^var/', 'export var')
        .replace('/^function/', 'export function')
}

export default function parse(jsxCode) {
    const codeWithExports = withExports(jsxCode)

    console.log(codeWithExports)

    const fullJsxCode = `
const React = reactProxy
${codeWithExports}
`

    const jsCode = transform(fullJsxCode, { presets: ['env', 'react'] }).code;

    const { components } = eval(jsCode)

    return components
}