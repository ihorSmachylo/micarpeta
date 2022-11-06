// CLIENTE 1 
/*
let producto1 = 9.95;
let producto2 = 10.95;
let producto3 = 89.95;
let producto4 = 3.95;
let total = (producto1 + producto2 + producto3 + producto4);
console.log("el total sin portes... sube a " + total);
if (total >= 60 && total < 100){
    console.log("más de 60 euros, descuento en los gastos de envío");
    total = total + 4.95;
} else if (total >= 100){
    console.log("gastos de envío gratis");
    total;
} else {
    console.log("gastos de envío sin descuento: 9.95!");
    total = total + 9.95;
}
console.log("EL TOTAL CON PORTES ES DE " + total);
*/
/*
let producto1 = 9.95;
let producto2 = 10.95;

totalSINportes(producto1, producto2);
gastosEnvio();

function totalSINportes(item1, item2){
            //9.95 + 10.95
    total = item1 + item2;
    console.log("el total sin portes... sube a " + total);
}

function gastosEnvio(){

    if (total >= 60 && total < 100){
        console.log("más de 60 euros, descuento en los gastos de envío");
        total = total + 4.95;
    } else if (total >= 100){
        console.log("gastos de envío gratis");
        total;
    } else {
        console.log("gastos de envío sin descuento: 9.95!");
        total = total + 9.95;
    }
    
    console.log("EL TOTAL CON PORTES ES DE " + total);} 


    //ejemplos
/*
    let num1 = parseInt(prompt("dime un numero"));
let num2 = parseInt(prompt("dime otro numero"));

let respuesta = prompt("quieres sumar o restar?");

if (respuesta === "sumar"){
    alert(sumar(num1, num2));
} else if (respuesta === "restar"){
    alert(restar(num1, num2));
} else {
    alert("valor no válido");
}

function sumar(a, b){
    return a + b;
}

function restar(a, b){
    return a - b;
}

/*
let perrito = "Toby";
residenciaCanina(perrito);
function residenciaCanina(animal) {
    console.log("perfecto, nos quedamos unos dias a " + animal);
}
let num1 = 5;
let num2 = 10;
             // 15
let total = suma(num1, num2);
total = total + 5.95;
console.log("total con gastos " + total);
function suma(item1, item2) {
    console.log("console.log de la función " + item1+item2); 
    return item1+item2
    // imprimo
    // la suma da 15... quiero cconseguir ese "15" para sumarle los gastos de envio
}
*/
// PRIMERO, DECLARAMOS VARIABLES

let num1 = parseInt(prompt("dime PRIMER numero"));
let num2 = parseInt(prompt("dime SEGUNDO numero"));
let num3 = parseInt(prompt("dime TERCER numero"));
let nombre = prompt("dime tu nombre");

let saludarArrow = (nombre) => `Hola ${nombre}`

alert(saludarArrow(nombre) + " el resultado de la operación es " + calculos(num1, num2, num3));



// console.log("el total es " + calculos(num1, num2, num3) )
console.log("el total es " + total);

function calculos(a, b, c) {
    let suma = (a + b) * c;
    return suma + 50;
}

function saludar(nombre) {
    return `Hola ${nombre}`
}