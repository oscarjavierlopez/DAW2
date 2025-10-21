let texto = "En un lugar de la mancha";
let f4 = (texto) => texto.split(" ").filter((palabra) => palabra !== " ").join("");
let f5 = (texto) => texto.split(" ").join("").length / (texto.split(" ").length);
let f6 = (texto) => texto.split(" ").filter((palabra) => /a|A/.test(palabra)).map((palabra) => palabra = palabra.length);;
console.log(f4(texto));
console.log("La media de longitud de las palabras es: " + f5(texto));
console.log(f6(texto));