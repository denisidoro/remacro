import React from 'react'
import { transform } from "@babel/standalone"

const reactProxy = React

export default function parse(jsxCode) {

    const comps = 'Warning'

    const fullJsxCode = `
const React = reactProxy
${jsxCode}
module.exports = {components: [${comps}]}
`

    const jsCode = transform(fullJsxCode, { presets: ['env', 'react'] }).code;

    const { components } = eval(jsCode)

    return components
}