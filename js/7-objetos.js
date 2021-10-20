// let email = 'pablodominguez@gmail.com';
// let password = 'A1234$567';
// let domicilio = 'datos del domicilio';
// let localidad = 't4000';
// let telefono = 3814534634;
// let dni = 35666777;

// crear un objeto con notacion literal
let usuarioPablo = {
    // propiedades -> clave: valor
    email:'pablodominguez@gmail.com',
    password: 'A1234$567',
    domicilio: 'datos del domicilio',
    localidad: 't4000',
    telefono: 3814534634,
    dni: 35666777,
    estado: true,
    // metodos
    login: function (){
        //todo el codigo que quiero que este metodo
        console.log('Estamos logueados');
    },
    logout: () =>{
        // todo el codigo que quiero que haga este metodo de logout
        console.log('Cerramos sesion');
    }
}

// mostrar un objeto
console.log(usuarioPablo);


// mostrar cada propiedad del objeto - forma 1
document.write('Email: '+ usuarioPablo.email);
document.write('<br>localidad: '+ usuarioPablo.localidad);
document.write('<br>DNI: '+ usuarioPablo.dni);
// mostrar cada propiedad del objeto - forma 2
document.write('<br>Telefono: '+ usuarioPablo['telefono'] );

// cargar una propiedad nueva dentro de un objeto
usuarioPablo.nivel = 1;
document.write('<br>Nivel de usuario: '+ usuarioPablo.nivel);

// modificar una propiedad del objeto
usuarioPablo.dni = 37666343;

// queremos mostrar todas las propiedades (claves) de un objeto
let claves = Object.keys(usuarioPablo);
console.log(claves);

for(let posicion=0; posicion < claves.length ; posicion++){
    document.write('<br>'+claves[posicion]+': '+usuarioPablo[claves[posicion]]);
}

// usar los metodos de un objeto
usuarioPablo.login();

usuarioPablo.logout();