/*Escribir una funcion f1(arrow function) que reciba como parámetro un array a= [1,2,3,4] y devuelva un array con los numeros que sean 
el resultado de multiplicar cada elemento por 3 filtrando los no divisibles por 4*/
let a = [1, 2, 3, 4];
let f1 = (array) => array.map(numero => numero * 3)
    .filter(numero => numero % 4 === 0);

console.log(f1(a));

/*Una funcion f2 q visualice en la consola los elementos q no sean divisibles por 2*/
console.log("IMPARES:");
let f2 = (array) => array.filter((numero) => numero % 2 !== 0).
    forEach(numero => console.log(numero));;
f2(a);

/*Una funcion f3 q devuelva la suma de todos los elementos q estén en posición par */
let f3 = (array) => array.filter((valor, indice) => indice % 2 === 0)
    .reduce((acum, valor) => acum + valor);
;
console.log("La suma de los elementos en posicion par es: " + f3(a));