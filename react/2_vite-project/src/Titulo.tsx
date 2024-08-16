function Titulo() {

  const nombre="Juan Perez"

  if (nombre) {
    return <h1>Hola Bienvenido {nombre}</h1>
  }
  return <h1>Hola Bienvenidos</h1>
}

export default Titulo