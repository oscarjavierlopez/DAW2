// arrays => desestructura por posiciones
const datosJose = ['Jose', 'Pérez', 665645162, 654132452];
const [nombreJose, , ...telefonos] = datosJose;
console.log(nombreJose);
console.log(telefonos);

//variables(intercambio de valores)
let a = 3;
let b = 6;
[a, b] = [b, a];
console.log(a);
console.log(b);

//objetos => desestructura por nombre de propiedades
const persona = {
    nombre: 'Sarah',
    pais: 'Nigeria',
    trabajo: 'Desarroladora'
}

const { trabajo, pais, nombre } = persona;
console.log(nombre);
console.log(trabajo);
console.log(pais);

//Desestructurar múltiples valores en una sola línea
const person = {
    nombre: 'Sarah',
    lugar: {
        pais: 'Nigeria',
        ciudad: 'Lagos'
    },
    amigas: ['Annie', 'Becky']
}

// Aquí el ':' renombra la propiedad 'nombre' a la variable 'n'
const { nombre: n } = person; //el nombre de variable q podemos usar es el q viene en azul oscuro
console.log(n);

//Aquí ':' redirige la desestructuracion a una variable llamada Annie
const{ amigas: [Annie] } = person;
console.log(Annie);

const{ lugar: {ciudad}, hermano = "Juan" } = person; //Se puede dar valores por defecto
console.log(ciudad);
console.log(hermano);


//funcion con desestructuracion
function ver({nombre, lugar: {ciudad}}){
    console.log(nombre + " es de " + ciudad);
}
ver(person);


