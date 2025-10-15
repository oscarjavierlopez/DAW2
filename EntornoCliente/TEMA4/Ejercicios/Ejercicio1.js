/*Escribir una funcion f1(arrow function) que reciba como parámetro un array a= [1,2,3,4] y devuelva un array con los numeros que sean 
el resultado de multiplicar cada elemento por 3 filtrando los no divisibles por 4*/
let a = [1, 2, 3, 4];
let f1 = (array) => {
    let arrayDevuelto = array.map(numero => numero * 3)
        .filter(numero => numero % 4 === 0);
    return arrayDevuelto;
};

console.log(f1(a));

/*Una funcion f2 q visualice en la consola los elementosq no sean divisibles por 2*/
/*Una funcion f3 q devuelva la suma de todos los elementos q estén en posición par */