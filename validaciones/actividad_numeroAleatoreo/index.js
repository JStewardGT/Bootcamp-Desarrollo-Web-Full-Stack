function aleatorio(a,b) {
  return Math.floor(Math.random() * (b - a + 1)) + parseInt(a);
}

function validarFormulario() {
  //extraemos el valor del campo texto
  let inferior = window.document.formul.min.value;
  let superior = window.document.formul.max.value;

  // lo validamos como entero
  inferior = validarEntero(inferior);
  superior = validarEntero(superior);

  textoCampo = aleatorio(inferior, superior);

  // colocamos el valor de nuevo
  window.document.formul.texto.value = textoCampo;
}

function validarEntero(valor) {
  //intento convertir a entero.
  //si era un entero no le afecta, si no lo era intenta convertir
  valor = parseInt(valor);

  //compruebo si es un valor numerico
  if (isNaN(valor)) {
    // entonces (no es numero) devuelvo el valor cadena vacia
    return;
  } else {
    // en caso contrario (si era un numero) devuelvo el valor
    return valor;
  }
}