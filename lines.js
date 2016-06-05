var split = require('split');
var through = require('through2');

var lineCount = 1;

var tr = through(function(buff, _, next) {
	var line = buff.toString();
	this.push(lineCount % 2 === 0 ? line.toUpperCase() + '\n' : line.toLowerCase() + '\n');
	lineCount++;
	next();
});

process.stdin
	.pipe(split())
	.pipe(tr)
	.pipe(process.stdout);
