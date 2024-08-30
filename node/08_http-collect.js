const http = require('http');

const url = process.argv[2];

http.get(url, (response) => {
  let data = '';

  response.setEncoding('utf8');

  response.on('data', (chunk) => {
    data += chunk;
  });

  response.on('end', () => {
    console.log(data.length);
    console.log(data);
  });

  response.on('error', (err) => {
    console.error('Error:', err);
  });
});


/*
# ¡APRENDE EL NODE.JS PARA GANAR MUCHO!

## HTTP COLLECT (Ejercicio 8 de 13)

Crea un archivo llamado http-collect.js.

Escribe un programa que realice una petición HTTP GET a una URL que se te proporcione como primer argumento de la línea de comandos. Recoge todos los datos del servidor (no sólo el primer evento «data») y luego escribe dos líneas en la consola (stdout).

La primera línea que escriba debe ser un número entero que represente el número de caracteres recibidos del servidor. La segunda línea debe contener la cadena completa de caracteres enviada por el servidor.

─────────────────────────────────────────────────────────────────────────────

## CONSEJOS

Hay dos enfoques que puede tomar para este problema:

1) Recoger datos a través de múltiples eventos «data» y unir los resultados antes de imprimir la salida. Utiliza el evento «end» para determinar cuándo termina el flujo y puedes escribir la salida.

2) Utilizar un paquete de terceros para abstraer las dificultades que entraña la recogida de un flujo completo de datos. Dos paquetes diferentes proporcionan una API útil para resolver este problema (¡probablemente hay más!): bl (Buffer List) y concat-stream; ¡elige el que quieras!

<https://npmjs.com/bl> <https://npmjs.com/concat-stream>

Para instalar un paquete de Node, utiliza el gestor de paquetes de Node npm. Simplemente escriba:

  $ npm install bl

Y descargará e instalará la última versión del paquete en un subdirectorio llamado node_modules. Cualquier paquete en este subdirectorio bajo su archivo de programa principal puede ser cargado con la sintaxis require sin ser prefijado por './':

    const bl = require('bl')

Node buscará primero en los módulos del núcleo y luego en el directorio node_modules donde se encuentra el paquete.

Si no tienes conexión a Internet, simplemente crea un directorio node_modules y copia todo el directorio del paquete que quieras usar dentro del directorio de instalación de learnyounode:

file://C:\Users\Johan\AppData\Roaming\nvm\v20.9.0\node_modules\learnyounode\node_modules\bl
file://C:@Users\Johan\AppData\Roaming\nvm\v20.9.0\node_modules\learnyounode\node_modules\concat-stream

Tanto bl como concat-stream pueden recibir un flujo y recogerán los datos por ti. Una vez que el flujo ha terminado, una llamada de retorno se disparará con los datos:

  response.pipe(bl(function (err, data) { /* ... *\\/ }))
  // o
  response.pipe(concatStream(function (data) { /* ... *\\/ }))

Tenga en cuenta que probablemente necesitará data.toString() para convertir desde un Buffer.

La documentación de ambos módulos ha sido instalada junto con learnyounode en tu sistema y puedes leerla apuntando tu navegador aquí:

file://C:\Users\Johan\AppData\Roaming\nvm\v20.9.0\node_modules\learnyounode\docs\bl.html
file://C:\Users\Johan\AppData\Roaming\nvm\v20.9.0\node_modules\learnyounode\docs\concat-stream.html

Compruebe si su programa es correcto ejecutando este comando:

  $ learnyounode verify http-collect.js

─────────────────────────────────────────────────────────────────────────────

» Para imprimir estas instrucciones de nuevo, ejecuta: learnyounode print
» Para ejecutar tu programa en un entorno de prueba, ejecuta: learnyounode run program.js
» Para verificar tu programa, ejecuta: learnyounode verify program.js
» Para obtener ayuda, ejecute: learnyounode help
*/