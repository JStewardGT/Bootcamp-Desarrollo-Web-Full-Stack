const http = require('http');

const servidor = http.createServer((req, res) => {
  console.log("====> Objeto request (solicitud)");
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);

  res.statusCode = 404;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: 'Página no encontrada' }));

  console.log(res.statusCode);
  console.log(res.getHeader('Content-Type'));
});

const puerto = 3004;

servidor.listen(puerto, () => {
  console.log(`El servidor está escuchando en el puerto http://localhost:${puerto}`);
});
