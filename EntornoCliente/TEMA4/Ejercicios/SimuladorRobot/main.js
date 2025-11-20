import { Robot } from "./Robot.js";
const KUKA = new Robot('KUKA', "norte", { x: 0, y: 0 });
const ROWENTA = new Robot('ROWENTA', "sur", { x: 0, y: 1 });
const addTablero = ({nombre, orientacion, posicion}) => {
    if(posicion.x === 0 && posicion.y === 0){
        tablero[tablero.length - 1][0] = nombre;
    }
}
let tablero = new Array(3);
for (let i = 0; i < tablero.length; i++) {
    tablero[i] = [null, null, null, null];
}
addTablero(KUKA);
tablero[ROWENTA.posicion.x][ROWENTA.posicion.y] = ROWENTA.nombre;

console.table(tablero);
