const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) return console.error(err);

  const numberOfNewLines = data.split('\n').length - 1;

  console.log(numberOfNewLines);
});

/*
# ¡APRENDERTE EL NODE.JS PARA GANAR MUCHO!

## ¡MI PRIMER I/O ASYNC! (Ejercicio 4 de 13)

Crea un archivo llamado mi-primer-async-io.js.

Escribe un programa que utilice una única operación asíncrona del sistema de archivos para leer un archivo e imprimir el número de nuevas líneas que contiene en la consola (stdout), similar a ejecutar cat archivo | wc -l.

La ruta completa al archivo a leer se proporcionará como primer argumento de la línea de comandos.

─────────────────────────────────────────────────────────────────────────────

# CONSEJOS

La solución a este problema es casi la misma que la del problema anterior, excepto que ahora debes hacerlo a la manera de Node.js: asíncrono.

En lugar de fs.readFileSync() querrás usar fs.readFile() y en lugar de usar el valor de retorno de este método necesitas recoger el valor de una función callback que pasas como segundo argumento. Para aprender más sobre callbacks, echa un vistazo a:
(https://github.com/maxogden/art-of-node#callbacks).

Recuerda que los callbacks idiomáticos de Node.js normalmente tienen la firma

function callback (err, data) { /* ... *\\/ }

por lo que puedes comprobar si se ha producido un error comprobando si el primer argumento es verdadero. Si no hay error, deberías tener tu objeto Buffer como segundo argumento. Al igual que con readFile(), puede suministrar 'utf8' como segundo argumento y poner la llamada de retorno como tercer argumento y obtendrá una Cadena en lugar de un Buffer.

La documentación sobre el módulo fs se puede encontrar apuntando su navegador aquí:
file://C:\Users\Johan\AppData\Roaming\nvm\v20.9.0\node_modules\learnyounod e\docs-nodejs\fs.html

Compruebe si su programa es correcto ejecutando este comando:

$ learnyounode verify my-first-async-io.js

─────────────────────────────────────────────────────────────────────────────

» Para imprimir estas instrucciones de nuevo, ejecute: learnyounode print
» Para ejecutar tu programa en un entorno de prueba, ejecuta: learnyounode run program.js
» Para verificar tu programa, ejecuta: learnyounode verify program.js
» Para obtener ayuda, ejecute: learnyounode help

Traducción realizada con la versión gratuita del traductor DeepL.com
*/