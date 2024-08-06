function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;

  let dni = "12345678A";

  this.getDni = function () {
    return dni;
  };

  this.saludar = function () {
    console.log(`${this.nombre} tiene ${this.edad} años, con DNI ${this.getDni()}`);
  };
}

let objetoPersona = new Persona("Juan", 25);
let objetoPersona2 = new Persona("Pedro", 30);

console.log(objetoPersona.nombre);
console.log(objetoPersona.getDni());

objetoPersona.saludar();
objetoPersona2.saludar();
