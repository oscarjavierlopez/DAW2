//Funcion nombrada:
console.log(hello('pepe')); /*Con las funciones nombradas se produce hoisting por lo que se puede usar antes 
de ser definida*/

function hello(nombre) {
    return `Hola ${nombre}`;
}


//funcion anonima asignada a una variable
//console.log(hola('pepe')); No Se produce hoisting y por ello no se puede usar antes de definirse
let hola = function (nombre) {
    return `Hola ${nombre}`;
}
console.log(hola('pepe'));


//Funcion que recibe otra como parámetro
function saludo(foo) {
    foo();//foo es una funcion que pasaremos como parametro
}
saludo(function () { //en este caso foo() es una funcion anónima
    console.log('Te saludo')
});
//saludo('Oscar'); Da error xk 'Oscar' no es una funcion


//Funciones flecha: (parámetros) => {código} ó (parámetros) => código(si es una sola línea)
let suma = (a, b) => console.log(a + b); //si es solo una línea no hace falta poner return ni {}
suma(10, 10);

let resta = (a, b) => `El resultado de la resta es: ${a - b}`; //el return es una string
console.log(resta(10, 10));

let sumatorio = (...valores) =>{
    let resultado = 0;
    for(numero of valores){
        resultado += numero;
    }
    return resultado;
}
let numeros = [1, 2, 3, 4, 5];
console.log(`El sumatorio de los 5 primeros números es: ${sumatorio(...numeros)}`);
