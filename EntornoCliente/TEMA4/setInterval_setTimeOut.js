//setTimeOut() => Ejecuta una funcion despues de un tiempo
setTimeout(() => console.log('Hola'), 1000); 
//el primer argumento es el hanler(fn q se ejecuta)
//el segundo argumento es el tiempo(ms) tras el cual se ejecutará el handler
//devuelve un identificador numerico q representa el temporizador creado

//setInterval() => ejecuta una funcion cada cierto tiempo
let contador = 0;
const id = setInterval(function(){
    console.log(Math.random() * 10);
    if(contador++ === 5){ //primero se compara contador con 5 y luego se incrementa el contador
        clearInterval(id);
    }
}, 3000);
//El primer argumento es la fn q se ejecutará
//el segundo argumento es el tiempo(ms) que pasa entre 2 ejecuciones de la fn
//Para que no produzca un bucle infinito es necesario limpiar el intervalo