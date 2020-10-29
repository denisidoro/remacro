# remacro

:warning: This has been deprecated in favor of tools such as [zola](https://github.com/getzola/zola)

## Usage

With this tool it's possible to generate a superset of markdown, so that you don't repeat yourself. 

It also works for any plain-text content, so it's able to expand source code as well.

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
const Box = ({ icon, children }) => `> :${icon}: ${children}`

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
   return nil, err 
}
return ` + v + ", nil"
```

</td>
<td>

```go
foo, err := bar()
if err != nil { 
   return nil, err 
}
return foo, nil
```

</td>
</tr>
</table

The syntax for writing macros is the same for writing [components in React](https://reactjs.org/docs/components-and-props.html).

## Live editor

Click [here](https://denisidoro.github.io/remacro/) for a web-based editor with live preview. 

## CLI

#### Installation

```bash
npm install -g remacro
```

#### Call

```
remacro --input "$(cat input.md)" --macros "$(cat macros.js)" > output.md
```

## Integration with VSCode

TODO

## Provided macros

- [Confluence wiki](templates/confluence)
