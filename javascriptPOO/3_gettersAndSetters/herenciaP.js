class Persoma {
  constructor(nombre, apellido, edad) {
    this.nombrePersona = nombre;
    this.apellidoPersona = apellido;
    this.edadPersona = edad;
  }

  datosPersona() {
    return `Nombre: ${this.nombrePersona}. Apellido: ${this.apellidoPersona}. Edad ${this.edadPersona},`;
  }
}

class Alumno extends Persoma {
  constructor(nombre, apellido, edad, matricula) {
    super(nombre, apellido, edad);
    this.matriculaAlumno = matricula;
  }

  mostrarDatos() {
    console.log(`Alumno ${super.datosPersona()} Matricula: ${this.matriculaAlumno}.`);
  }
}

class Profesor extends Persoma {
  constructor(nombre, apellido, edad, departamento) {
    super(nombre, apellido, edad);
    this.departamentoProfesor = departamento;
  }

  set sDepartamento(valor) {
    this.departamentoProfesor = valor;
  }

  get gDepartamento() {
    return this.departamentoProfesor;
  }

  mostrarDatos() {
    console.log(`Profesor ${super.datosPersona()} Departamento: ${this.departamentoProfesor}.`);
  }
}

let objAlumno = new Alumno("Juan", "Perez", "15", "123456789");
objAlumno.mostrarDatos();
console.log(objAlumno.datosPersona);


let objProfesor = new Profesor("Maria", "Lopez", "30");
objProfesor.sDepartamento = "Sistemas";
objProfesor.mostrarDatos();