// Definición de un array 'months' con los nombres de los meses del año.
const months = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

// Mostrar una alerta con todos los meses del año, separados por ' - '.
alert("La matriz generada 'meses' tiene los siguientes datos;\n" + months.join(" - "));

// Utilizar el método 'slice' para crear un nuevo array 'vacation' que contiene los meses de agosto a octubre.

// Nota: El índice 7 corresponde a agosto y el índice 10 es exclusivo, por lo que el último mes incluido es octubre (índice 9).
const vacation = months.slice(7, 10);

// Mostrar una alerta con los meses de 'vacation', separados por ' - '.
alert("La matriz generada 'vacaciones' tiene los siguientes datos:\n" + vacation.join(" - "));

// ordeno los meses por estaciones del año en una matrix de dos dimenciones

const year = [
  ["enero", "febrero", "marzo"], // Meses de invierno
  ["abril", "mayo", "junio"], // Meses de primavera
  ["julio", "agosto", "septiembre"], // Meses de verano
  ["octubre", "noviembre", "diciembre"], // Meses de otoño
];

/* ========================== matrices multidimencionales ========================== */
jugador = new Array("Ferrero", "Nadal", "Moya", "Federer");
meses = new Array("Mayo", "Junio", "Julio");

ferrero = new Array(1000, 1250, 1650);
nadal = new Array(12500, 1450, 1650);
moya = new Array(800, 1050, 1150);
federer = new Array(1500, 1250, 1650);
