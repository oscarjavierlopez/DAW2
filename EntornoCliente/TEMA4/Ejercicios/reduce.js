//¿Qué hace reduce en cada uno de estos casos?
const c = [10, 20, 30];
console.log(c.reduce((ac) => ac)); /*comienza a iterar en 20, toma como primer valor del acumulador
 el 10(elemento anterior). 
Después pasa al 30(última vuelta) y no hace nada en el acumulador por lo tanto devuelve 10
Cada vez que empieza una nueva vuelta el acumulador toma el valor del return anterior*/
console.log(c.reduce((ac, n) => ac + n)); /*Comienza a iterar en 20, toma como 
valor inicial del acumulador el 10 y da 2 vueltas en las que suma el acumulador al numero sobre el que itera */
console.log(c.reduce((ac, n, i) => ac + n + i));/*Comienza a iterar en 20, toma como
valor inicial del acumulador el 10 y da 2 vueltas en las que el return de sumar el valor
anterior dl acumulador al numero sobre el que itera y su respectivo indice. */
console.log(c.reduce((ac, n, i, array) => ac + n + i + array[2]));/*Comienza a iterar en 20, toma como
valor inicial del acumulador el 10 y da 2 vueltas en las que el return es el resultado de sumar el valor
anterior dl acumulador al numero sobre el que itera, su respectivo indice y el valor a[2] = 30 */
console.log(c.reduce((ac, n) => ac + n, 100));/*Comienza a iterar en 10, toma como primer valor del acumulador
el 100 y devuelve el valor del acumulador sumado al numero sobre el que itera */