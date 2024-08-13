function valida(f) {
  var ok = true;
  var msg = "Debe escribir contenido en los campos:\n";

  if (f.elements[0].value === "") {
    msg += "- Marca 1\n";
    ok = false;
  }

  if (f.elements["marca2"].value === "") {
    msg += "- Marca 2\n";
    ok = false;
  }

  if (f.marca3.value === "") {
    msg += "- Marca 3\n";
    ok = false;
  }

  if (!ok) {
    alert(msg);
    return ok;
  }
}
