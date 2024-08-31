const express = require('express');
const conexion = require('./src/config/database');
const userRoutes = require('./src/routes/userRoutes');

const app = express();
app.use(express.json());

app.use('/api/user', userRoutes);

conexion.sync().then(() => {
  app.listen(3000, () => {
    console.log('El servidor ya esta corriendo por el ppuerto 3000');
  })
}).catch(error => {
  console.log('error en el sistema', error);
});