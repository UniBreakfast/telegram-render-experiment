const server = require('http').createServer(handleRequest);

server.listen(process.env.PORT, () => {
  console.log(`Server listening on: http://localhost:${process.env.PORT}`);
});

setInterval(() => {
  require('http').get(process.env.URL, () => {
    console.log('Pinging self to keep alive');
  });
}, 60e3 * 13);

function handleRequest(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('I\'m alive!');
}