#!/usr/bin/env node
'use strict';

const remacro = require('remacro-core');
const fse = require('fs-extra');

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
if ( argv[6] !== undefined && argv[6] !== null &&
		argv[7] !== undefined && argv[7] !== null) {
	const outputFileName = argv[7];
	const directory = './remacro-mds';
	fse.ensureDir(directory).then(() => {
			console.log(`Generating Remacro Markdonw files at: ${directory}`);
	
			fse.writeFile(directory + '/' + outputFileName + '.md', remacro.transpile(text, macros))
				.then(() => fse.readFile(directory + '/' + outputFileName + '.md', 'utf8'))
				.then(data => {
					console.log(`File successfully created!`);
					console.log(`Output is as followed: \n`);
					console.log(data);
				}).catch(err => {
					console.error(`An error occurred while writing the file: ${err}`);
			});
	
		}).catch(err => {
			console.error(`An error occurred while ensuring that the directory existed: ${err}`);
	});
} else {
	console.log(remacro.transpile(text, macros));
}
