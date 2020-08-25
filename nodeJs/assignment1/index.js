const http = require('http');

const routes = require('./index-routes');

const server = http.createServer(routes);

server.listen(3000, function() { console.log("Listening on port 3000")});
