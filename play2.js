const http = require('http');

const routes = require('./play2-routes');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000, function() { console.log("Listening on port 3000")});
