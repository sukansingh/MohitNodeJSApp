var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
var page = url.parse(req.url).pathname;
console.log(page);
res.writeHead(200, {"Content-Type": "text/plain"});
if (page == '/') {
res.write('You\'re at the server1 web1 area');
}
else if (page == '/images') {
res.write('You\'re in the images area web1!');
}
res.end();
});
server.listen(process.env.NODE_PORT);