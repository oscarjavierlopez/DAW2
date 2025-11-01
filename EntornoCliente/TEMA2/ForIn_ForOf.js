let a = [21, 23, 32];
for(let i in a){  //Itera sobre el índice o  clave del elemento
    console.log("El elemento con índice " + i + " es: " + a[i]);
}

console.log("Los números del array son:")
for(let numero of a){//itera sobre los elementos del array
    console.log(numero)
}

/*for([indice,numero] of a){
    console.log(indice + " = " + numero);
}*/ //No está permitido iterar sobre los indices de un array

