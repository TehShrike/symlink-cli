#!/usr/bin/env node

if (process.argv.length < 4) {
	console.log(`symlink [existing file] [new symlink that points at that file]`)
	process.exit(0)
}

const link = require('fs-symlink')

const [ , , from, to ] = process.argv

link(from, to, 'junction')
