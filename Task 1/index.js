const http = require('http');

const PORT = process.env.PORT || 3000;

const requestListener = (req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from nodejs-demo-app\n');
};

const server = http.createServer(requestListener);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
