// console.log(process.argv)

const args = process.argv.slice(2);

const sum = args.reduce((total, num) => total + Number(num), 0);

console.log(sum);

/*
# ¡APRENDERTE EL NODE.JS PARA GANAR MUCHO!

## BABY STEPS (Ejercicio 2 de 13)

Crea un archivo llamado baby-steps.js.

Escribe un programa que acepte uno o más números como argumentos en la línea de comandos e imprima la suma de esos
números en la consola (stdout).

─────────────────────────────────────────────────────

## CONSEJOS

Puedes acceder a los argumentos de la línea de comandos a través del objeto global process. El objeto proceso tiene
una propiedad argv que es un array que contiene la línea de comandos completa, es decir, process.argv.

Para empezar, escribe un programa que contenga simplemente:

 console.log(proceso.argv)

Ejecútalo con node baby-steps.js y algunos números como argumentos. p.e:

 $ node baby-steps.js 1 2 3

En cuyo caso la salida sería un array parecido a:

 ['node', '/ruta/a/tu/pasos-de-bebebé.js', '1', '2', '3']

Tendrás que pensar en cómo recorrer los argumentos numéricos para poder mostrar sólo su suma. El primer elemento del
array process.argv es siempre 'node', y el segundo elemento es siempre la ruta a tu fichero baby-steps.js, así que
necesitas empezar en el tercer elemento (índice 2), añadiendo cada elemento al total hasta que llegues al final del
array.

También ten en cuenta que todos los elementos de process.argv son cadenas y puede que necesites convertirlos en
números. Puedes hacerlo anteponiendo el prefijo + a la propiedad o pasándola a Number(). Por ejemplo, +process.argv[2]
o Number(process.argv[2]).

Comprueba si tu programa es correcto ejecutando este comando:

 $ learnyounode verify baby-steps.js

learnyounode proporcionará argumentos a tu programa cuando ejecutes learnyounode verify baby-steps.js, así que no
necesitas proporcionarlos tú mismo. Para probar tu programa sin verificarlo, puedes invocarlo con learnyounode run
baby-steps.js. Cuando usas run, estás invocando el entorno de pruebas que learnyounode configura para cada ejercicio.

─────────────────────────────────────────────────────

» Para imprimir estas instrucciones de nuevo, ejecute: learnyounode print
» Para ejecutar tu programa en un entorno de prueba, ejecuta: learnyounode run program.js
» Para verificar tu programa, ejecuta: learnyounode verify program.js
» Para obtener ayuda, ejecute: learnyounode help

Traducción realizada con la versión gratuita del traductor DeepL.com
*/