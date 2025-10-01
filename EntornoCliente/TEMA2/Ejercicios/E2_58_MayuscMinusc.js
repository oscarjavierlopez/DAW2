//Alternar palabras en mayusculas con palabras en minusculas

let texto = "Esto es un texto para hacer ejercicios con cadenas. Se realizarán transformaciones sobre el mismo. Se emplearán métodos del objeto String.";
let palabras = texto.split(" ");
for(let i in palabras){
    if(i % 2 === 0){ //si el indiece es par la palabra será mayuscula
        palabras[i]= palabras[i].toUpperCase();
    }else{ //si es impar será minuscula
        palabras[i] = palabras[i].toLowerCase();
    }
}
texto = palabras.join(" ");
console.log(texto);