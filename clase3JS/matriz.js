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
// Arrays de jugadores y meses
var jugador = ["Ferrero", "Nadal", "Moya", "Federer"];
var meses = ["Mayo", "Junio", "Julio"];

// Arrays de puntuaciones
var ferrero = [1000, 1250, 1650];
var nadal = [1250, 1450, 1650];
var moya = [800, 1050, 1150];
var federer = [1500, 1850, 2050];

// Matriz total
var total = [ferrero, nadal, moya, federer];

// Generar la tabla
document.write("<table border=1>");
document.write("<tr><td><b>Meses</b></td>");
for (var c = 0; c < 3; c++) {
  document.write("<td>" + meses[c] + "</td>");
}
document.write("</tr>");

for (var cc = 0; cc < 4; cc++) {
  document.write("<tr><td>" + jugador[cc] + "</td>");
  for (var ccc = 0; ccc < 3; ccc++) {
    document.write("<td><sub>[" + cc + "][" + ccc + "]</sub> " + total[cc][ccc] + "</td>");
  }
  document.write("</tr>");
}
document.write("</table>");
