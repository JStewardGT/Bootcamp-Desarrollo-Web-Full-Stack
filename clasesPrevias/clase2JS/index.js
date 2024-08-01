function dispararParametro() {
  // Obtener los valores de los campos del formulario
  const nombre = document.querySelector("#nombre").value;
  const codigo = document.querySelector("#codigo").value;
  const cargos = document.querySelector("#cargos").value;
  const sueldo = document.querySelector("#sueldo").value;
  const telefono = document.querySelector("#telefono").value;

  // Codificar los valores para usarlos en la URL
  const parametros = [
    encodeURIComponent(nombre),
    encodeURIComponent(codigo),
    encodeURIComponent(cargos),
    encodeURIComponent(sueldo),
    encodeURIComponent(telefono),
  ];

  // Abrir la nueva ventana con los parámetros concatenados en la URL
  window.open("parametro2.html?" + parametros.join("&"), "PARAMETRO");
}
