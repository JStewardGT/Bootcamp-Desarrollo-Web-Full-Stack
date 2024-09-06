const express = require('express'); // Importa el módulo de Express
const app = express(); // Crea una instancia de Express

const { infoCursos } = require('./datos/cursos'); // Importa los datos de los cursos

// Importa los routers
const routerProgramacion = require('./routers/programacion.js');
app.use('/api/cursos/programacion', routerProgramacion); // Usa el router de programación

const routerMatematicas = require('./routers/matematicas.js');
app.use('/api/cursos/matematicas', routerMatematicas); // Usa el router de matemáticas

// Define la ruta raíz
app.get('/', (req, res) => {
  res.send('Mi primer servidor con Express'); // Responde con un mensaje simple
});

// Define la ruta para obtener todos los cursos
app.get('/api/cursos', (req, res) => {
  res.setHeader('Content-Type', 'application/json'); // Establece el tipo de contenido de la respuesta
  res.send(JSON.stringify(infoCursos)); // Envía los datos de los cursos en formato JSON
});

const PUERTO = 3004; // Define el puerto en el que el servidor escuchará

// Inicia el servidor
app.listen(PUERTO, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PUERTO}`);
});
