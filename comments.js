// Create web server application
// Run: node comments.js
// Access: http://localhost:8080/comments

var http = require('http');
var url = require('url');
var fs = require('fs');

var comments = [];

var server = http.createServer(function(request, response) {
  var urlParts = url.parse(request.url);

  if (urlParts.pathname === '/comments' && request.method === 'POST') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(comments));
  } else if (urlParts.pathname === '/comments' && request.method === 'GET') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(comments));
  } else if (urlParts.pathname === '/comments' && request.method === 'PUT') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(comments));
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Not Found');
  }
});

server.listen(8080, function() {
  console.log('Server running at http://localhost:8080');
});