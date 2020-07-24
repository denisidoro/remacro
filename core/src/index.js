import render from './renderer'
import parse from './parser'

export function transpile(markdown, js) {
    return render(markdown, parse(js))
}