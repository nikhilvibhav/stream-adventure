var through = require('through2');

var tr = through(function(buff, _, next) {
	this.push(buff.toString().toUpperCase());
	next();
});

process.stdin.pipe(tr).pipe(process.stdout);
