var through = require('through2');
var http = require('http');

var server = http.createServer(function(req, res) {
	if (req.method === "POST") {
		req.pipe(through(function(buff, _, next) {
			this.push(buff.toString().toUpperCase());
			next();
		})).pipe(res);
	} else
		res.send("Send me a POST\n");
});

server.listen(parseInt(process.argv[2]));
