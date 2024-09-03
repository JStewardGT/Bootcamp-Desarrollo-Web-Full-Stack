let path = require('path')
let util = require('util')

console.log(path.basename(__filename))
console.log(path.join(__dirname, 'www', 'img', 'home', 'uploads'));
let nombre = 'Juan'
let edad = 25
let texto = util.format('Hola %s, tienes %d años', nombre, edad)
console.log(texto);
