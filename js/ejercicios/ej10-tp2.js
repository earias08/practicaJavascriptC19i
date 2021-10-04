let filas = parseInt(prompt('Ingrese un numero de filas'));
let columnas = parseInt(prompt('Ingrese un numero de columnas'));

let dato = filas * columnas;
let resultado = dato;
console.log(filas);
console.log(columnas);
console.log(dato);

// for(let i = 0 ; i < dato; i++){
//     document.write(resultado-- + '<br>');
// }

document.write('<table border>');

//creo el bucle que va a manejar las filas tr
for(let indiceFila = 0; indiceFila < filas; indiceFila ++ ){
    document.write('<tr>')
    //creo el bucle que va a manejar las celdas td
    for(let indiceColumna = 0; indiceColumna< columnas; indiceColumna++ ){
        document.write('<td>'+resultado--+'</td>')
    }
    document.write('</tr>')
}
document.write('</table>');
