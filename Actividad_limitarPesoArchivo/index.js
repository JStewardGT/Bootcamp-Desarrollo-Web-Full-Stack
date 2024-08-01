function validar() {
  var fs = document.getElementById("FS");
  var files = FS.files;

  // If there is (at least) one file selected
  if (files.length > 0) {
    if (files[0].size > 75000) {
      fs.setCustomValidity("El archivo seleccionado no puede superar los 75 kB");
      alert("Archivo demasiado grande");
      return;
    } else {
      alert("Archivo permitido");
    }
  }

  //No custom constraint violation
  fs.setCustomValidity("");
}
window.onload = function () {
  document.getElementById("FS").onchange = validar;
};
