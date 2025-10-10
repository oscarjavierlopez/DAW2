function contPalabrasUnicas(parrafo) {
    parrafo = parrafo.toLowerCase();
    parrafo = parrafo.replace(/,|¿|\?|¡|!/g, "");
    let palabrasParrafo = parrafo.split(" ");
    let palabrasParrafoSinRepetir = new Set(palabrasParrafo);
    return palabrasParrafoSinRepetir.size;
}
console.log("Hay " + contPalabrasUnicas("Hola, hola! ¿Cómo estás? Estoy bien, ¿y tú?") + " palabras únicas");
console.log("Hay " + contPalabrasUnicas("El código 123 es válido. ¿123? ¡Sí, 123!") + " palabras únicas");
console.log("Hay " + contPalabrasUnicas("¡Qué rápido corre el zorro! Qué animal tan ágil.") + " palabras únicas");
