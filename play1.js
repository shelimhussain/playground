const http = require('http');

const routes = require('./routes');

cosole.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000, function() { console.log("Listening on port 3000")});
