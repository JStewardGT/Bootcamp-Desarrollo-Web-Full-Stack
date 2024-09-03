const mymodule = require('./mymodule');

const dir = process.argv[2];
const ext = process.argv[3];

mymodule(dir, ext, (err, files) => {
  if (err) return console.error('Error:', err);

  files.forEach(file => console.log(file));
});

/*
# ¡APRENDE EL NODE.JS PARA GANAR MUCHO!

## HACERLO MODULAR (Ejercicio 6 de 13)

Crea dos archivos llamados make-it-modular.js y mymodule.js.

Este problema es igual que el anterior pero introduce el concepto de módulos. Necesitarás crear dos archivos para
resolverlo.

Crea un programa que imprima una lista de archivos en un directorio dado, filtrados por la extensión de los archivos.
El primer argumento es el nombre del directorio y el segundo argumento es el filtro de extensión. Imprime la lista de
ficheros (un fichero por línea) en la consola. Debe utilizar E/S asíncrona.

Debes escribir un archivo de módulo (mymodule.js) para hacer la mayor parte del trabajo. El módulo debe exportar una
única función que tome tres argumentos: el nombre del directorio, la cadena de extensión del nombre del archivo y tu
función de llamada de retorno, en ese orden. No alteres la cadena de extensión del nombre de archivo de ninguna manera
antes de pasársela a tu módulo.

La función callback debe ser llamada usando la convención idiomática node(err, data). Esta convención estipula que a
menos que haya un error, el primer argumento pasado a la llamada de retorno será null, y el segundo serán tus datos.
En este ejercicio, los datos serán su lista filtrada de archivos, como una matriz. Si recibes un error, por ejemplo de
tu llamada a fs.readdir(), la llamada de retorno debe ser llamada con el error como primer y único argumento.

No debes imprimir directamente a la consola desde tu archivo de módulo, sólo desde tu programa original.

En el caso de que se produzca un error en tu programa original, simplemente compruébalo e imprime un mensaje
informativo en la consola.

Estas cuatro cosas son el contrato que su módulo debe seguir.

  1. Exportar una única función que tome exactamente los argumentos descritos.
  2. Llame a la devolución de llamada exactamente una vez con un error o algunos datos como se describe.
  3. No cambies nada más, como las variables globales o stdout.
  4. Maneja todos los errores que puedan ocurrir y pásalos al callback.

El beneficio de tener un contrato es que tu módulo puede ser usado por cualquiera que espere este contrato. Así que tu
módulo podría ser usado por cualquiera que haga learnyounode, o el verificador, y simplemente funcionar.

─────────────────────────────────────────────────────────────────────────────

## CONSEJOS

Crea un nuevo módulo creando un nuevo archivo (mymodule.js) que sólo contenga tu función de lectura y filtrado de
directorios. Para definir una única función de exportación, asigna tu función al objeto module.exports,
sobreescribiendo lo que ya está allí:

  module.exports = function (args) { /* ... *\\/ }

O puedes usar una función con nombre y asignarle el nombre.

Para usar tu nuevo módulo en tu archivo de programa original (make-it-modular.js), usa la llamada require() de la misma
manera que require('fs') para cargar el módulo fs. La única diferencia es que para los módulos locales debe anteponerse
el prefijo './'. Por lo tanto, si su archivo se llama mymodule.js entonces

  const mymodule = require('./mymodule.js')

El '.js' es opcional y a menudo se omite.

Ahora tienes el objeto module.exports en tu módulo asignado a la variable mymodule. Como estás exportando una única
función, ¡mimodulo es una función que puedes llamar!

También ten en cuenta que es idiomático comprobar errores y hacer early-returns dentro de funciones callback:

  function bar (callback) {
    foo(function (err, data) {
    if (err) { return callback(err) } // retorno anticipado

    // ... no hay error, sigue haciendo cosas chulas con `data

    // todo ha ido bien, llama a callback con `null` como argumento de error

    callback(null, datos)
      })
  }

Comprueba si tu programa es correcto ejecutando este comando:

  $ learnyounode verify make-it-modular.js

─────────────────────────────────────────────────────────────────────────────

  » Para imprimir estas instrucciones de nuevo, ejecuta: learnyounode print
  » Para ejecutar tu programa en un entorno de prueba, ejecuta: learnyounode run program.js
  » Para verificar tu programa, ejecuta: learnyounode verify program.js
  » Para obtener ayuda, ejecute: learnyounode help
*/