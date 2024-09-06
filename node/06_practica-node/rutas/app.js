const http = require('http');
const { infoCursos } = require('./cursos.js');

const server = http.createServer((req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      return manejarSolicitudGET(req, res);
    default:
      res.statusCode = 405;
      res.end(`Método ${method} no permitido`);
  }
});

function manejarSolicitudGET(req, res) {
  const path = req.url;

  if (path === '/') {
    res.statusCode = 200;
    return res.end('Hola Bienvenido');
  } else if (path === '/cursos') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(infoCursos));
  }
  else if (path === '/cursos/programacion') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(infoCursos.programacion));
  }
  else {
    res.statusCode = 404;
    res.end('Not Found');
  }
}

const PUERTO = 3004;

server.listen(PUERTO, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PUERTO}`);
});
