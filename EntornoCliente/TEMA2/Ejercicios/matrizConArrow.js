//sacar el equipo con id = 1 usando arrow functions
const FILAS = 4;
const COLUMNAS = 4;
let equipos = new Array(FILAS).fill().map(() => Array(COLUMNAS).fill("")); 
const equipo = {
    id: 1,
    nombre: 'Portátil',
    personal: true
};


equipos[0][0] = equipo;
console.table(equipos);
console.log(equipos.flat().find((elemento) => elemento.id === 1).id);
