const http = require('http');

const server = http.createServer(async (req, res) => {
  //Simulate a long process using async/await to prevent blocking
  await new Promise(resolve => setTimeout(resolve, 5000));

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});