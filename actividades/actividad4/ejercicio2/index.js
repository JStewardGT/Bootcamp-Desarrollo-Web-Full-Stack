M.AutoInit();

class Figura {
  constructor(nombre) {
    this._nombre = nombre;
  }

  get nombre() {
    return this._nombre;
  }

  calcularArea() {
    throw new Error("Método calcularArea debe ser implementado en la subclase");
  }
}

class Triangulo extends Figura {
  constructor(base, altura) {
    super("Triángulo");
    this._base = base;
    this._altura = altura;
  }

  calcularArea() {
    return (this._base * this._altura) / 2;
  }
}

class Cuadrado extends Figura {
  constructor(lado) {
    super("Cuadrado");
    this._lado = lado;
  }

  calcularArea() {
    return this._lado * this._lado;
  }
}

class Rectangulo extends Figura {
  constructor(base, altura) {
    super("Rectángulo");
    this._base = base;
    this._altura = altura;
  }

  calcularArea() {
    return this._base * this._altura;
  }
}

class Circulo extends Figura {
  constructor(radio) {
    super("Círculo");
    this._radio = radio;
  }

  calcularArea() {
    return Math.PI * this._radio ** 2;
  }
}

document.getElementById("tipoFigura").addEventListener("change", function () {
  resetInputs();
  const tipoFigura = this.value;

  switch (tipoFigura) {
    case "triangulo":
      toggleInput("baseDiv", true);
      toggleInput("alturaDiv", true);
      break;
    case "cuadrado":
      toggleInput("ladoDiv", true);
      break;
    case "rectangulo":
      toggleInput("baseDiv", true);
      toggleInput("alturaDiv", true);
      break;
    case "circulo":
      toggleInput("radioDiv", true);
      break;
  }
});

document.getElementById("figuraForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const tipoFigura = document.getElementById("tipoFigura").value;
  const resultado = document.getElementById("resultado");

  let figura;
  switch (tipoFigura) {
    case "triangulo":
      figura = new Triangulo(
        parseFloat(document.getElementById("base").value),
        parseFloat(document.getElementById("altura").value)
      );
      break;
    case "cuadrado":
      figura = new Cuadrado(parseFloat(document.getElementById("lado").value));
      break;
    case "rectangulo":
      figura = new Rectangulo(
        parseFloat(document.getElementById("base").value),
        parseFloat(document.getElementById("altura").value)
      );
      break;
    case "circulo":
      figura = new Circulo(parseFloat(document.getElementById("radio").value));
      break;
    default:
      alert("Por favor, selecciona una figura geométrica.");
      return;
  }

  resultado.textContent = `El área del ${figura.nombre} es: ${figura.calcularArea()}`;
  resultado.classList.remove("scale-out");
});

function resetInputs() {
  document.getElementById("resultado").classList.add("scale-out");
  document.querySelectorAll(".div-input").forEach((div) => {
    div.classList.add("scale-out");
    div.querySelector("input").required = false;
    div.querySelector("input").value = "";
  });
}

function toggleInput(divId, isActive) {
  const div = document.getElementById(divId);
  div.classList.toggle("scale-out", !isActive);
  div.querySelector("input").required = isActive;
}
