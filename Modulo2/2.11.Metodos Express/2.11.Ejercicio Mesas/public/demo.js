mostrar();

function insertar(){
let tipo = document.getElementById("tipo").value;
let tamaño = document.getElementById("tamaño").value;
let material = document.getElementById("material").value;
let color = document.getElementById("color").value;
let NumeroDePatas = document.getElementById("NumeroDePatas").value;
let imagen = document.getElementById("imagen").value;


let nuevo ={
    tipo:tipo,
    tamaño:tamaño,
    material:material,
    color:color,
    NumeroDePatas:NumeroDePatas,
    imagen:imagen,
};
fetch("/mesas", {
    method: "POST", // método por donde pasaremos... Delete, put...
    headers: {
        "Content-Type": "application/json", // especificamos que utilizaremos JSON
    },
    body: JSON.stringify(nuevo), // elementos que transporto por el body.
    // en este caso, además, lo convertimos a JSON con el JSON.stringify
})
.then(function (respuesta) {
    return respuesta.json();
}).
then (function (datos){
    let mostrarMesas= "";
    for (let i = 0; i < datos.length; i++){
        mostrarMesas += `
        <h3>${datos[i].tipo} ${datos[i].tamaño}${datos[i].material}${datos[i].color}${datos[i].NumeroDePatas}</h3>
        <img src="${datos[i].imagen}" alt="imagen" width="250" height="300"> 
        `
    }
    document.getElementById("mesas").innerHTML = mostrarMesas;
});
}
function mostrar(){
    fetch("/mesas", {
        method: "GET", // método por donde pasaremos... Delete, put...
        headers: {
            "Content-Type": "application/json", // especificamos que utilizaremos JSON
        }
    })
    .then(function (respuesta) {
        return respuesta.json();
    }).
    then (function (datos){
        let mostrarMesas= "";
        for (let i = 0; i < datos.length; i++){
            mostrarMesas += `
            <h3>${datos[i].tipo} ${datos[i].tamaño}${datos[i].material}${datos[i].color}${datos[i].NumeroDePatas}</h3>
            <img src="${datos[i].imagen}" alt="imagen" width="250" height="300"> 
            `
        }
        document.getElementById("mesas").innerHTML = mostrarMesas;
    });
}