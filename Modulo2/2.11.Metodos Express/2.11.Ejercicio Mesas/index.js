const express = require('express');
const app = express();

app.use(express.static("public")); 
app.use(express.urlencoded({extended: false}));

let mesas =[
    {tipo:"Mesa rectangular",
    tamaño:"160x90",
    material:"Madera reciclada - Acero",
    color:"marron - patas negras",
    NumeroDePatas:"4",
    imagen:"https://cdn.sklum.com/es/1473030/mesa-de-comedor-en-madera-acki.jpg",
    },
    {tipo:"Mesa ovalada",
    tamaño:"200x100",
    material:"madera de acacia",
    color:"color madera clarito",
    NumeroDePatas:"",
    imagen:"https://cdn.sklum.com/es/1634428/mesa-de-comedor-ovalada-en-madera-de-acacia-200x100-cm-gaiba.jpg",
    },
    {tipo:"Mesa con forma de peine",
    tamaño:"depende",
    material:"depende",
    color:"depende",
    NumeroDePatas:"Union de X messas",
    imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv5qYe_2DOzqeFTyPHNdtJGmd8xuWhTQBnhjjvcTZ8isvPxS7UjT_r-U6KGbXa1GZ4-OE&usqp=CAU",
    },
    {tipo:"Mesa con forma de U",
    tamaño:"",
    material:"",
    color:"",
    NumeroDePatas:"",
    imagen:"",
    },
    {tipo:"Mesa con forma de T",
    tamaño:"",
    material:"",
    color:"",
    NumeroDePatas:"",
    imagen:"",
    },
    {tipo:"Mesa con forma de herradura",
    tamaño:"",
    material:"",
    color:"",
    NumeroDePatas:"",
    imagen:"",
    },
]

app.get("/mesas", ( req , res) => {
    res.send(mesas)
});

app.post("/mesas", ( req, res ) =>{
    let MesaNueva = {
        tipo: req.body.tipo,
        tamaño: req.body.tamaño,
        material: req.body.material,
        color: req.body.color,
        NumeroDePatas: req.body.NumeroDePatas,
        imagen: req.body.imagen,
    };
    mesas.push(MesaNueva);
    res.send(mesas);
} )

app.listen(process.env.PORT || 3005);
