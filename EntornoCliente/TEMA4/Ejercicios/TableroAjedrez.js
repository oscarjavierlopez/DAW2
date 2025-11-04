function colocarPieza(figura, tablero) {
    let x = Math.round(Math.random() * 7);
    let y = Math.round(Math.random() * 7);
    figura.moverA(x, y);
}



let tablero = new Array(8);
for (let i = 0; i < tablero.length; i++) {
    tablero[i] = new Array(8);
}



let figura = {
    x: 0,
    y: 0,
    moverA: function (x, y) {
        if (tablero[x][y] === undefined) {
            tablero[x][y] = figura.tipo;
        } else {
            colocarPieza(figura, tablero)
        }
    }
};

let rey = Object.create(figura);
rey.tipo = 'K';
let reina = Object.create(figura);
reina.tipo = 'Q';
let torre1 = Object.create(figura);
torre1.tipo = 'T';
let torre2 = Object.create(figura);
torre2.tipo = 'T';
let alfil1 = Object.create(figura);
alfil1.tipo = 'A';
let alfil2 = Object.create(figura);
alfil2.tipo = 'A';
let caballo1 = Object.create(figura);
caballo1.tipo = 'C';
let caballo2 = Object.create(figura);
caballo2.tipo = 'C';
let peon1 = Object.create(figura);
peon1.tipo = 'P';
let peon2 = Object.create(figura);
peon2.tipo = 'P';
let peon3 = Object.create(figura);
peon3.tipo = 'P';
let peon4 = Object.create(figura);
peon4.tipo = 'P';
let peon5 = Object.create(figura);
peon5.tipo = 'P';
let peon6 = Object.create(figura);
peon6.tipo = 'P';
let peon7 = Object.create(figura);
peon7.tipo = 'P';
let peon8 = Object.create(figura);
peon8.tipo = 'P';
let figuras = [rey, reina, torre1, torre2, caballo1, caballo2, alfil1,
    alfil2, peon1, peon2, peon3, peon4, peon5, peon6, peon7, peon8];

for (figura of figuras) {
    colocarPieza(figura, tablero);
}

console.table(tablero);




