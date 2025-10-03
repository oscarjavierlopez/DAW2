//lenguaje_36.js - Creación de arrays con Array.from y Array.of

//FROM => Convierte un elemento iterable en un array
var lista1 = Array.from("casa"); //crea un array con las letras de casa
console.log(lista1);

var lista2 = Array.from([1,2,3,4],function (x) { //crea el array con lo que le pasemos en la funcion
	return x*10;
});
console.log(lista2);

//OF => Convierte una lista de elementos en un array
var lista3 = Array.of(7, 5, 6);
console.log(lista3);
var lista4 = Array.of("casa");
console.log(lista4);