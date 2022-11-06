const express = require('express');
const servidor = express();
let num1 = 1;
let num2 = 10;
/*
1.Crea  una  aplicación  express  con  una  llamada  de  tipo getque  devuelve  el siguiente HTML:
*/
servidor.get (
    '/Hola',
    function(request,response){
        response.send('<h1>Hola mundo <br> desde express</br></h1>')
    }
///A la hora de corregir poner localhost:3001/hola
)


/*
2.Crea una aplicación con una ruta a la que le puede llegar un parámetro en la url. Al hacer una petición geta esa ruta, el servidor devolverá como respuesta un número aleatorio entre 1 y el número que llega como parámetro.
*/



servidor.get('/random/:num1/:num2',
    function (request,response){
        let num1 = parseInt(request.params.num1);
        let num2 = parseInt(request.params.num2);
        let resultado = Math.floor(Math.random() * (num2 - num1)+1);
    response.send(`<h1>El numero aleatorio es ${resultado}`);
    }
)
//A la hora de corregir poner localhost:3001/random/1/10


//3.Crea un array de 5 nombres. Define dos rutas: una será del tipo “/persona” y la otra será /persona/:parámetro’. Al entrar a la primera rutanos devolverá la lista de personas y al entrar a la segunda nos devolverá la persona solicitada.

let lista = []
lista.name.push ="Robert"

servidor.get('/array',
    function (request, response) {
        let item = request.params.item;
        lista.push(item);
    response.send(`<h1>El array ahora es este: ${lista}</h1>`)
    }
    )

    const express = require('express');
    const app = express();
     
    let listaPokemon=["Ditto","Pikachu","Raichu","Machop","Dragonitte"];
     
    servidor.get(
        '/familia',
        function (request,response) {
            response.send(`<h1>${listaPokemon}</h1>`)
        }
    )
     
    servidor.get(
        '/familia/:pokemon',
        function (request,response) {
     
            let seleccion = request.params.pokemon; //esta variable graba lo que el usuario está escribiendo
            let estaEnElArray = false;
            
            for (let i = 0; i < listaPokemon.length; i++){
     
                if (listaPokemon[i] == seleccion){
                     response.send(`<h1>El pokémon seleccionado es:${seleccion}</h1>`)
                     estaEnElArray = true;
                     break;
                }
             
            }
     
            // SALGO AQUÍ CON MI COINCIDENCIA...
            if (estaEnElArray == false){
                response.send(`<h1>No existe este pokémon en el array</h1>`)
            }
        
        }
    )
     


servidor.listen(3001)