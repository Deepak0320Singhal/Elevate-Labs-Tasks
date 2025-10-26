// Simple smoke test using Node's http to hit /health
const http = require('http');

const opts = {
  hostname: 'localhost',
  port: 3000,
  path: '/health',
  method: 'GET',
  timeout: 2000
};

const req = http.request(opts, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      if (json.status === 'ok') {
        console.log('TEST PASSED');
        process.exit(0);
      } else {
        console.error('TEST FAILED: invalid body', data);
        process.exit(1);
      }
    } catch (e) {
      console.error('TEST FAILED: invalid json', data);
      process.exit(1);
    }
  });
});

req.on('error', (err) => {
  console.error('TEST FAILED: request error', err.message);
  process.exit(1);
});

req.on('timeout', () => {
  console.error('TEST FAILED: timeout');
  req.destroy();
  process.exit(1);
});

req.end();
