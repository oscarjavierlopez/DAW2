let texto = "En un lugar de la mancha";
let f4 = (texto) => texto.split(" ").filter((palabra) => palabra !== " ").join("");
let f5 = (texto) => texto.split(" ").filter() / (texto.split(" ").length);
console.log(f4(texto));
console.log("La media de longitud de las palabras es:" + f5(texto));