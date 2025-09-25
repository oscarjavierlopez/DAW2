let numeros = [1 , 2 , 3 , 6 , 5 , 4, 1];
console.log("La longitud del array es : " + numeros.length);

let letras = ["a", "b", "e" , "d" , "c"];
let numerosLetras = numeros.concat(letras); //concatena los 2 arrays y forma uno nuevo
console.log("Arrays concatenados: " + numerosLetras);

let StringNumeros = numeros.join(" "); //Convierte el array a cadena (le tenemos que pasar una string que separará los elementos del array)
console.log("La string de numeros es: " + StringNumeros);

numeros.push(7); // añade un elemento al final del array
console.log("El numero en la ultima posicion es: " + numeros.pop()); //pop muestra el ultimo numero pero tambien lo elimina del array
console.log(numeros);


numeros.unshift(25); //añade un elemento al principio del array
console.log(numeros);
console.log("El primer elemento es: " + numeros.shift()); //shift muestra el elemento en la posicion 0 y lo elimina del array

numeros.sort((a,b) => a - b); //sin esa funcion flecha se ordena como UTF
console.log("Numeros ordenados: " + numeros);
letras.sort();
console.log("letras ordenadas: " + letras);

let numerosInverso = numeros.reverse(); //Da la vuelta al array
console.log("En orden inverso:" + numerosInverso);

console.log("La última vez que aparece el 1 es: " + numeros.lastIndexOf(1));//Me imprime la ultima posicion en la que aparece el 1
console.log("El elemento 10 aparece por última vez en la posición: " + numeros.lastIndexOf(10)) //como no está en el array me devuelve la posicion -1
console.log("La primera vez que aparece el 1 es: " + numeros.indexOf(1)); //Devuelve la primera posicion en la que aparece el 1
console.log("El elemento 10 aparece por primera vez en la posición: " + numeros.indexOf(10)) //como no está en el array me devuelve la posicion -1

let primerosNumeros = numeros.slice(0 , 2); //Crea un nuevo array desde el elemento en la posicion del primer parametro hasta el elemento del segundo parametro - 1
let ultimosNumeros = numeros.slice(-2); //Crea un array desde la posicion length-2 hasta el final
let ultimasLetras = letras.slice(2); //Si solo le pas un parametro coge desde la posicion 2 hasta el final
let vacio = numeros.slice(2,1); //Si primer parametro > segundo parametro => devuelve array vacío
console.log("Los primeros numeros son: " + primerosNumeros);
console.log("Los ultimos numeros son: " + ultimosNumeros);
console.log("Las ultimas letras son: " + ultimasLetras);
console.log("Array vacío: " + vacio);

numeros.splice(4); //Elimina de la posicion 4 hasta el final
console.log("Eliminando desde la posicion 4: " + numeros);
numeros.splice(0,1); //Borra 1 posicion desde la posicion 0 
console.log("Eliminando de la posicion 0 a la 1: " + numeros);
numeros.splice(1,1,4.5); //Reemplaza el elemento en la posicion 1 por un 4.5
console.log("Reemplazando la posicion 1 por un 4.5: " + numeros);
numeros.splice(1,0,5); //Añade un 5 en la posicion 1 sin eliminar nada 
console.log("Añadiendo un 5 en la posición 1: " + numeros);

