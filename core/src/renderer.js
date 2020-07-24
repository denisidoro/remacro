import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { decode } from 'he';

function zip(a, b) {
    var obj = {}
    for (var i = 0; i < a.length; i++) {
            obj[a[i]] = b[i]
    }
    return obj
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

function getLowercaseDisplayName(component) {
    return getDisplayName(component).toLowerCase()
}

export default function render(markdown, reactComponents) {
    const names = reactComponents.map(getLowercaseDisplayName)
    const components = zip(names, reactComponents)

    const opts = {
        transform: function (node, index) {
            if (node.type != "tag") return
            const C = components[node.name]
            if (!C) return
            return React.createElement(
                C,
                node.attribs,
                [...node.children.map(x => x.data)]
              )
        }
    }

    const component = ReactHtmlParser(markdown, opts)
    return decode(renderToStaticMarkup(component).replace(/\\n/g, '\n'))
}