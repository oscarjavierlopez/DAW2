//Pasar la frase dada al array [ 'LUCE', 'LA', 'LUNA' ] sin utilizar variables auxiliares
let frase = "no luce la luna sin traérmela en sueños";
let res1 = frase.toUpperCase()
    .split(" ")
    .filter((palabra) => /^L/.test(palabra));
console.log(res1);

//Obtener la suma de la longitud de las palabras que tengan menos de 3 caracteres
let res2 = frase.split(" ")
    .filter((palabra) => palabra.length < 3)
    .reduce((ac, palabra) => ac + palabra.length, 0);
console.log("La suma de las longitudes de las palabras con menos de 3 caracteres es: " + res2);


let res3 = frase.split(" ")
    .filter(palabra => palabra.length < 3)
    .map(palabra => palabra.length)
    .reduce((ac, long) => ac + long);
console.log("La suma de las longitudes de las palabras con menos de 3 caracteres es: " + res3);