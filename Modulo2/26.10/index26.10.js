const express = require('express');
const app = express();


app.use(espress.static("public"));

app.get("/",function(req, res){
    
    res.send("<h1>ruta raiz</h1>");

});//ruta fija 
// ruta fija  + parametro
app.get("/parametro/:item", function (req ,res ){
    let item = req.params.item;
    res.send(`<h1>pasamos por parametros${item}</h1>`);
})

app.get("/query",function(req, res){
    let nombre = req.query.nombre;
    let apellido = req.query.apellido;
    let q = req.query.q;
    res.send(`<h1>pasamos por query${nombre} y ${apellido} y tambien ${q}</h1>`)
})
app.listen(3000);

