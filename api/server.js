const jsonServer = require('json-server');
const path = require('path'); // Add this
const server = jsonServer.create();

// Use path.join to ensure the file is found in the lambda environment
const router = jsonServer.router(path.join(__dirname, '../db.json')); 

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.rewriter({
  '/api/*': '/$1'
}));
server.use(router);

module.exports = server;