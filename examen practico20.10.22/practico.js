/*1.Fes un programa que pregunti a l'usiari quin hobby te  en base a la resposta s'imprimexi per  pantalla aquesta informaió.
fes ús d'un switch i com elemnt recomendable intenta  manipular el DOm.
*/ 
/*
let hobby = prompt("Dime que hobbie tienes")

switch (hobby){
    case "natacion": document.getElementById("print").innerHTML += `
    <h3>El hobbie de este usuario es</h3>
    <img
        src="../img/natacion.jpg"
        alt="foto de natacion"
      />`
    break;
    
    case "voleybol"||"voley": document.getElementById("print").innerHTML += `
    <h3>El hobbie de este usuario es</h3>
    <img
        src="../img/voley.jpg"
        alt="foto de voley"
      />`
    break;
    
    case "futbol": document.getElementById("print").innerHTML += `
    <h3>El hobbie de este usuario es el futbol</h3>
    <img
        src="../img/futbol.jpg"
        alt="foto de futbol"
      />`
    break;
    
    case "cocinar": document.getElementById("print").innerHTML += `
    <h3>El hobbie de este usuario es la cocina</h3>
    <img
        src="../img/cocinar.jpg"
        alt="foto de un cocinero"
      />`
    break;
    case "puenting": document.getElementById("print").innerHTML += `
    <h3>El hobbie de este usuario es la caida libre  o puenting</h3>
    <img
        src="../img/puenting.jpg"
        alt="foto de alguien saltando de un puente"
      />`
    break;      

}

/* 2 crea un objecte literal amb 10 claus valor iamb  un bucle intenta recorrer toda la informació.Mira de "mimar"especificament com apareix  por pantalla.*/

const person= {
    nombre :"ihor",
    edad:24,
    etnia: "caucasico",
    ojos: "marrones",
    pelo: "castaño con mechas",
    mascotas: "si",
    trabaja: "No",
    Estudia:"programacion",  
    hobbie:"entrenar"
}

console.log



/*3.fes un programa que damani dos números a l'usuari i, utilitzant una funció, faci alguna operacio*/

alert("A continuacion le saldran 2 recuadros pidiendo dos numero diferentes")

let caja1  = parseInt(prompt("Introduce un numero "))
let caja2  = parseInt(prompt("Introduce otro por favor"))



function media([a,b]){
    let suma =(caja1+caja2)
    return suma/2
}
console.log(media)