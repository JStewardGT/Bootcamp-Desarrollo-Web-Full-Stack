const http = require('http');

const url = process.argv[2];

http.get(url, (response) => {
  response.setEncoding('utf8');

  response.on('data', (data) => {
    console.log(data);
  });

  response.on('error', (err) => {
    console.error('Error:', err);
  });

  response.on('end', () => {
    console.log('');
  });
});


/*
# ¡APRENDE EL NODE.JS PARA GANAR MUCHO!

## CLIENTE HTTP (Ejercicio 7 de 13)

Crea un archivo llamado http-client.js.

Escribe un programa que realice una petición HTTP GET a una URL que se te proporciona como primer argumento de la
línea de comandos. Escribe el contenido de las cadenas de cada evento «data» de la respuesta en una nueva línea de la
consola (stdout).

─────────────────────────────────────────────────────────────────────────────

## CONSEJOS

Para este ejercicio necesitarás utilizar el módulo central http.

La documentación sobre el módulo http se puede encontrar apuntando su navegador aquí:
file://C:\Users\Johan\AppData\Roaming\nvm\v20.9.0\node_modules\learnyounode\docs-nodejs\http.html

El método http.get() es un atajo para peticiones GET simples, utilízalo para simplificar tu solución. El primer
argumento de http.get() puede ser la URL que desea obtener; proporcione una llamada de retorno como segundo argumento.

A diferencia de otras funciones callback, ésta tiene la firma

  function callback (response) { /* ... *\\/ }

Donde el objeto respuesta es un objeto Node Stream. Puedes tratar los Node Streams como objetos que emiten eventos.
Los tres eventos de mayor interés son: «data», “error” y “end”. Un evento se escucha así

  response.on('data', function (data) { /* ... *\\/ })

El evento «data» se emite cuando un fragmento de datos está disponible y puede ser procesado. El tamaño del fragmento
depende de la fuente de datos subyacente.

El objeto / flujo de respuesta que se obtiene de http.get() también tiene un método setEncoding(). Si llamas a este
método con «utf8», los eventos «data» emitirán Strings en lugar de los objetos Node Buffer estándar que tienes que
convertir explícitamente a Strings.

Comprueba si tu programa es correcto ejecutando este comando:

  $ learnyounode verify http-client.js

─────────────────────────────────────────────────────────────────────────────

» Para imprimir estas instrucciones de nuevo, ejecuta: learnyounode print
» Para ejecutar tu programa en un entorno de prueba, ejecuta: learnyounode run program.js
» Para verificar tu programa, ejecuta: learnyounode verify program.js
» Para obtener ayuda, ejecute: learnyounode help
*/