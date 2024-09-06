const express = require('express'); // Importa el módulo de Express

const { programacion } = require('../datos/cursos.js').infoCursos; // Importa los datos de los cursos de programación

const routerProgramacion = express.Router(); // Crea una instancia de Router

routerProgramacion.use(express.json()); // Middleware para parsear JSON

// Define la ruta para obtener todos los cursos de programación
routerProgramacion.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json'); // Establece el tipo de contenido de la respuesta
  res.send(JSON.stringify(programacion)); // Envía los datos de los cursos en formato JSON
});

// Define la ruta para obtener cursos de un lenguaje específico
routerProgramacion.get('/:lenguaje', (req, res) => {
  const lenguaje = req.params.lenguaje; // Obtiene el parámetro de la URL
  const resultados = programacion.filter(curso => curso.lenguaje === lenguaje); // Filtra los cursos por lenguaje

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`); // Responde con un error si no se encuentran cursos
  }

  res.setHeader('Content-Type', 'application/json'); // Establece el tipo de contenido de la respuesta
  res.send(JSON.stringify(resultados)); // Envía los cursos filtrados en formato JSON
});

// Define la ruta para obtener cursos de un lenguaje y nivel específico
routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
  const lenguaje = req.params.lenguaje; // Obtiene el parámetro de la URL
  const nivel = req.params.nivel; // Obtiene el parámetro de la URL
  const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel); // Filtra los cursos por lenguaje y nivel

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`); // Responde con un error si no se encuentran cursos
  }

  res.setHeader('Content-Type', 'application/json'); // Establece el tipo de contenido de la respuesta
  res.send(JSON.stringify(resultados)); // Envía los cursos filtrados en formato JSON
});

// Define la ruta para agregar un nuevo curso
routerProgramacion.post('/', (req, res) => {
  let cursoNuevo = req.body; // Obtiene el cuerpo de la solicitud
  programacion.push(cursoNuevo); // Agrega el nuevo curso a la lista
  res.setHeader('Content-Type', 'application/json'); // Establece el tipo de contenido de la respuesta
  res.status(201).send(JSON.stringify(programacion)); // Envía la lista actualizada de cursos en formato JSON
});

// Define la ruta para actualizar un curso completamente
routerProgramacion.put('/:id', (req, res) => {
  const cursoActualizado = req.body; // Obtiene el cuerpo de la solicitud
  const id = req.params.id; // Obtiene el parámetro de la URL

  const indice = programacion.findIndex(curso => curso.id == id); // Encuentra el índice del curso a actualizar

  if (indice >= 0) {
    programacion[indice] = cursoActualizado; // Actualiza el curso
  } else {
    return res.status(404).send(`El curso con id ${id} no existe`); // Responde con un error si no se encuentra el curso
  }

  res.setHeader('Content-Type', 'application/json'); // Establece el tipo de contenido de la respuesta
  res.send(JSON.stringify(programacion)); // Envía la lista actualizada de cursos en formato JSON
});

// Define la ruta para actualizar parcialmente un curso
routerProgramacion.patch('/:id', (req, res) => {
  const infoActualizada = req.body; // Obtiene el cuerpo de la solicitud
  const id = req.params.id; // Obtiene el parámetro de la URL

  const indice = programacion.findIndex(curso => curso.id == id); // Encuentra el índice del curso a actualizar

  if (indice >= 0) {
    const cursoAModificar = programacion[indice];
    Object.assign(cursoAModificar, infoActualizada); // Actualiza parcialmente el curso
  } else {
    return res.status(404).send(`El curso con id ${id} no existe`); // Responde con un error si no se encuentra el curso
  }

  res.setHeader('Content-Type', 'application/json'); // Establece el tipo de contenido de la respuesta
  res.send(JSON.stringify(programacion)); // Envía la lista actualizada de cursos en formato JSON
});

// Define la ruta para eliminar un curso
routerProgramacion.delete('/:id', (req, res) => {
  const id = req.params.id; // Obtiene el parámetro de la URL
  const indice = programacion.findIndex(curso => curso.id == id); // Encuentra el índice del curso a eliminar

  if (indice >= 0) {
    programacion.splice(indice, 1); // Elimina el curso de la lista
  } else {
    return res.status(404).send(`El curso con id ${id} no existe`); // Responde con un error si no se encuentra el curso
  }

  res.setHeader('Content-Type', 'application/json'); // Establece el tipo de contenido de la respuesta
  res.send(JSON.stringify(programacion)); // Envía la lista actualizada de cursos en formato JSON
});

module.exports = routerProgramacion; // Exporta el router
