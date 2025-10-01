let tabla = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['a', 'b', 'c', 'd']];
tabla.forEach(function (elemento, indice,) { //A la fn callback hay que pasarle el elemento actual y el indice(itera sobre ambos) 
    console.log(elemento);                         
});

//imprimir por filas y columnas
tabla.forEach(function (elemento1, indice1,) { 
    elemento1.forEach(function(elemento2, indice2){
        console.log("tabla[" +indice1 + "][" + indice2 + "] :" + elemento2 );
    }); 
});