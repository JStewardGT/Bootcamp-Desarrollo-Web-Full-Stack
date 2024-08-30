const fs = require('fs');
const path = require('path');

const directoryPath = process.argv[2];
const fileExtension = `.${process.argv[3]}`;

fs.readdir(directoryPath, (err, files) => {
  if (err) return console.error(err);

  files
    .filter(file => path.extname(file) === fileExtension)
    .forEach(file => console.log(file));
});

/*
# ¡APRENDE EL NODE.JS PARA GANAR MUCHO!

## LS FILTRADAS (Ejercicio 5 de 13)

Crea un archivo llamado filtrado-ls.js.

Crea un programa que imprima una lista de archivos en un directorio dado, filtrados por la extensión de los archivos. Se te proporcionará un nombre de directorio como primer argumento de tu programa (por ejemplo, '/ruta/a/dir/') y una extensión de archivo por la que filtrar como segundo argumento.

Por ejemplo, si recibes 'txt' como segundo argumento, tendrás que filtrar la lista para que sólo aparezcan archivos que terminen en .txt. Tenga en cuenta que el segundo argumento no irá precedido de '.'.

Tenga en cuenta que los primeros argumentos de su programa no son los primeros valores del array process.argv, ya que los dos primeros valores están reservados por Node para información del sistema.

La lista de ficheros debe imprimirse en la consola, un fichero por línea. Debe utilizar E/S asíncrona.

─────────────────────────────────────────────────────

## CONSEJOS

El método fs.readdir() toma un pathname como primer argumento y un callback como segundo. La firma del callback es

function callback (err, list) { /* ... *\\/ }

donde list es una matriz de cadenas de nombres de archivo.

La documentación sobre el módulo fs se puede encontrar apuntando su navegador aquí:
file://C:\Users\Johan\AppData\Roaming\nvm\v20.9.0\node_modules\learnyounod

La documentación sobre el módulo fs se puede encontrar apuntando su navegador aquí:

La documentación sobre el módulo fs se puede encontrar apuntando su navegador aquí:
file://C:\Users\Johan\AppData\Roaming\nvm\v20.9.0\node_modules\learnyounode\docs-nodejs\fs.html

También puede resultarle útil el módulo path de node, en particular el método extname.

La documentación sobre el módulo de ruta se puede encontrar apuntando su navegador aquí:
file://C:\Users\Johan\AppData\Roaming\nvm\v20.9.0\node_modules\learnyounode\docs-nodejs\path.html

Compruebe si su programa es correcto ejecutando este comando:

$ learnyounode verify filtered-ls.js

─────────────────────────────────────────────────────

  » Para imprimir estas instrucciones de nuevo, ejecuta: learnyounode print
  » Para ejecutar tu programa en un entorno de prueba, ejecuta: learnyounode run program.js
  » Para verificar tu programa, ejecuta: learnyounode verify program.js
  » Para obtener ayuda, ejecute: learnyounode help
*/