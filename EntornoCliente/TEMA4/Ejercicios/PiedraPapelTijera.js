let posibilidades = ["piedra", "papel", "tijera"];
let p1 = posibilidades[Math.round(Math.random() * 2)]; //para asociar un numero a una cadna conviene usar un array y sus indices 
let p2 = posibilidades[Math.round(Math.random() * 2)];


let resultado = (p1 = "piedra", p2 = "piedra") => {
    let resultado = "";
    if (p1 === p2) {
        resultado = "empate";
    } else if (p1 === "piedra" && p2 === "tijera") {
        resultado = "El ganador es jugador1";
    } else if (p1 === "tijera" && p2 === "papel") {
        resultado = "El ganador es jugador1";
    } else if (p1 === "papel" && p2 === "piedra") {
        resultado = "El ganador es jugador1";
    } else {
        resultado = "El ganador es jugador2";
    }
    return resultado;
}

console.log("Jugador 1:" + p1);
console.log("Jugador 2: " + p2);
console.log(`Resultado: ${resultado(p1, p2)}`);