import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { transpile } from 'reactdown';

const defaultJs = `
const Box = ({ icon, children }) => "> :" + icon + ": " + children + ";"
const Warning = ({ children }) => <Box icon="warning">{children}</Box>
`

const defaultMarkdown = `
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

const CodeArea = ({value, onChange}) => {
  function handleChange(event) {
    onChange(event.target.value);
  }

  return <textarea value={value} onChange={handleChange} />
}

const Rendered = ({value}) => {
  return <pre>{value}</pre>
}

function App() {

  const [markdown, setMarkdown] = useState(defaultMarkdown)
  const [js, setJs] = useState(defaultJs)

  let content
  try {
    content = transpile(markdown, js)
  } catch (err) {
    content = "ERROR"
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <CodeArea value={markdown} onChange={setMarkdown} />
          <CodeArea value={js} onChange={setJs} />
          <Rendered value={content} />
        </p>
      </header>
    </div>
  );
}

export default App;
