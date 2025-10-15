let numeros = [1, 2, 3, 4, 5];

//foreach => itera sobre cada elemento(elemento e índice) de un array
console.log("Los elementos de numeros son:")
numeros.forEach((numero) => console.log( numero));
numeros.forEach((numero, indice, array) => console.log( indice + " - " + numero + " - " + array)); //puedo acceder a todo el array


//map => Crea un array con el resultado de aplicar una función a cada uno de los elementos de array
let dobles = numeros.map((elemento) => elemento * 2);
console.log('los elementos de dobles son:')
console.log(dobles);



//reduce => Simplifica el array a un valor único resultado de aplicar una funcion(de izquierda a derecha)
let sumatorio = numeros.reduce((total, valor) => total + valor, 0); //0 es la inicializacion del acumulador 'total'
console.log("El sumatorio de los 5 primeros numeros es: " + sumatorio); /*si no inicializo el acumulador a 0 coge como primer valor del acumulador 
el primer elemento del array y empieza a iterar sobre el segundo elemento del array*/



//reduceRight => igual que reduce pero itera de fin a principio
let suma = numeros.reduceRight((total, valor) => total + valor);//comienza la iteracion en 2 y total = 1
console.log("La suma de los 5 primeros numeros es: " + sumatorio);



//filter => Crea un nuevo array con los elementos del array que pasan un test
let pares = numeros.filter((numero)=> numero % 2 === 0);
//Si la funcion devuelve algo distinto a false/undefined/""/0/null/NaN, coge el número sobre el que itera y lo añade al array
console.log("Los números pares son: " + pares);



//every => Comprueba si todos los elementos del array pasan un test
console.log("¿Todos los números son pares? " + numeros.every((number) => {
    if(number % 2 === 0){
        return true;
    }
}))



//some => Comprueba si alguno de los elementos del array pasan un test
console.log("¿Hay algun número par? " + numeros.some((numero) => {
    if(numero % 2 === 0){
        return true;
    }
}));



//find => Devuelve el primer elemento del array que pasa un test. Si no pasa el test devuelve undefined
console.log("¿Está el numero 6 en el array? " + numeros.find((numero) => numero === 6)); 
//devuelve undefined xk 6 no está en el array y x ello la callback fn no devuelve nada
console.log("¿Está el 4 en el array? " + numeros.find((numero) => numero === 4)); 
//Como la callback fn devuelve algo distinto a false/undefined/""/0/null/NaN coge el valor del elemento sobre el q está iterando y lo devuelve




//findIndex => Devuelve el índice del primer elemento del array que pasa un test o -1 si no lo encuentra
console.log("¿En qué posición está el 6? " + numeros.findIndex((numero, indice) => numero === 6)); 
//devuleve -1 xk la callback fn no devuelve ningun valor

console.log("¿En qué posición está el 4? " + numeros.findIndex((numero, indice) => numero === 4)); 
//Como la callback fn devuelve algo distinto a false/undefined/""/0/null/NaN coge el indice(3) del elemento sobre el q está iterando

console.log("¿En qué posición está el 4? " + numeros.findIndex((numero, indice) => {
    if(numero === 4){
        return 0;
    }
}));//Devuelve -1 xk en la callback le hemos dicho que devuelva 0(valor falsy) aunque el 4 esté en el array

