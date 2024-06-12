// parametros a y b, menor a mayor
function lowestToHighest(a, b) {
  return a - b;
}

// mayor a menor
function highestToLowest(a, b) {
  return b - a;
}

numbers = new Array(25, 89, 123, 2, 67, 98, 1000, 45, 345, 42, 77, 15);
letters = new Array("a", "g", "b", "i", "c", "j", "z", "d", "x", "h", "n", "l");

document.write("Números sin ordenar: " + numbers.join() + "<br />");
document.write("Números ordenados por defecto: " + numbers.sort() + "<br />");

// sort (a, b), devuelve le manera ordenada los elementos de la matriz.

document.write("Números ordenados de menor a mayor: " + numbers.sort(lowestToHighest) + "<br />");
document.write("Números ordenados de mayor a menor: " + numbers.sort(highestToLowest) + "<br />");

document.write("<br /> <br />");

document.write("Letras sin ordenar: " + letters.join() + "<br />");
document.write("Letras ordenadas por defecto: " + letters.sort() + "<br />");
