let rellenarVotos = (resultados) => {
    for (let i = 2; i < resultados.length; i++) {
        for (let j = 2; j < 7; j++) {
            resultados[i][j] = Math.round(Math.random() * 5 + 5);
        }
    }
}

let recuentoVotos = (fila, resultados) => {
    let sumaVotos = 0;
    for (let i = 2; i < resultados[fila].length; i++) {
        sumaVotos += resultados[fila][i];
    }
    return sumaVotos;
}



let resultados = new Array(6);
resultados[0] = ['index', 0, 1, 2, 3, 4, 5];
resultados[1] = [0, '', 'Ayuntamiento', 'Polideportivo', 'instituto', 'mercado', 'colegio'];
resultados[2] = [1, 'PV'];
resultados[3] = [2, 'OV'];
resultados[4] = [3, 'VPSI'];
resultados[5] = [4, 'UPV'];
rellenarVotos(resultados);

for (let i = 0; i < resultados.length; i++) {
    console.log(`${resultados[i]}`);
}

//recuento de votos por partido
let votosporPartido = new Map([
    ["PV", recuentoVotos(2, resultados)],
    ["OV", recuentoVotos(3, resultados)],
    ["VpSI", recuentoVotos(4, resultados)],
    ["UPV", recuentoVotos(5, resultados)]
]);

let votos = Array.from(votosporPartido.values()).sort((a, b) => a - b).filter((valor, indice, votos) => votos[indice] != votos[indice-1]);


console.log(`
    VOTOS ORDENADOS:`)
for (let i = 0; i < votos.length; i++) {
    for ([clave, valor] of votosporPartido) {
        if (valor === votos[i]) {
            console.log(`${clave} => ${valor}`)
        }
    }
}



