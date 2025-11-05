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
let rios = [new Rio('Zapardiel', 'Cuenca Atlántica'), rioA, new Rio('Miño', 'Atlántica'), rioB, new Rio('Adajar', 'Cuenca Atlántica')];
rios.sort(Rio.ordenar_por_caudal); //ordena de forma ascendente los caudales
//Los ríos sin caudal los añade al principio
rios.forEach((rio) => console.log(rio.imprimeNombre()));





