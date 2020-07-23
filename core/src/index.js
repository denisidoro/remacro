import render from './renderer'
import parse from './parser'

function transpile(markdown, js) {
    return render(markdown, parse(js))
}

module.exports = {
    render,
    parse,
    transpile
};