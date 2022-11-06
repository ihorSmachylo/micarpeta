const express = require("express");
const server = express();
let lista =[
    {
        nombre:"Yummi",
        especie:"gato",
        edad:0.5,
        img:`<img src="https://curiosfera-animales.com/wp-content/uploads/2017/10/Caracter%C3%ADsticas-del-Maine-coon.jpg" alt="Girl in a jacket" width="300" height="250">`,
    },
    {
        nombre:"Gon",
        especie:"gato",
        edad:0.4,
        img:`<img src="https://es.worldkittens.com/images/cats/cat710.jpg" alt="blue cat" width="300" height="300">`,
    },
    {
        nombre:"Wii-no-no",
        especie:"diamanteMandarin",
        edad:3,
        img :`<img src="https://www.zooplus.es/magazine/wp-content/uploads/2021/01/Diamante-mandar%C3%ADn.jpeg" alt="diamante  mandarin" width="300" height="300">`,

    },
    { 
        nombre:"Wii-no-no",
        especie:"diamanteMandarin",
        edad:3,
        img:`<img src="https://reader.digitalbooks.pro/content/preview/books/136287/book/OEBPS/Images/02222_spa.003.jpg" alt="diamante  mandarin" width="300" height="300">`,

    }


];

//ruta raiz que mostrara el contenido array en el HTML haciendo "localhost:3000"

server.get("/",(req , res ) =>{
    let mostrarAnimales = "";
    
    for ( let i = 0 ; i <lista.length;i++ ) {
       mostrarAnimales +=`
        <h4>nombre: ${lista[i].nombre}</h2>
        <p>especie: ${lista[i].especie}</p>
        <p>edad: ${lista[i].edad}</p>
        <p>img:~${lista[i].img}</p>
        `;

}
res.send(
    mostrarAnimales+
    `
    <form action="/form"><button type="submit">Añadir personaje</button></form>
    <form action="/form-borrar"><button type="submit">Borrar</button></form>
    `
)
});
// ruta para añadir personajes
server.get("/form", (req, res) => {
    let formulario = `
      <form action="/sumar">
      <input placeholder="nombre" type="text" name="nombre">
      <input placeholder="especie" type="text" name="especie">
      <input placeholder="edad" type="text" name="edad">
      <input placeholder="img" type="img" name="img">
      <button type="submit">Enviar</button>
      </form>
      `;
    res.send(formulario);
  });
  server.get("/sumar", (req, res) => {
    let name = req.query.nombre;
    let especie = req.query.especie;
    let age = req.query.edad;
    let img = req.query.img;
  
    let animal = {
      nombre: name,
      especie: especie,
      edad: age,
      img: img,
    };
  
    lista.push(animal);
    res.send(`tu mascota ha sido añadida con exito <3
      <form action="/">
      <button type="submit">Volver</button>
      </form>`);
  });
  
  
  
  
  
  server.get("/form-borrar", (req, res) => {//esta ruta es para poder  borrar una mascota del formulario.
    let formulario = `
        <form action="/borrar">
        <input placeholder="nombre" type="text" name="nombre">
        <button type="submit">Borrar</button>
        </form>
        `;
    res.send(formulario);
  });
  server.get("/borrar", (req, res) => {

    let name = req.query.nombre;
    let borradorCorrecto = false;
  
      for (let i = 0; i < lista.length; i++){
          if (name == lista[i].nombre){
              lista.splice(i, 1);
              res.send(`La mascota ha sido llevada al matadero por no saber  programar
              <form action="/">
          <button type="submit">Volver</button>
          </form>`);
              borradorCorrecto = true;
              break;
          }
      }
  
      if (borradorCorrecto == false){
          res.send(`El personaje NO se ha borrado de la lista. No existe en el array
          <form action="/">
          <button type="submit">Volver</button>
          </form>`);
      }
  

    });

  server.listen(3000);