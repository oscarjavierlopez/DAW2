//Escribir texto al reves a nivel de palabras y de letras

let texto = "Esto es un texto para hacer ejercicios con cadenas. Se realizarán transformaciones sobre el mismo. Se emplearán métodos del objeto String.";
let palabras = texto.split(" ");
for (let i = 0; i < palabras.length; i++) {
    let caracteres = palabras[i].split("");
    caracteres = caracteres.reverse();
    palabras[i] = caracteres.join("");
}
palabras = palabras.reverse();
texto = palabras.join(" ");
console.log(texto);

