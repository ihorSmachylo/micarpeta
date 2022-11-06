const person = {

    name: "Sofia",
    age: 30,
    isCooder: true
}




const estudiante = {};
estudiante.nombre ="marc";
estudiante.edad =17;
estudiante.isCooder = true;
estudiante.enjoysLatin = false 
// es lo mimsmo 
console.log(estudiante["nombre"]);
console.log(estudiante.nombre)

//delete.estudiante.enjoysLatin
// asi se borra cosas  del "objeto"


// OPCION ARRAY + OBJETO

const personajesCine =[
    {
        nombre : "James bond"
        primeraPeli :1962,
        ultimaPeli : 2021
    },
    {
        nombre :"harry potter"
        primeraPeli : 2001
        ultimaPeli : 2009

    },
    {},
]
personajesCine.push(
    {
        nombre :"hulk"
        primeraPeli : 1998
        ultimaPeli : 2022

    }
)
console.log(personajesCine)