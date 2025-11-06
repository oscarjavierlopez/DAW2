import { Edificio } from "./Edificio.js";
import { Propietario } from "./Propietario.js";

const Edu = new Propietario('Edu', "No binario", 3);
const Antonio = new Propietario('Antonio', "No binario", 3);
const Erik = new Propietario('Erik', "No binario", 3);
const Mayte = new Propietario('Mayte', "No binario", 3);
const Monica = new Propietario('Monica', "No binario", 3);
const Santiago = new Propietario('Santiago', "No binario", 3);

const edificio = new Edificio("Calle Melancolía", 1, 10000, 2, 3);
edificio.setPropietario(Edu.nombre, 0, 0);
edificio.setPropietario(Antonio.nombre, 0, 1);
edificio.setPropietario(Erik.nombre, 0, 2);
edificio.setPropietario(Mayte.nombre, 1, 0);
edificio.setPropietario(Monica.nombre, 1, 1);
edificio.setPropietario(Santiago.nombre, 1, 2);
console.table(edificio.pisos);

const edificio2 = new Edificio("Calle Ave del paraíso", 2, 47500, 5, 3);
edificio2.setPropietario(Edu.nombre, 1, 2);
edificio2.setPropietario(Monica.nombre, 2, 1);
console.table(edificio2.pisos);