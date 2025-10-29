let rellenarVotos = (resultados) => {
    for (let i = 1; i < resultados.length; i++) {
        for (let j = 1; j < resultados[0].length; j++) {
            resultados[i][j] = Math.round(Math.random() * 5 + 5);
        }
    }
}

let recuentoVotos = (fila, resultados) => {
    let sumaVotos = 0;
    for (let i = 1; i < resultados[fila].length; i++) {
        sumaVotos += resultados[fila][i];
    }
    return sumaVotos;
}



let resultados = new Array();
resultados[0] = ['', 'Ayuntamiento', 'Polideportivo', 'instituto', 'mercado', 'colegio'];
resultados[1] = ['PV'];
resultados[2] = ['OV'];
resultados[3] = ['VPSI'];
resultados[4] = ['UPV'];
rellenarVotos(resultados);

console.table(resultados);

//recuento de votos por partido
let votosporPartido = new Map([
    ["PV", recuentoVotos(1, resultados)],
    ["OV", recuentoVotos(2, resultados)],
    ["VpSI", recuentoVotos(3, resultados)],
    ["UPV", recuentoVotos(4, resultados)]
]);

let votos = Array.from(votosporPartido.values())
    .sort((a, b) => a - b)
    .filter((valor, indice, votos) => votos[indice] != votos[indice - 1]);


console.log(`
    VOTOS ORDENADOS:`)
for (let i = 0; i < votos.length; i++) {
    for ([clave, valor] of votosporPartido) {
        if (valor === votos[i]) {
            console.log(`${clave} => ${valor}`)
        }
    }
}



