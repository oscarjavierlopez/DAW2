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
