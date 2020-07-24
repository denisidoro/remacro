Plain-text macro expander with React-inspired widgets. Markdown with steroids. :muscle:

## Main usage

With this tool it's possible to generate a superset of markdown. 

For example, given the following code...
```javascript
const Box = ({ icon, children }) => "> :" + icon + ": " + children
const LoveBox = ({ children }) => <Box icon="heart">{children}</Box>
```
```markdown
# Hello World

Lorem ipsum

<LoveBox>This is a custom widget</LoveBox>
```

...the output would be:
```markdown
# Hello World

Lorem ipsum

> :heart: This is a custom widget
```

## Other usages

This tool works for any plain-text content, so it's able to generate a superset for source codes as well.

For example, given the following code...
```javascript
const Err = ({ children }) => `if err != nil { 
   return nil, err; 
}
return ` + children + ", nil"
```
```go
foo, err := bar()
<Err>foo</Err>
```

...the output would be:
```go
foo, err := bar()
if err != nil { 
   return nil, err; 
}
return foo, nil
```

## Live editor

Click [here](https://denisidoro.github.io/remacro/) for a web-based editor with live preview. 

## CLI

TODO

## Integration with VSCode

TODO
