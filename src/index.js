const http = require('http');
const { evaluateRisk } = require('./riskChecker');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const risk = evaluateRisk(2, 10); // demo
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      message: 'Hola DevSecOps 👋 - Taller en vivo',
      riskLevel: risk,
      timestamp: new Date().toISOString()
    }));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Servidor DevSecOps escuchando en puerto ${port}`);
});
