const server = require('./api/server');

// This is the key: Vercel needs the exported function
module.exports = server;

// This only runs when you do 'node index.js' locally
if (require.main === module) {
  const port = 8080;
  server.listen(port, () => {
    console.log(`JSON Server is running on http://localhost:${port}`);
  });
}