function normalizarTexto(cadena) {
    let nuevaCadena = cadena.trim();
    let palabras = nuevaCadena.split(/\s+/);
    let palabras2 = []
    for (let i = 0; i < palabras.length; i++) {
        if (/!|¡|@|#|%|\+|\*|¿|\?/g.test(palabras[i])) {
            palabras2[i] = palabras[i].replace(/!|¡|@|#|%|\+|\*|¿|\?/g, "");
        } else {
            palabras2[i] = palabras[i];
        }

        if (/^\s/.test(palabras2[i])) {
            palabras2[i] = palabras2[i].replace(/^\s/, "");
        }
        let letras = palabras2[i].split("");
        for(let j = 0; j < letras.length; j++){
            if(j === 0){
                letras[0] = letras[0].toUpperCase();
            }else{
                letras[j] = letras[j].toLowerCase();
            }
        }
        palabras2[i] = letras.join("");
    }
    nuevaCadena = palabras2.join(" ");
    nuevaCadena = nuevaCadena.replace(/á/g, "a");
    nuevaCadena = nuevaCadena.replace(/é/g, "e");
    nuevaCadena = nuevaCadena.replace(/í/g, "i");
    nuevaCadena = nuevaCadena.replace(/ó/g, "o");
    nuevaCadena = nuevaCadena.replace(/ú/g, "u");



    return nuevaCadena;
}
//console.log("  ¡hola   señor   pérez!  ")
console.log(normalizarTexto("  ¡hola   señor   pérez!  ")) // "Hola Señor Perez"
console.log(normalizarTexto("     Tu    putA* Madré ?"))