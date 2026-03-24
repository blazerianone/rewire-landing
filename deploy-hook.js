const http = require('http');
const { execSync } = require('child_process');

const PORT = 3850;
const SECRET = process.env.DEPLOY_SECRET || 'rw-deploy-2026';
const REPO_DIR = '/home/solsafepayment/dev-2026/rewire-landing';

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/deploy') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      // Verify secret from query param or header
      const url = new URL(req.url, `http://${req.headers.host}`);
      const token = url.searchParams.get('secret') || req.headers['x-deploy-secret'];

      if (token !== SECRET) {
        res.writeHead(401);
        res.end('Unauthorized');
        console.log(`[${new Date().toISOString()}] Unauthorized deploy attempt`);
        return;
      }

      try {
        console.log(`[${new Date().toISOString()}] Deploy triggered...`);
        const output = execSync(`cd ${REPO_DIR} && git fetch origin main && git reset --hard origin/main 2>&1`).toString();
        console.log(output);
        console.log(`[${new Date().toISOString()}] Deploy complete`);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, output }));
      } catch (err) {
        console.error(`[${new Date().toISOString()}] Deploy failed:`, err.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
  } else if (req.method === 'GET' && req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', service: 'rewire-landing-deploy' }));
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Deploy hook listening on port ${PORT}`);
});
