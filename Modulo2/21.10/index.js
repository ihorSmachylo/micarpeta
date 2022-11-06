const sumando = require ("./sumar.js")
const saludando = require ("./saludar.js")
const exactMath = require('exact-math');
const nombre1 = require("./APP/ejercicio4.js");
//const saludoihor = requiere('./app/ejericio4.js')
//ejercicio 2
console.log(`hola ${saludando}`)

//console.log("probando la suma... " + sumando(3, 5));
//ejercicio  3
console.log(exactMath.add(789,34,250443));
console.log(exactMath.sub(2059,79));
console.log(exactMath.mul(3.24,97856));
console.log(exactMath.div(1205,12002));

///Ejercicio 4



//ejercicio 5 Delcara tu nombre en una variable en otra carpeta

console.log(`hola ${nombre1}`)

// ejercicio 6

const ejercicio6 = require("./sumar")
console.log(String.length.ejercicio6)
//no me  funciona 


/*ejercico 7.- Crea un mòdul propi amb una funció. La funció esPar() retorna "true" en cas que
el número sigui par i "false" en cas contrari. Mostra el resultat de la funció per node.*/

const importarPares = require("./sumar")

console.log(importarPares)(2)

