import React from 'react'
import { transform } from "@babel/standalone"

const reactProxy = React

function getComps(jsxCode) {
    var matches = []
    jsxCode.replace(/[^\n]\s*(const|var|function) +(\w[\w\d]*)/gi, (m, p1, p2) => {
      matches.push(p2)
    })
    return matches
}

export default function parse(jsxCode) {
    const comps = getComps(jsxCode)

    const fullJsxCode = `
const React = reactProxy
${jsxCode}
module.exports = {components: [${comps}]}
`
    const jsCode = transform(fullJsxCode, { presets: ['env', 'react'] }).code;

    const { components } = eval(jsCode)

    return components
}