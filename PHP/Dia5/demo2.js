let nota = parseInt(prompt("qué nota tienes"));

let resultadoPorPantalla
switch (nota) {
    case 1:
    case 2:
    case 3:
    case 4: resultadoPorPantalla = "Estas suspendido"
        break;
    case 5: resultadoPorPantalla = "tienes un suficiente"
        break;
    case 6: resultadoPorPantalla = "tienes un bien"
        break;
    case 7:
    case 8: resultadoPorPantallat = "tienes un notable"
        break;
    case 9:
    case 10: resultadoPorPantalla = "tienes un excelente"

}
document.getElementById("imprimir").innerHTML = `
<h2>TU NOTA ES...</h2>
<p>${resultadoPorPantalla}</p>
`
 