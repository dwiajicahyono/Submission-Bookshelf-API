const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'text/html');

  response.statusCode = 200;

  const { method } = request;
  if (method === 'GET') {
    response.end('<h1>Test</h1>');
  } if (method === 'POST') {
    response.end('<h1>POST</h1>');
  } if (method === 'PUT') {
    response.end('<h1>PUT</h1>');
  } if (method === 'DELETE') {
    response.end('<h1>Siu</h1>');
  }
};

const server = http.createServer(requestListener);

const port = 9000;
const host = 'localhost';

server.listen(port, host, () => {
  console.log(`server running at http://${host}:${port}`);
});
