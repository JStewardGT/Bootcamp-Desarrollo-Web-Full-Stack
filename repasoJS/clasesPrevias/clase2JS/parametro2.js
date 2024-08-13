function abc() {
  // Obtener la URL actual
  const url = window.location.href;
  // Extraer la parte de la URL después del '?'
  const params = new URLSearchParams(url.split("?")[1]);

  // Obtener los valores de los parámetros
  const nombre = params.get("0");
  const codigo = params.get("1");
  const cargo = params.get("2");
  const sueldo = parseFloat(params.get("3"));
  const telefono = params.get("4");

  // Asignar los valores a los campos del formulario
  document.querySelector("#parm1").value = nombre;
  document.querySelector("#parm2").value = codigo;
  document.querySelector("#parm3").value = cargo;
  document.querySelector("#parm4").value = sueldo;
  document.querySelector("#parm5").value = telefono;

  // Determinar la categoría del sueldo
  let categoriaSueldo = "E";
  if (sueldo >= 500000) categoriaSueldo = "D";
  if (sueldo >= 1000000) categoriaSueldo = "C";
  if (sueldo >= 2000000) categoriaSueldo = "B";
  if (sueldo >= 5000000) categoriaSueldo = "A";
  document.querySelector("#parm6").value = categoriaSueldo;

  // Determinar la categoría del cargo
  let categoriaCargo = "Operativo";
  if (cargo == "1") categoriaCargo = "Ejecutivo";
  if (cargo == "2" || cargo == "3") categoriaCargo = "Administrativo";
  document.querySelector("#parm7").value = categoriaCargo;

  // Deshabilitar el botón después de procesar
  document.querySelector('input[name="boton"]').disabled = true;
}
