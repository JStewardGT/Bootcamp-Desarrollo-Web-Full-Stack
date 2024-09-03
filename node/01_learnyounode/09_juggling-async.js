const http = require('http');

const urls = process.argv.slice(2);
const results = [];
let count = 0;

urls.forEach((url, index) => {
  http.get(url, (response) => {
    let data = '';

    response.setEncoding('utf8');

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      results[index] = data;
      count++;

      if (count === urls.length) {
        results.forEach(result => console.log(result));
      }
    });

    response.on('error', (err) => {
      console.error('Error:', err);
    });
  });
});

/*
# ¡APRENDE EL NODE.JS PARA GANAR MUCHO!

## JUGGLING ASYNC (Ejercicio 9 de 13)

Crea un archivo llamado juggling-async.js.

Este problema es igual que el anterior (HTTP COLLECT) en el sentido de que necesitas usar http.get(). Sin embargo,
esta vez se te proporcionarán tres URLs como los tres primeros argumentos de la línea de comandos.

Debe recoger el contenido completo proporcionado por cada una de las URLs e imprimirlo en la consola (stdout).
No necesitas imprimir la longitud, sólo los datos como una cadena; una línea por URL. El inconveniente es que debe
imprimirlos en el mismo orden en que se le proporcionan las URL como argumentos de la línea de comandos.

─────────────────────────────────────────────────────────────────────────────

## CONSEJOS

No esperes que estos tres servidores funcionen bien. No van a darte respuestas completas en el orden que esperas,
así que no puedes ingenuamente imprimir la salida tal y como la obtienes porque estarán fuera de orden.

Tendrás que poner en cola los resultados y hacer un seguimiento de cuántas de las URLs han devuelto todo su contenido.
Sólo cuando los tengas todos, podrás imprimir los datos en la consola.

Contar los callbacks es una de las formas fundamentales de gestionar async en Node. En lugar de hacerlo manualmente,
puede que te resulte más cómodo recurrir a [`async`](https://www.npmjs.com/package/async) o
[`run-parallel`](https://www.npmjs.com/package/run-parallel). Pero para este ejercicio, hazlo sin eso.

Comprueba si tu programa es correcto ejecutando este comando:

  $ learnyounode verify malabares-async.js

─────────────────────────────────────────────────────────────────────────────

» Para imprimir estas instrucciones de nuevo, ejecuta: learnyounode print
» Para ejecutar tu programa en un entorno de prueba, ejecuta: learnyounode run program.js
» Para verificar tu programa, ejecuta: learnyounode verify program.js
» Para obtener ayuda, ejecute: learnyounode help
*/