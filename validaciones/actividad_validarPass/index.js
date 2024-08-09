function comprobarClave() {
  let clave1 = document.f1.clave1.value;
  let clave2 = document.f1.clave2.value;

  if (clave1 === clave2) {
    alert("Las dos claves son iguales...\nRealizamos las acciones del caso positivo");
  } else {
    alert("Las dos claves son distintas...\nRealizamos las acciones del caso negativo");
  }
}
