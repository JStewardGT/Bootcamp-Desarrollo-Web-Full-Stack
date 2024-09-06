const express = require('express');
const app = express();

const { infoCursos } = require('./cursos')

const routerProgramacion = express.Router();
app.use('/api/cursos/programacion', routerProgramacion);

const routerMatematicas = express.Router();
app.use('/api/cursos/matematicas', routerMatematicas);

app.get('/', (req, res) => {
  res.send('Mi primer servidor con Express');
});

app.get('/api/cursos', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(infoCursos));
});

routerProgramacion.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(infoCursos.programacion));
});

routerProgramacion.get('/:lenguaje', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(resultados));
});

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;
  const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
  }

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(resultados));
});

routerMatematicas.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(infoCursos.matematicas));
});

routerMatematicas.get('/:tema', (req, res) => {
  const tema = req.params.tema;
  const resultados = infoCursos.matematicas.filter(curso => curso.tema === tema);

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${tema}`);
  }

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(resultados));
});

routerMatematicas.get('/:tema/:nivel', (req, res) => {
  const tema = req.params.tema;
  const nivel = req.params.nivel;
  const resultados = infoCursos.matematicas.filter(curso => curso.tema === tema && curso.nivel === nivel);

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${tema} de nivel ${nivel}`);
  }

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(resultados));
});

const PUERTO = 3004;

app.listen(PUERTO, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PUERTO}`);
});
