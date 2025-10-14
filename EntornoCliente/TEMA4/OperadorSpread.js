//El operador spread(...) se usa para pasar una colección de elementos
let values = [1, 2, 3];
console.log(values);
let copia = [0, ...values]; //Me hace un array con los elementos q le pase y todos los elementos de values
console.log(copia);
let moreValues = [4, 5];
values.push(...moreValues); //añadimos los elementos de moreValues a values
console.log(values);



//Paso de argumentos con el operador spread
function suma(...valores) {
    let resultado = 0;
    for (numero of valores) {
        resultado += numero;
    }
    return resultado;
}

function resta(a, b, c){
    let resultado = a - b - c;
    return resultado;
}
let valores = [10, 10, 10, 10];
console.log("El resultado de la suma es: " + suma(...valores));
console.log("El resultado de la resta es: " + resta(...valores)); //solo se queda con los 3 primeros valores del array
console.log("El resultado de la resta es: " + resta(valores)); //Toma todo el array como primer argumento y nada para b y c
