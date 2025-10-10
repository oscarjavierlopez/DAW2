let personas = [
    { nombre: "Óscar", edad: 25 },
    { nombre: "Lucía", edad: 30 },
    { nombre: "Óscar", edad: 28 }
];

let personasPorNombre = Map.groupBy(personas, function (persona) {
    if (persona.nombre == "Óscar") {
        return "Óscar";
    } else {
        return "Lucía";
    }
})


let sumaEdadOscar = 0;
let contadorOscar = 0;
let sumaEdadLucia = 0;
let contadorLucia = 0;
for ([clave, valor] of personasPorNombre) {
    if (clave == "Óscar") {
        for (persona of valor) {
            sumaEdadOscar += persona.edad;
            contadorOscar++;
        }
    } else if (clave == "Lucía") {
        for (persona of valor) {
            sumaEdadLucia += persona.edad;
            contadorLucia++;
        }
    }
}
console.log("La media de edad de los Óscar es: " + sumaEdadOscar / contadorOscar + " años");
console.log("La media de edad de las Lucías es: " + sumaEdadLucia / contadorLucia + " años");