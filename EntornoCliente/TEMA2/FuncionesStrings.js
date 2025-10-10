let cadena1 = "Hola mundo";
let cadena2 = " desde javascript";

console.log(" La longitud de la cadena 1 es: " + cadena1.length); //Devuelve la longitud de la cadena(contando espacios)

cadenaMezcla = cadena1.concat(cadena2); //Concatena las 2 cadenas 
console.log("El resultado de la concatenación es: " + cadenaMezcla);

console.log("El elemento en la posición 3 es: " + cadena1.charAt(3));//Devuelve el elemento en la posicion 3

console.log("El unicode de la posición 3 es: " + cadena1.charCodeAt(3));//Devuelve el valor unicode del elemento en la posicion 3

console.log("La subcadena 'mundo' aparece por primera vez en la posición: " + cadena1.indexOf("mundo")); //Devuelve la posicion en la que aparece por primera vez la subcadena pasada(si no existe en la cadena1 dará como resultado la posicion -1) 
console.log("La ultima vez que aparece 'a' es en  la posición: " + cadena2.lastIndexOf("a")); //Devuelve la posicion en la que aparece por última vez la subcadena pasada(si no existe en cadena2 dará como resultado -1)

let cadena1Acortada = cadena1.substring(0, 4) //devuelve la cadena 1 desde la posicion 0 hasta la 3(4-1)
console.log("La cadena 1 acortada queda así: " + cadena1Acortada);

console.log("La cadena1 en mayusculas es: " + cadena1.toUpperCase()); //Convierte la cadena a mayus
console.log("La cadena1 en minúsculas es: " + cadena1.toLowerCase()); //Convierte la cadena a minus

let palabras = cadena1.split(" "); //Devuelve un array(palabras) con las palabras de la cadena(usa como separador de palabra el espacio en blanco)
console.log("Las palabras que contiene cadena1 son:")
for (palabra of palabras) {
    console.log(palabra);
}

if (cadena1.endsWith("mundo")) { //evalua si una cadena acaba con la que le pasemos como parametro
    console.log("la cadena1 acaba con la palabra 'mundo'")
}

if (cadena1.startsWith("Hola")) {//Evalua si una cadena empieza por otra que le pasamos
    console.log("La cadena 1 empieza con 'Hola'")
}

if (cadenaMezcla.includes("mundo")) { //Evalua si una cadena contiene otra que le pasamos por parametros
    console.log("La cadena mezcla contiene la palabra 'mundo'")
}

//Al metodo match se le pasa una Regex o una string
console.log(cadena1);
let datos1 = cadena1.match("Pepe"); //Devolverá null porque no  encuentra "pepe" en la cadena
let datos2 = cadena1.match(/Hola/gi); //Devuelve un array con la cadena, su posición, en qué texto la encontró...(al usar g devuelve todas las veces que apareció, si no la pusieramos solo nos devolvería las propiedades de la primera vez que aparece)
console.log("Datos1: " + datos1)
console.log("Datos2: " + datos2)

console.log("La cadena 1 repetida es: " + cadena1.repeat(2)); //repite 2 veces la cadena 1

console.log("Si reemplazamos mundo por js cadena 1 queda así: " + cadena1.replace("mundo", "js")); //reemplaza la primera ocurrencia 'mundo' por 'js'.
//Si queremos remplazar todas => /mundo/g

console.log("Cadena 1 sin espacios es: " + cadena1.trim()); //Elimina los espacios en blanco(al principio y al final)

console.log("La cadena1 con huecos al principio es: " + cadena1.padStart(20, "*"));//Añade  * al inicio hasta que la longitud de la cadena sea 20
console.log("La cadena 1 con espacios al final es: " + cadena1.padEnd(20, "*")); //añade * al final hasta que la longitud de la cadena sea 20