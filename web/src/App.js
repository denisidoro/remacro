import React, { useState, useCallback, useMemo } from 'react'
import './App.css'
import './prism.css'
import { transpile } from './core'
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-jsx';
import * as ReactMarkdown from 'react-markdown';
import * as EmojiConvertor from 'emoji-js';

const defaultJs = `const Box = ({ icon, children }) => "> :" + icon + ": " + children

const LoveBox = ({ children }) => <Box icon="heart">{children}</Box>`

const defaultMarkdown = `
# Hello World

Lorem ipsum

<LoveBox>This is a custom widget</LoveBox>

| hi | hello |
| :--: | :--: |
| foo | bar |

* List Item 1
  * List Item 1.1
* List Item 2
`

const Toggle = ({value, onChange}) => {
  const handleChange = useCallback(event => {
    onChange(event.target.checked)
  }, [onChange])

  return <span style={{fontSize: "small"}} >
    <input
      type="checkbox"
      checked={value}
      onChange={handleChange} />
    <span>Render output as markdown</span>
  </span>
}

const CodeArea = ({ value, onChange, language }) => {
  return <div>
    <Editor
      className="editor"
      value={value}
      onValueChange={onChange}
      highlight={code => highlight(code, language)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 13,
      }}
    />
  </div>
}

const emoji = new EmojiConvertor();

function safeTranspile(markdown, js) {
    let c
    try {
      c = transpile(markdown, js)
    } catch (err) {
      console.log(err)
      c = markdown
    }
    return emoji.replace_colons(c)
}

const Rendered = ({ markdown, js }) => {
  const [isMarkdown, setIsMarkdown] = useState(true)

  const content = useMemo(event => {
    return safeTranspile(markdown, js)
  }, [markdown, js])

  return <div>
    <Toggle value={isMarkdown} onChange={setIsMarkdown} />
    <div className="rendered-markdown markdown-body">
    { isMarkdown ? <ReactMarkdown source={content} /> : <pre>{content}</pre> }
  </div>
</div>
}

const EditorPane = () => {
  const [markdown, setMarkdown] = useState(defaultMarkdown)
  const [js, setJs] = useState(defaultJs)

  return (
    <div className="flex-container">
      <div className="flex-item code">
        <CodeArea value={js} onChange={setJs} language={languages.jsx} />
        <CodeArea value={markdown} onChange={setMarkdown} language={languages.markup} />
      </div>
      <div className="flex-item rendered">
        <Rendered markdown={markdown} js={js} />
      </div>
    </div>
  );
}

const Header = () => {
  return <div className="header-container">
    <span><h2>reactdown</h2></span>
    <span><h4>a superset of markdown React-like widgets</h4></span>
  </div>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <EditorPane />
      </header>
    </div>
  );
}

export default App;
