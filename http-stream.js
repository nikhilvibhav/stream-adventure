var trumpet = require('trumpet');
var through = require('through2');
var tr = trumpet();

var loud = tr.select('.loud').createStream();
loud.pipe(through(function(buff, _, next) {
	this.push(buff.toString().toUpperCase());
	next();
})).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);
