const express = require('express');
const app = express();

const { infoCursos } = require('./cursos')

app.get('/', (req, res) => {
  res.send('Mi primer servidor con Express');
});

app.get('/api/cursos', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(infoCursos));
});

app.get('/api/cursos/programacion', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(infoCursos.programacion));
});

app.get('/api/cursos/programacion/:lenguaje', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(resultados));
});

app.get('/api/cursos/matematicas', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(infoCursos.matematicas));
});

app.get('/api/cursos/matematicas/:tema', (req, res) => {
  const tema = req.params.tema;
  const resultados = infoCursos.matematicas.filter(curso => curso.tema === tema);

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${tema}`);
  }

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(resultados));
});

const PUERTO = 3004;

app.listen(PUERTO, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PUERTO}`);
});
