//Constructor sin parametros
let fechaActual = new Date();
console.log("La fecha actual es: " + fechaActual);

//Constructor con cadena(aaaa-mm-dd)
let fechaNacimiento = new Date("2004-12-16"); 
console.log("Tu fecha de nacimiento es: " + fechaNacimiento);

//constructor con milisegundos
let fechaNacPadre = new Date(1234544); //milisegundos desde el 01 de enero de 1970
console.log("La fecha de nacimiento de tu padre es: " + fechaNacPadre);

//construcor con todos los parametros
let fechaMatricula = new Date(2025, 5, 15, 10, 30, 0, 0); //enero es el mes 0 y diciembre el 11
console.log("Te matriculaste en daw en la fecha: " + fechaMatricula);//las horas minutos y segundos son opcionales(se inicializan a 0)

//Funciones
console.log("La fecha actual en ms: " + Date.now());//devuelve los milisegundos que han pasado desde el 01/01/1970 hasta hoy
let ms = Date.now();
fechaActual = new Date(ms);
console.log("La fecha actual es: " + fechaActual);

let ultimoDiaSiglo = Date.parse("1999-12-31T23:59:59"); //parsea una cadena a ms desde 1970
console.log("El último día del siglo XIX en ms fue: " + ultimoDiaSiglo);
ultimoDiaSiglo = new Date(Date.parse("1999-12-31T23:59:59"));
console.log("El último día del siglo XIX fue: " + ultimoDiaSiglo);

let añoNac = fechaNacimiento.getFullYear(); //devuelve el año de una fecha
let diaNac = fechaNacimiento.getDate(); //devuelve el día d una fecha
let mesNac = fechaNacimiento.getMonth(); //devuelve el mes de una fecha
console.log('dia ' + fechaNacimiento.getDay())
let horaNac = fechaNacimiento.getHours(); //devuelve las horas de una fecha
let minNac = fechaNacimiento.getMinutes(); //devuelve los minutos de una fecha
let secNac = fechaNacimiento.getSeconds(); //devuelve los segundos de una fecha
let msNac = fechaNacimiento.getMilliseconds(); //devuelve los milisegundos de una fecha
console.log("Naciste en el año: " + añoNac + " ,el día: " + diaNac + " y el mes: " + mesNac +" a las " + horaNac + ":" + minNac + ":" + secNac + ":" + msNac);

let msMatricula = fechaMatricula.getTime(); //Devuelve los ms que han pasado desde 01/01/70 hasta la fecha marcada
console.log("Desde el 1 de enero de 1970 hasta que te matriculaste en DAW han pasado: " + msMatricula + " ms");

fechaMatricula.setDate(fechaMatricula.getDate() + 1) //cambiamos el valor del día de la fecha
console.log("Te matriculaste el día " + fechaMatricula);

//getMonth --> Obtiene el mes 0-11
console.log("Te matriculaste el mes: " + fechaMatricula.getMonth() + " que es junio");

//setMonth también usa meses de 0-11