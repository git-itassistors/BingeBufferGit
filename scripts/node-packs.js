var http = require('http');
var fs = require('fs');
	
	http.createServer(function (req, res) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		
		var file = fs.createReadStream("../index.html");
		
	}).listen(8080);