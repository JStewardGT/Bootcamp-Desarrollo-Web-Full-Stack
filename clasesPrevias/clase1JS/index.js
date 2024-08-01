// console.log("Hola mundo, bienvenido a desarrollo web sullstack nivel intermedio");

// window.alert("Hola mundo");
// alert("Johan Galeano");

var d1 = parseInt(prompt("Numero1"));
var d2 = parseInt(prompt("Numero2"));
var d3 = prompt("operación2");

function operaciones() {
  switch (d3) {
    case "suma":
      console.log("suma: ", d1 + d2);
      break;
    case "resta":
      console.log("resta: ", d1 - d2);
      break;
    case "multiplicacion":
      console.log("multiplicacion: ", d1 * d2);
      break;
    case "division":
      console.log("division: ", d1 / d2);
      break;
    case "potencia":
      console.log("potencia: ", Math.pow(d1, d2));
      break;
    case "raiz":
      console.log("raiz primer número: ", Math.sqrt(d1));
      console.log("raiz segundo número: ", Math.sqrt(d2));
      break;
    case "logaritmo":
      console.log("logaritmo primer número: ", Math.log(d1));
      console.log("logaritmo segundo número: ", Math.log(d2));
      break;
    default:
      console.log("Operación no reconocida.");
      break;
  }
}

operaciones();
