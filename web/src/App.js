import React, { useState, useCallback } from 'react'
import './App.css'
import { transpile } from 'reactdown'
import Highlight from 'react-highlight'

const defaultJs = `
const Box = ({ icon, children }) => "> :" + icon + ": " + children + ";"
const Warning = ({ children }) => <Box icon="warning">{children}</Box>
`

const defaultMarkdown = `
# Hello World
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

const CodeArea = ({ value, onChange }) => {
  const handleChange = React.useCallback(event => {
    onChange(event.target.value)
  }, [onChange])

  return <Highlight language='javascript'>
  {value}
</Highlight>
}

const Rendered = ({ markdown, js }) => {
  let content
  try {
    content = transpile(markdown, js)
  } catch (err) {
    content = markdown
  }
  return <pre>{content}</pre>
}

function Editor() {
  const [markdown, setMarkdown] = useState(defaultMarkdown)
  const [js, setJs] = useState(defaultJs)

  return (
    <p>
      <CodeArea value={markdown} onChange={setMarkdown} />
      <CodeArea value={js} onChange={setJs} />
      <Rendered markdown={markdown} js={js} />
    </p>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Editor />
      </header>
    </div>
  );
}

export default App;
