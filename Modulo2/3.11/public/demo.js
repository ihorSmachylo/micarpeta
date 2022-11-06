mostrarDatos();

function insertar(){

    let nuevo = {
    nombre: document.getElementById("nombre").value,
    lore: document.getElementById("lore").value,
    fasses: document.getElementById("fasses").value,
    img: document.getElementById("img").value
    }

     fetch("/boss", {
        method: "POST",
        headers: {
            "Content-Type": "application/JSON"
        },
        body: JSON.stringify(nuevo)
    })
    location.reload();
}

function mostrarDatos(){
    fetch("/boss", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then((res) => res.json())
    .then((data) => {
        let tabla = `
        <table border="2">
        <tr>
        <th colspan="6">Jefes</th>
        </tr>
        <tr>
            <th>NOMBRE</th>
            <th>LORE</th>
            <th>fases</th>
            <th>Img</th>
        </tr>`
        for (let i = 0; i < data.length; i++){
            tabla += `<tr>
            <th>${data[i].nombre}</th>
            <th>${data[i].lore}</th>
            <th>${data[i].fasses}</th>
            <th><img src="${data[i].img}" alt="boss" width="100" height="100"></th>
            `
        }
        tabla += `</table>`
        document.getElementById("mostrarBoss").innerHTML = tabla;

    })
}

function editar(){
    let nombre = document.getElementById("editarPlaneta").value;
    let lore = document.getElementById("editarLore").value;
    let fasses = document.getElementById("editarFasses").value;
    let imagen = document.getElementById("editarImg").value;

    let objeto = {
        nombre,
        lore,
        fasses,
        imagen
    };

    fetch("/boss", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objeto),
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        location.reload();
    })

}

function borrar(){
    const boss = document.getElementById("editarBoss").value;

    let borrando = {
        boss,
    };

    fetch("/boss", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(borrando),
    }).then((res) => res.json())
    .then((data) => {
        console.log(data);
        window.location.reload();
    })

}