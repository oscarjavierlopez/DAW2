import { Festival } from "./Festival.js";
import { Bailarin } from "./Bailarin.js";
import { Pareja } from "./Pareja.js";
function ordenarNiveles({nivel}) {
    if (nivel === "INICIACION") {
        return "INICIACION";
    } else if (nivel === "INTERMEDIO") {
        return "INTERMEDIO";
    } else if (nivel === "AVANZADO") {
        return "AVANZADO";
    }
}

let festivales = new Map([]);
let profesores = new Map([]);
let parejas = [];

const SwingPisuerga = new Festival("Swing Pisuerga", 'Valladolid');
festivales.set(SwingPisuerga.fecha, SwingPisuerga);

//Nivel Iniciacion
const Ana = new Bailarin('Ana', 'López');
const Amaia = new Bailarin('Amaia', 'López');
const profesIniciacion = new Pareja(Ana, Amaia, 'INICIACION', { x: 2, y: 1 }, "norte");
profesores.set(profesIniciacion.nivel, profesIniciacion);
parejas.push(profesIniciacion);
profesIniciacion.desplazar("DAAIA", SwingPisuerga.pista);

const Marta = new Bailarin("Marta", "Ruíz");
const Carlos = new Bailarin("Carlos", "Peña");
const Pareja1 = new Pareja(Marta, Carlos, "INICIACION", { x: 0, y: 1 }, "norte");
parejas.push(Pareja1);
const {posicion: {x: pareja1X, y: pareja1Y}} = Pareja1;
SwingPisuerga.pista[pareja1X][pareja1Y] = Pareja1.nombre;

const Sonia = new Bailarin("Sonia", "Rey");
const Diego = new Bailarin("Diego", "Páez");
const Pareja2 = new Pareja(Sonia, Diego, "INICIACION", { x: 0, y: 2 }, "norte");
parejas.push(Pareja2);
Pareja2.desplazar("DADA", SwingPisuerga.pista); //Desplazamiento a pos ocupada => Lo mantiene en la pos de partida

let niveles = Map.groupBy(parejas, ordenarNiveles);
//Falta controlar que no haya mas de 2 parejas de profes por nivel

//salida por consola
for (let [nivel, parejas] of niveles) {
    let datosPareja = [["Bailarín 1", "Bailarín 2", "Nombre de Pareja"]];
    console.log(`Nivel: ${nivel}`);
    for (let pareja of parejas) {
        datosPareja.push([`${pareja.bailarin1.nombre} ${pareja.bailarin1.apellidos}`,
        `${pareja.bailarin2.nombre}  ${pareja.bailarin2.apellidos}`,
        pareja.nombre
        ])
    }
    console.table(datosPareja);

}

console.table(SwingPisuerga.pista);




