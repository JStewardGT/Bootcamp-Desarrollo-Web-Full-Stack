function comprueba_extension(formulario, archivo) {
  extensiones_permitidas = new Array(".gif", ".jpg", ".doc", ".pdf");
  if (!archivo) {
    // Si no se ha seleccionado ningún archivo
    alert("¡No has seleccionado ningún archivo!");
    return false;
  } else {
    extension = archivo.substring(archivo.lastIndexOf(".")).toLowerCase();
    permitida = false;
    for (var i = 0; i < extensiones_permitidas.length; i++) {
      if (extensiones_permitidas[i] == extension) {
        permitida = true;
        break;
      }
    }
    if (!permitida) {
      alert("Comprueba la extensión de los archivos a subir. \nSólo se pueden subir archivos con extensiones: "+ extensiones_permitidas.join());
      return false;
    } else {
      // Si la extensión es correcta, se procede con el envío del formulario
      alert("Todo correcto. Vamos a subir el formulario.");
      formulario.submit();
      return true;
    }
  }
  alert("Error: El tipo de archivo no es válido o el archivo está corrupto.");
  return false;
}
