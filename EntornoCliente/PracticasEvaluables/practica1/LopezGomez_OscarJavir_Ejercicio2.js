let texto = "En un lugar de la mancha";
let f4 = (texto) => texto.split(" ").map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join("");
let f5 = (texto) => texto.split(" ").join("").length / (texto.split(" ").length);
let f6 = (texto) => texto.split(" ").filter((palabra) => palabra.indexOf('a') !== -1).map((palabra) => palabra.length);;
console.log("El texto en CamelCase: " + f4(texto));
console.log("La media de longitud de las palabras es: " + f5(texto));
console.log("Longitud de las palabras que contienen 'a' es: " + f6(texto));

