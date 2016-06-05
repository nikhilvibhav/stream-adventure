var concat = require("concat-stream");

process.stdin
	.pipe(concat(function(str) {
		var reverseStr = str.toString().split("").reverse().join("");
		console.log(reverseStr);
	}));
