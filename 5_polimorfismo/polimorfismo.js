//La clase Animal que define un método hablar():
class Animal {
  hablar() {
    console.log("Sonidos de animal");
  }
}

// Perro que hereda de la clase Animal y sobrescribe el método hablar()
// con una implementación especifica

class Perro extends Animal {
  hablar() {
    console.log("Guau guau!");
  }
}

// Gato que hereda de la clase Animal y sobrescribe el método hablar()
// con otra implementación:
class Gato extends Animal {
  hablar() {
    console.log("Miau miau!");
  }
}

// Ahora podemos crear objetos de las tres clases
// y llamar a1 método hablar(), que proporcionará
// una salida diferente para cada uno de ellos:

const animal = new Animal();
const perro = new Perro();
const gato = new Gato();

animal.hablar(); // Sonidos de animal
perro.hablar(); // Guau guau
gato.hablar(); // Miau miau
