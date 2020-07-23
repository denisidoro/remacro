# Node CLI Boilerplate

This is a boilerplate for creating cli applications using node.

## 1. Adapting to your Application:
> Find and rename all the `loki` occurances to whatever your application name is. Ex: `shiny-cli-app`

## 2. Development Commands

```bash
# To link the cli app, start the watch and rebuild process.
$> npm run start

# to just build the cli app:
$> npm run build
$> npm run clean:build

# This will build and link the cli app into your machine.
$> npm run setup

# use this to remove the cli app from your machine.
$> npm run remove

# see all available commands
$> npm run
```

## 3. Running the CLI app.
Once you start the watch and rebuild process, you should be able to run the cli app from the command line like so:

```bash
# Running the cli app
$> loki disguise "Captian America"
```


## 3.1 Code Setup

- All the commands go in the `/src/commands` folder. Ex: `loki.js`
- Each root level command needs to be configured in the `package.json` folder.
- The sub-commands need to be present in the same level as the main command. Ex: `loki-disguise.js`
- If you have more than one root level command, then consider putting them in their own folders.
- The commands need to have `#!/usr/bin/env node` as the first line in the file.
- The commands need to be executable. `chmod +x ./src/commands/loki/loki.js`

### 3.2 What is the `./lib` directory?
> NOTE: As of boilerplate v2, this lib folder is excluded from git.
The code in the `./src` folder gets compiled down into the `./lib` directory.

> Do not manually change anything in the `./lib` directory.


### 3.3 Project structure for Single Root level command
```
  /src
      /helpers
      /commands
          | - loki.js
          | - loki-program.js
          | - loki-disguise.js
```
In `package.json` we would setup the entry points like so:
```
  "bin": {
    "loki": "./lib/commands/loki.js"
  }
```

### 3.4 Project structure for Multiple Root level command
```
  /src
      /helpers
      /commands
          /loki
              | - loki.js
              | - loki-program.js
              | - loki-disguise.js
          /thor
              | - thor.js
              | - thor-hammer.js
              | - thor-hair.js
```
In `package.json` we would setup the entry points like so:
```
  "bin": {
    "loki": "./lib/commands/loki/loki.js",
    "thor": "./lib/commands/thor/thor.js"
  }
```

### 3.5 Using the commands
``` bash
# once you run the: npm run start you should have the
# commands liked up and ready to be used like so:
$> loki disguise "Thor"
$> thor hammer "smash"
```

### 3.6 Documentation for the libraries used:
Check the `package.json` file for exact versions for packages used.

- commander: https://github.com/tj/commander.js
- lodash: https://lodash.com/docs/4.17.10
- Other interesting CLI packages:
    - Check the **Command-line apps** section here: https://github.com/sindresorhus/awesome-nodejs#command-line-apps

## 4. FAQ

### 4.1 The link process fails.
It is probably due to the `./lib` folder not containing the file that you are trying to link. Run the `build` process first. (See **Commands** Section above).

### 4.2 The link process fails after I changed my `bin` configuration in `package.json`
This is probably due to the old link remaining on your machine.
You can revert your `bin` config in `package.json` and run `npm unlink`. This should remove the old link.


