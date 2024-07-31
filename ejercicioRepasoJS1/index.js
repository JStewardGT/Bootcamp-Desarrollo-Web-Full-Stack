const numero1 = document.getElementById("numero1"),
  numero2 = document.getElementById("numero2"),
  buttonSuma = document.getElementById("buttonSuma"),
  resultado = document.getElementById("resultado");

function sumar() {
  const suma = parseInt(numero1.value) + parseInt(numero2.value);
  resultado.value = suma;
}

buttonSuma.addEventListener("click", sumar);
