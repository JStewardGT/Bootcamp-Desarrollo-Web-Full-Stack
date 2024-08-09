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

function validarFormulario() {
  //extraemos el valor del campo texto
  var textoCampo;
  textoCampo = window.document.formul.texto.value;
  // lo validamos como entero
  textoCampo = validarEntero(textoCampo);
  // colocamos el valor de nuevo
  window.document.formul.texto.value = textoCampo;
}
