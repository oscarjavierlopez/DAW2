let stringFechaNacimiento = "16/12/2004";
function calcularEdad(stringFechaNacimiento) {
    let arrayFechaNacimiento = stringFechaNacimiento.split('/');
    arrayFechaNacimiento = arrayFechaNacimiento.reverse();
    stringFechaNacimiento = arrayFechaNacimiento.join("-");
    let fechaNacimiento = new Date(stringFechaNacimiento);
    let currentDate = new Date();
    let edadAnios = currentDate.getFullYear() - fechaNacimiento.getFullYear();
    if (currentDate.getMonth() < fechaNacimiento.getMonth()) {
        edadAnios -= 1;
    } else if (currentDate.getMonth() === fechaNacimiento.getMonth()) {
        if (currentDate.getDay < fechaNacimiento.getDay()) {
            edadAnios -= 1;
        }
    }
    return edadAnios;
}

function tiempoProximoCumple(stringFechaNacimiento) {
    let arrayFechaNacimiento = stringFechaNacimiento.split('/');
    arrayFechaNacimiento = arrayFechaNacimiento.reverse();
    stringFechaNacimiento = arrayFechaNacimiento.join("-");
    let fechaNacimiento = new Date(stringFechaNacimiento);
    let currentDate = new Date();
    let meses = 0;
    let dias = 0;
    if (currentDate.getMonth() < fechaNacimiento.getMonth()) {
        meses = fechaNacimiento.getMonth() - currentDate.getMonth();
    }
    return meses;
}
console.log("Tienes: " + calcularEdad(stringFechaNacimiento) + " años");
console.log("Faltan: " + tiempoProximoCumple(stringFechaNacimiento) + " meses para tu proximo cumpleaños");