/*
// PRIMERO PREGUNTAMOS EDAD
let respuesta = parseInt(prompt("qué edad tienes?"));
let carnet;
 
// CONDICIONAL PARA LA EDAD
if (respuesta >= 18 && respuesta <= 75) {
 
  // SI TIENE ENTRE 18 Y 75, PREGUNTAMOS SI TIENE CARNET
  carnet = preguntarCarnet();
  // SI TIENE CARNET, PERFECTO, SINO, EL PROGRAMA AVISA
  comprobacion(carnet);
 
} else if (respuesta > 75) {
  alert("demasiado mayor para conducir");
} else {
  alert("NO tienes 18");
}
 
function preguntarCarnet() {
  let carnet = prompt("tienes carnet?");
  // AQUÍ IMPONEMOS REDUCCIÓN A MINÚSCULA Y QUITAMOS ESPACIOS DELANTEROS/TRASEROS
  carnet = carnet.toLowerCase().trim();
  if (carnet == "si" || carnet == "sí") {
    return carnet = true;
  } else {
    return carnet = false;
  }
}
 
// ESTA FUNCIÓN COMPRUEBA SI TIENES CARNET. EL PARÁMETRO ES TRUE O FALSE, DEPENDIENDO DE ESTO REALIZA UN RETURN
function comprobacion(a){
    if (a == true) {
        alert("muy bien: puedes conducir");
        tieneCarnet();
      } else {
        alert("tienes la edad pero NO puedes conducir");
      }
}
 
// ESTA FUNCIÓN, UNA VEZ SABEMOS QUE EL USUARIO TIENE CARNET, PREGUNTAMOS. SI NO ES UNA OPCIÓN VÁLIDA, VOLVEMOS A PREGUNTAR... 
function tieneCarnet(){
    let respuesta = prompt("Qué vehículo quieres alquilar: coche, moto, bici...");
 
    switch (respuesta){
        case "coche": pintarCoche();
        break;
        case "moto":
        break;
        case "bicicleta":
        break;
        case "monopatin":
        break;
        default: alert("No entiendo, te vuelvo a preguntar");
        tieneCarnet();
    }
}
 
function pintarCoche(){
    document.getElementById("webCompleta").innerHTML = `
        <img src="https://www.skikamel.com/viajes/images/alquiler_de_coches.jpg" alt="fotos de coches disponibles">
        `;
}

*/

/*

1)Escriu  un  programa  que  demani  dos  números  i  que  mostri  la  suma,  la  resta,  la multiplicació, la mitjana, el més gran i el més petit.
*/

/*

alert ("Ahora le pediremos 2 numeros")

let num1 = parseInt(prompt("dime un numero"));
let num2 =parseInt(prompt("dime otro numero"))

console.log ("el resultado de la suma es:",num1+num2)
console.log("el resultado de la resta es:",num1-num2)
console.log("el resultado de la multiplicacion es:",num1*num2)
console.log("el resultado de la media entre estos numeros es:",(num1+num2)/2)
console.log("el numero mas grande es ..",num1>num2)
*/




/*2)Crearem un programa escolar que, en base a l’edat de l’usuari, ens diguia quin àmbit educatiu pertany. 
Si l'edat de l'usuari és inferior a 3, mostrarà un missatge que indiqui: "Escola bressol". 
Si l'edates entre 3 a 6 anys, "educació infantil". 
Si l'edates entre 6 a 11 anys, "educació primària".
Si l'edatés entre 12 i 16, "educació secundària".*/
/*
alert("Que edad tienes...")

let edad = prompt("que edad tienes")

if (edad < 3) {
    alert("Hauria d'anar a la escola bresol")
} else if (edad >= 3 && edad <= 6) {
    alert("educació infantil")
} else if (edad >= 6 && edad <= 11) {
    alert("educació primaria")
} else if (edad >= 12 && edad <= 16){
    alert("educació secundaria")}

*/

/*3)Escriu un programa que demani a l'usuari quin mes de l'any és (gener, febrer...). Mostrar per pantalla si es primavera, estiu, tardor o hivern segons el mes que l'usuari introdueixi. Manipula el DOM per tal de que es mostri alguna imatge de l’estació per pantalla. */




let mes = prompt("que mes estamos");

switch (mes){
    case "enero": document.getElementById("print").innerHTML += `
    <h3>La temporada del año es invierno, y mas concretamente  enero</h3>
    <img
        src="../img/invierno.jpg"
        alt="Foto de  invierno"
      />`
    break;
    case "febrero":document.getElementById("print").innerHTML += `
    <h3>La temporada del año es invierno</h3>
    <img
        src="../img/invierno.jpg"
        alt="Foto de  invierno"
      />`
    break;
    case "marzo":document.getElementById("print").innerHTML += `
    <h3>La temporada del año es invierno</h3>
    <img
        src="../img/invierno.jpg"
        alt="Foto de  invierno"
      />`
    break;
    case "abril":document.getElementById("print").innerHTML += `
    <h3>La temporada del año es primavera</h3>
    <img
        src="../img/primavera.jpg"
        alt="Foto de  primavera"
      />`
    break;
    case "mayo":document.getElementById("print").innerHTML += `
    <h3>La temporada del año es primavera</h3>
    <img
        src="../img/primavera.jpg"
        alt="Foto de  primavera"
      />`
    break;
    case "junio":document.getElementById("print").innerHTML += `
    <h3>La temporada del año es primavera</h3>
    <img
        src="../img/primavera.jpg"
        alt="Foto de  primavera"
      />`
    break;
    case "julio":document.getElementById("print").innerHTML += `
    <h3>La temporada del año es verano</h3>
    <img
        src="../img/verano.jpg"
        alt="Foto de  verano"
      />`
    break;
    case "agosto":document.getElementById("print").innerHTML += `
    <h3>La temporada del año es verano</h3>
    <img
        src="../img/verano.jpg"
        alt="Foto de  verano"
      />`
    break;
    case "septiembre":document.getElementById("print").innerHTML += `
    <h3>La temporada del año es verano</h3>
    <img
        src="../img/verano.jpg"
        alt="Foto de  verano"
      />`
    break;
    case "octubre":document.getElementById("print").innerHTML += `
    <h3>La temporada del año es Otoño</h3>
    <img
        src="../img/otoño.jpg"
        alt="Foto de  otoño"
      />`
    break;
    case "noviembre":document.getElementById("print").innerHTML += `
    <h3>La temporada del año es Otoño</h3>
    <img
        src="../img/otoño.jpg"
        alt="Foto de  otoño"
      />`
    break;
    case "diciembre":document.getElementById("print").innerHTML += `
    <h3>La temporada del año es Otoño</h3>
    <img
        src="../img/otoño.jpg"
        alt="Foto de  otoño"
      />`
    break;

}


/*
4)Mostrar per pantalla els números pars fins a arribar a 100*/

// forma 1 
/*
let count = 0   
do{
  document.write(count,`<br>`);
} while (count <= 100)

//forma 2
/*
for (let count= 0;count <= 100; i+2){
  document.write(count`<br>`)
}
*/

//7

let numero = parseInt(prompt("dime un numero"))


console.log(triple(numero))

function triple (b){
  let multiplica = (num*num*num)
  return multiplica
} 