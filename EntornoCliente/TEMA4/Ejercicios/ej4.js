const persona = {
    nombre: 'Pepe',
    apellidos: ['García', 'Pérez'],
    edad: 23
}

//Desestructurar "nombre" y "edad" en las variables ej1 y ej2
const { nombre: ej1, edad: ej2 } = persona;
console.log(`${ej1}-${ej2}`);

//Dado el siguiente array
const arr = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
//Desestructurar el primer y tercer elemento en las variables "lu" y "mi"
const [lu, , mi] = arr
console.log(`${lu}-${mi}`);

//Desestructurar los apellidos de persona en las variables "apellido1" y "apellido2"
const { apellidos: [apellido1, apellido2] } = persona;
console.log(`${apellido1}-${apellido2}`);

/*Crear una funcion denominada "verDatos" que admita como parámetro el objeto persona y,
realizando desestructuracion, cree y visualice las variables "nombre" y "edad"
con los valores por defecto "Luis" y 20 respectivamente. Probar con diferentes objetos*/
function verDatos({ nombre = "Luis", edad = 20}) {
    console.log(`${nombre}-${edad}`);
}
verDatos(persona);
const persona2 = {
    ciudad: 'Guadalajara'
}
verDatos(persona2);

