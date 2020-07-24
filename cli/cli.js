#!/usr/bin/env node
'use strict';

const remacro = require('remacro-core');

const argv = process.argv;

switch (argv[2]) {
	case "--version":
		console.log("0.1.0")
		return
	case "--help":
		console.log("0.1.0")
		return
}

const text = argv[3]
const macros = argv[5]

console.log(remacro.transpile(text, macros));
