let alumnos = new Map([
    [1, "Pepe"],
    [2, "Juan"],
    [3, "Sofía"]
]);

alumnos.set(4, "Pedro");

console.log(alumnos.size);

console.log(alumnos.get(5)); //undefined xk no existe
console.log(alumnos.get(4));

alumnos.delete(3);

console.log(alumnos.has(3));

console.log("Nombres:");
for (nombre of alumnos.values()) {
    console.log(nombre);
}


console.log("ids:");
for (id of alumnos.keys()) {
    console.log(id);
}

console.log('Recorrido de alumnos con entries:');
for ([clave, valor] of alumnos.entries()) {
    console.log(clave + " = " + valor);
}

console.log('Recorrido de alumnos desde el mapa:')
for ([clave, valor] of alumnos) { //tmb se pde poner for(let[clave, valor] of alumnos)
    console.log(clave + " = " + valor);
}

console.log("Recorrido con for each:");
alumnos.forEach(function (valor, clave) { //el primer parametro que paso a la funcion es el valor y el 2 la clave
    console.log(clave + " = " + valor);
})

alumnos.clear();



