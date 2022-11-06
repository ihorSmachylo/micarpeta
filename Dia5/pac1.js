/*
let temperatura = parseInt(prompt("Que temperatura hace"))
let lugar = parseInt(prompt("Que lugar se encuentra"))

if (temperatura >=40) {
    alert("vete a otro lugar")
} else if (temperatura <= 40 && temperatura >= 30) {
   alert("enciende el aire acondicionado") 
} else if (temperatura <= 30 && temperatura >= 20) {
 alert("estas perfecto")
}else if (temperatura <= 10 && temperatura >= 20) {
alert ("enciende la calefaccion")
}else if (temperatura >=10){
    alert("vete a otro lugar")
}
*/

//*ejercicio1 
/*
let num1 = parseInt("dime un numero")
let num2 = parseInt("dime otro numero")
console.log("suma****"+(num1+num2))
console.log("resta****"+(num1-num2))
console.log("multiplicacion****"+(num1*num2))
console.log("division"(num1/num2))
console.log("MEDIA"(num1+num2)/2)

// ejercicio 2

*/

//Pide por teclado la edad del usuario. Si la edad es igual o inferior a 8 mostramos el mensaje  "Pasa  al  tobogán",  si  no  mostramos  "Eres  demasiado  mayor  para  usar  el tobogán".

/*let edad =parseInt(prompt("que edad tienes"))
 
if (edad <=8){
    alert("baja por el tobogan")
}else if (edad>8) {
    alert("Eres demasiado mayor para usar el tobogan")}
    
    
    *ejercicio 3*/
//Escribe un programa que pida al usuario 3 números. Si el resultado de la suma de los dos  primeros  es  igual  al  tercer  número,  mostrarlo  en  pantalla,  si  no  mostrar  que  el tercero no es la suma de los dos anteriores.
/*
{alert("Acontinuacion le pediran 3 numeros")}
let num1 = parseInt(prompt("número 1"));
let num2 = parseInt(prompt("numero 2"));
let num3 = parseInt(prompt("numero 3"));

if (num1 + num2 == num3 ){
  */
// 




// EJERCICIO 5 - Pide al usuario que escriba un día de la semana (lunes, martes…). Mostrar en pantalla el día que dice que es si es entre lunes y viernes (Por ejemplo "Hoy es lunes") y si es fin de semana mostrar "Es fin de semana". Hazlo una vez usando switch y otra con if else.
 
//let dia = prompt("qué día es hoy");
/*
if (dia == "lunes" 
|| dia == "martes" 
|| dia == "miércoles"
|| dia == "jueves" 
|| dia == "viernes") {
    console.log("es " + dia);
} else if (dia == "sábado" 
|| dia == "domingo") {
    console.log("es finde, concretamente es " + dia);
} else {
    console.log("error en la información obtenida");
} */
/*
switch (dia){
    case "lunes":
    case "martes":
    case "miércoles":
    case "jueves":
    case "viernes": console.log("es laborable, concretamente es " + dia);
    break;
    case "sábado": 
    case "domingo": console.log("es fin de la semana, concretamente es " + dia);
    break;
    default: console.log("error");
}


/* 11.Resultado de carrera. Hacer varios programas en los que se le pregunta al usuario el puesto en el que acabó. Después:
a.Si el valor de puesto es 1 mostramos mensaje con "Ganaste", si no "Lo importante es participar”.
b.Si el valor de puesto es 1, mostramos mensaje con "Medalla de oro", si el valor de puesto es 2, mostramos el mensaje con "Medalla de plata", si es 3 "Medalla de bronce" y al resto "Lo importante es participar.
c.Con switch: Si el valor de puesto es 1, mostramos mensaje con "Medalla de oro", si el valor de puesto es 2, mostramos el mensaje con "Medalla de plata", si es 3 "Medalla de bronce" y al resto "Lo importante es participar.
d.Los puestos 1, 2 y 3 ven el mensaje "Sube al podium", el resto ven el mensaje "Se acabó la carrera". Hazlo usando un if/else.
*/

let puesto = (prompt("en que puesto has  quedado"));

if (puesto == 1) {
    alert("Ganaste")
} else {
    alert("lo importante es participar")
}

if (puesto == "1") {
    alert("medalla de oro")
} else if (puesto == "2") {
    alert("medalla de plata")

} else if (puesto== "3"("medalla de bronce")){
}

switch(puesto) {
    case 1 : alert ("medalla de oro")
    break;
    case 2 alert ("medalla de plata")
    

}
let puesto = parseInt(prompt("Ingresar puesto: "));
/*
if(isNaN(puesto)) {
  alert("No es un número lo que has ingresado!!!");
} else if(puesto < 1) {
  alert("Debe ser mayor a 0!!!");
} else {
  if(puesto == 1){
    alert("Ganaste!!!");
  } else {
    alert("Lo importante es participar");
  }
  if(puesto == 1){
    alert("Medalla de Oro");
  } else if(puesto == 2){
    alert("Medalla de Plata");
  } else if(puesto == 3){
    alert("Medalla de Bronce");
  } else {
    alert("Sin medallas, lo importante es participar");
  }
}
*/
 
if(isNaN(puesto)) {
  alert("No es un número lo que has ingresado!!!");
} else if(puesto < 0) {
  alert("Debe ser mayor a 0!!!");
} else {
  switch(puesto){
    case 1:
      alert("Medalla de Oro\nSube al podium");
      break;
    case 2:
      alert("Medalla de Plata\nSube al podium");
      break;
    case 3:
      alert("Medalla de Bronce\nSube al podium");
      break;
    default:
      alert("Lo importante es participar");
  }
}//

/*otro ejemplo 

if(puesto==1  ||puesto =="primero"){
  
}