const http = require('http');

const servidor = http.createServer((req, res) => {
  res.end('Hola Mundo app');
});

const puerto = 3004;

servidor.listen(puerto, () => {
  console.log(`El servidor esta escuchando en el puerto http://localhost:${puerto}`);
});