//Escribir el texto sin tildes

let texto = "Esto es un texto para hacer ejercicios con cadenas. Se realizarán transformaciones sobre el mismo. Se emplearán métodos del objeto String.";
texto =  texto.replace(/á/g, "a");
texto = texto.replace(/é/g , "e");
texto = texto.replace(/í/g , "i");
texto = texto.replace(/ó/g, "o");
texto = texto.replace(/ú/g , "u");
console.log(texto);
