Plain-text macro expander with React-inspired widgets. Markdown with steroids. :muscle:

## Usage

With this tool it's possible to generate a superset of markdown. 

It also works for any plain-text content, so it's able to generate a superset for source codes as well.

Examples: 

<table>
<tr>
<td> Input </td> <td> Macros </td> <td> Output </td>
</tr>
<tr>
</td>
<td>

```markdown
# Hello World

Lorem ipsum

<LoveBox>This is a custom widget</LoveBox>
```

</td>
<td>

```javascript
const Box = ({ icon, children }) => "> :" + icon + ": " + children

const LoveBox = ({ children }) => <Box icon="heart">{children}</Box>
```

</td>
<td>

```markdown
# Hello World

Lorem ipsum

> :heart: This is a custom widget
```

</td>
</tr>

<tr>
<td> 

```go
foo, err := bar()
<Err v=foo />
```
  
</td>
<td>

```javascript
const Err = ({ v }) => `if err != nil { 
   return nil, err; 
}
return ` + v + ", nil"
```

</td>
<td>

```go
foo, err := bar()
if err != nil { 
   return nil, err; 
}
return foo, nil
```

</td>
</tr>
</table>

## Live editor

Click [here](https://denisidoro.github.io/remacro/) for a web-based editor with live preview. 

## CLI

#### Installation

```bash
npm install -g remacro
```

#### Call

```
remacro --input "$(cat file1.md)" --macros "$(cat file2.js)"
```

## Integration with VSCode

TODO
