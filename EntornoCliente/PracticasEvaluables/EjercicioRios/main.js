import { Rio } from "./Rio.js";
const rioA = new Rio('Duero', 'Cuenca Atlántica');
const rioB = new Rio('Ebro', 'Cuenca Mediterránea');
console.log(`nombre del rioA: ${rioA.imprimeNombre()}`);
console.log(rioA.imprimeCuenca());
console.log(rioA.imprimeCaudal());
console.log(rioA.imprimePoblaciones());
console.log(rioA.imprimeRio());
rioA.modificarCaudalMedio(200);
rioA.agregarPoblacion('Tordesillas');
rioA.eliminarPoblacion('Tordesillas');
rioB.agregarPoblacion("Miranda de Ebro");
rioB.agregarPoblacion("Tortosa");
rioB.agregarPoblacion("Valladolid");
console.log(rioB.imprimePoblaciones());
rioB.eliminarPoblacion('Valladolid');
console.log(rioB.imprimePoblaciones());


rioB.modificarCaudalMedio(150);
let rios = [new Rio('Zapardiel', 'Cuenca Atlántica'), rioA, rioB];
rios.sort(Rio.ordenar_por_caudal); //ordena de forma ascendente los caudales
rios.forEach((rio) => console.log(rio.imprimeNombre()));





