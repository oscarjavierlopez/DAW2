let rubiosMorenos = ["rubio", "moreno", "rubio", "moreno", "rubio", "moreno"];
console.log(rubiosMorenos);
//ordenando primero los rubios
function ordenarPorRubios(a, b) {
    if (a == "rubio" && b == "moreno") {
        return -1;
    } else if (a == "moreno" && b == "rubio") {
        return 1;
    } else {
        return 0;
    }
}
rubiosMorenos.sort(ordenarPorRubios);
console.log(rubiosMorenos);

//Añadimos pelirrojos
let rubiosMorenosPelirrojos = ["rubio", "moreno", "pelirrojo", "rubio", "moreno", "pelirrojo"];
console.log(rubiosMorenosPelirrojos);
function ordenacion(a, b) {
    if (a == "rubio" && b == "moreno") {
        return -1;
    } else if (a == "moreno" && b == "rubio") {
        return 1;
    } else if (a == "rubio" && b == "pelirrojo") {
        return -1;
    } else if (a == "pelirrojo" && b == "rubio") {
        return 1;
    } else if (a == "moreno" && b == "pelirrojo") {
        return -1;
    } else if (a == "pelirrojo" && b == "moreno") {
        return 1;
    } else {
        return 0;
    }
}
rubiosMorenosPelirrojos.sort(ordenacion);
console.log(rubiosMorenosPelirrojos);

/* Una mejor manera de hacerlo es:*/
rubiosMorenosPelirrojos = ["rubio", "moreno", "pelirrojo", "rubio", "moreno", "pelirrojo"];
function ordena(a, b) {
    let rubio = 1;
    let moreno = 2;
    let pelirrojo = 3;

    if (a == "rubio") {
        a = rubio; //aunque les cambie el valor dentro de la funcion, fuera no se cambia(sigue siendo rubio, moreno o pelirrojo) y se ordena segun lo haya hecho la funcion
    } else if (a == "moreno") {
        a = moreno;
    } else {
        a = pelirrojo;
    }

    if (b == "rubio") {
        b = rubio;
    } else if (b == "moreno") {
        b = moreno;
    } else {
        b = pelirrojo;
    }

    if (a > b) {
        return 1;
    } else if (b < a) {
        return -1;
    } else {
        return 0;
    }
}
console.log(rubiosMorenosPelirrojos.sort(ordenacion))

