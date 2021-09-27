// Esto es un comentario simple

/* Esto es un comentario
de multiples
lineas
*/

// mostrar un mensaje en la consola
console.log('hola comision');

//mostrar un mensaje en la pagina html
document.write("Este es un mensaje");

// mostrar un mensaje en una ventana emergente
//   alert('Esto es una alerta o ventana emergente');

// crear o declarar o inicializar una variable (var - let - const)

var alumno = 'Rodrigo';
let edad = 27;

document.write('<br>Alumno: '+ alumno );
document.write('<br>Edad: '+ edad );

alumno = 'Marta';
document.write('<br>Alumno: '+ alumno );

// pedir a un usuario que ingrese un nombre de un alumno
edad = prompt('Ingrese una edad de un alumno/a');
document.write('<br>Edad: '+ edad );

const url = 'https://campus.rollingcodeschool.com/';
document.write('<br>URL: '+url);

let numero1 = 20;
// parseInt('el valor numerico')

let numero2 = parseInt(prompt('Ingrese un numero'));

document.write('<br>Resultado:'+ (numero1 + numero2));