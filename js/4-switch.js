
// if(condicion){
//     if(condicion){
//     }else{
//         if(condicion){

//         }else{
//             if(condicion){

//             }else{
                
//             }
//         }
//     }
// }else{

// }

/*
switch(opcion){
    case 1:
        todas las lineas de codigo que quiero si es el caso q eligio el usuario
        break;
    case 'palabra':
        todas las lineas de codigo que quiero si es el caso q eligio el usuario
        break;
    default:
        las lineas que quiera ejecutar si la opcion del usuario es distinta a mis cases.
}

*/ 

let estacion = prompt('Ingrese su estacion del año preferida: 1-Verano, 2-Otoño, 3-Invierno, 4-Primavera');

switch(estacion){
    case '1':
    case 'verano':
        document.write('Helado');
        break;
    case '2':
        document.write('café');
        break;
    case '3':
        document.write('Guiso de lentejas');
        break;
    case '4':
        document.write('Sandwich de milanesa');
        break;
    default:
        document.write('Opcion erronea vuelva a intentarlo');
}

