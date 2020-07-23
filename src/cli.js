import React from 'react'
import render from './renderer'
import parse from './parser'

var markdown = `
# Hello Word

## Heading 2
### Heading 3

> **Warning**: Blockquotes work as well

* List Item 1
* List Item 2
  * List Item 2.1
  * List Item 2.2
* List Item 3

| hi | hello |
| :--: | :--: |
| foo | bar |

[Readme](README.md)

<Warning>lorem ipsum</Warning>

Even \`code\`:

\`\`\`javascript
function greet(name) {
  console.log("Hello " + name)
}

hi
\`\`\`
`

const js = `
const Box = ({ icon, children }) => "> :" + icon + ": " + children + ";"

const Warning = ({ children }) => <Box icon="warning">{children}</Box>
`

console.log(render(markdown, parse(js)))