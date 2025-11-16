function f1(nombre, edad) {
    console.log(`${nombre} - ${edad}`);
}
f1('Pepe'); //la edad será undefined xk no se la paso(toma los argumentos en orden)
f1('Pepe', 20);
f1('Pepe', 50, 'hola'); //si le paso argumentos de más no hace nada con ellos


//Utilización del array "arguments"(array que guarda en orden los argumentos que pasamos cuando llamamos a la funcion)
function f2(nombre, edad) {
    console.log(`${arguments[0]} - ${arguments[1]}`);
}
f2('Pepe'); 
f2('Pepe', 20);
f2('Pepe', 20, 20); //arguments guarda el tercer parámetro



//parametros inicializados por defecto
function f3(nombre = "Paco", edad = 20) {
    console.log(`${nombre} - ${edad}`);
}
f3();
f3('Pepe');
f3('Pepe', 50);


//Parametros REST => se especifica con ... para decirle que no sé cuantos argumentos le voy a pasar
function suma(...valores){ //los parametros rest se ponen los últimos en la lista de parámetros
    let resultado = 0;
    for(let numero of valores){ //valores es un array q contiene los argumentos q se le pasen
        resultado += numero;
    }
    return resultado;
}
console.log(suma());
console.log(suma(1, 2));
console.log(suma(10, 20, 30));
