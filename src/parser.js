import React from 'react'
import { transform } from "@babel/standalone"

const createElement = React.createElement

export default function parse(jsxCode) {

    const comps = 'Warning'

    const fullJsxCode = `
const React = {createElement}
${jsxCode}
module.exports = {components: [${comps}]}
`

    const jsCode = transform(fullJsxCode, { presets: ['env', 'react'] }).code;

    const { components } = eval(jsCode)

    return components
}