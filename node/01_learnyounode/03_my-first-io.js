const fs = require('fs');

const filePath = process.argv[2];

const fileContent = fs.readFileSync(filePath, 'utf8');

const numberOfNewLines = fileContent.split('\n').length - 1;

console.log(numberOfNewLines);

/*
# ¡APRENDERTE EL NODE.JS PARA GANAR MUCHO!

## ¡MI PRIMER I/O! (Ejercicio 3 de 13)

Crea un archivo llamado mi-primera-io.js.

Escribe un programa que utilice una única operación síncrona del sistema de archivos para leer un archivo e imprimir
el número de nuevas líneas (\n) que contiene en la consola (stdout), de forma similar a ejecutar cat archivo | wc -l.

La ruta completa al archivo a leer se proporcionará como primer argumento de la línea de comandos (es decir,
process.argv[2]). No necesita crear su propio archivo de prueba.

─────────────────────────────────────────────────────────────────────────────

## CONSEJOS

Para realizar una operación de sistema de ficheros vas a necesitar el módulo fs de la librería principal de Node. Para
cargar este tipo de módulo, o cualquier otro módulo «global», utiliza el siguiente encantamiento:

  const fs = require('fs')

Ahora tienes el módulo fs completo disponible en una variable llamada fs.

Todos los métodos síncronos (o de bloqueo) del sistema de ficheros del módulo fs terminan en 'Sync'. Para leer un
archivo, necesitarás usar fs.readFileSync('/ruta/a/archivo'). Este método devolverá un objeto Buffer que contiene el
contenido completo del archivo.

Puedes encontrar documentación sobre el módulo fs apuntando tu navegador aquí:
file://C:\Users\Johan\AppData\Roaming\nvm\v20.9.0\node_modules\learnyounode\docs-nodejs\fs.html

Los objetos Buffer son la forma que tiene Node de representar eficientemente matrices arbitrarias de datos, ya sean
ascii, binarios o de cualquier otro formato. Los objetos Buffer pueden ser convertidos en cadenas simplemente llamando
al método toString() sobre ellos. ej. const str = buf.toString().

La documentación sobre Buffers se puede encontrar apuntando su navegador aquí:
file://C:\Users\Johan\AppData\Roaming\nvm\v20.9.0\node_modules\learnyounode\docs-nodejs\buffer.html

Si estás buscando una manera fácil de contar el número de nuevas líneas en una cadena, recuerda que una cadena
JavaScript puede ser .split() en una matriz de subcadenas y que '\n' se puede utilizar como delimitador. Tenga en
cuenta que el archivo de prueba no tiene un carácter de nueva línea ('\n') al final de la última línea, por lo que
utilizando este método terminará con una matriz que tiene un elemento más que el número de nuevas líneas.

Comprueba si tu programa es correcto ejecutando este comando:

  $ learnyounode verify mi-primera-io.js

─────────────────────────────────────────────────────────────────────────────

  » Para imprimir estas instrucciones de nuevo, ejecute: learnyounode print
  » Para ejecutar tu programa en un entorno de prueba, ejecuta: learnyounode run program.js
  » Para verificar tu programa, ejecuta: learnyounode verify program.js
  » Para obtener ayuda, ejecute: learnyounode help

Traducción realizada con la versión gratuita del traductor DeepL.com
*/