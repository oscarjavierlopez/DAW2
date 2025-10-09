let alumnos = new Map([
    [1, "Pepe"],
    [2, "Juan"],
    [3, "Sofía"],
    [4, "Pepe"],
    [5, "Juan"]
]);

function agruparNombre(nombre) {
    if (nombre === "Juan") {
        return "Juan";
    } else if (nombre === "Pepe") {
        return "Pepe";
    } else {
        return "Sofía";
    }
}

let nombresAgrupados = Map.groupBy(alumnos.values(), agruparNombre);
console.log(nombresAgrupados);
for ([clave, valor] of nombresAgrupados) {
    console.log(clave + " => " + valor.length);
}
