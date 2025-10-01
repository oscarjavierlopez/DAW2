//Programa que permita ver en qué dia van a caer tus proximos 5 cumpleaños
function verDia(dia, año){
    switch (dia) {
    case 0:
        console.log("El cumpleaños de " + año + " caerá en domingo");
        break;
    case 1:
        console.log("El cumpleaños de " + año+ " caerá en lunes");
        break;
    case 2:
        console.log("El cumpleaños de " + año +" caerá en martes");
        break;
    case 3:
        console.log("El cumpleaños de " + año +" caerá en miércoles");
        break;
    case 4:
        console.log("El cumpleaños de " + año +" caerá en jueves");
        break;
    case 5:
        console.log("El cumpleaños de " + año + " caerá en viernes");
        break;
    case 6:
        console.log("El cumpleaños de " + año + " caerá en sábado");
        break;

}
}
let fecha1 = new Date("2025-12-16");
let fecha2 = new Date("2026-12-16");
let fecha3 = new Date("2027-12-16");
let fecha4 = new Date("2028-12-16");
let fecha5 = new Date("2029-12-16");
let fechas = [fecha1, fecha2, fecha3, fecha4, fecha5]
for(let i = 0; i < fechas.length; i++){
    let fecha = fechas[i];
    verDia(fecha.getDay() , fecha.getFullYear());
}


