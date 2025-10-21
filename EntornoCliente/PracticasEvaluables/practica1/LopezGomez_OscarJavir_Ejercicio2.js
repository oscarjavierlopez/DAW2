let texto = "En un lugar de la mancha";
let f4 = (texto) => texto.split(" ").join("");
let f5 = (texto) => texto.split(" ").join("").length / (texto.split(" ").length);
let f6 = (texto) => texto.split(" ").filter((palabra) => palabra.indexOf('a') !== -1).map((palabra) => palabra = palabra.length);;
console.log(f4(texto));
console.log("La media de longitud de las palabras es: " + f5(texto));
console.log(f6(texto));
console.log(texto.split("").forEach((caracter, indice, caracteres) => {
    if(caracter == " " && (indice + 1) < caracteres.length){
        caracteres[indice + 1] = caracteres[indice + 1].toUpperCase();
    }
    console.log(caracter);
}));


