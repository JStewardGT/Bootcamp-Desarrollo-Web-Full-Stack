const numero1 = document.getElementById("numero1"),
  numero2 = document.getElementById("numero2"),
  buttonSuma = document.getElementById("buttonSuma"),
  buttonRestar = document.getElementById("buttonRestar"),
  buttonMultiplicar = document.getElementById("buttonMultiplicar"),
  buttonDividir = document.getElementById("buttondividir"),
  resultado = document.getElementById("resultado");

function calcular(operacion) {
  const num1 = parseInt(numero1.value);
  const num2 = parseInt(numero2.value);
  let result;

  switch (operacion) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        result = "Error: División por cero";
      } else {
        result = num1 / num2;
      }
      break;
    default:
      result = "Operación inválida";
  }

  resultado.value = result;
}

buttonSuma.addEventListener("click", () => calcular("+"));
buttonRestar.addEventListener("click", () => calcular("-"));
buttonMultiplicar.addEventListener("click", () => calcular("*"));
buttonDividir.addEventListener("click", () => calcular("/"));
