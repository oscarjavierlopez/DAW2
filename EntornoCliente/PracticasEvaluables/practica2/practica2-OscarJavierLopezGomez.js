//FUNCIONES APARTADO 4
let checkpages = (libro) => {
    if (libro.numPags > 150) {
        return true;
    } else {
        return false;
    }
};

let checkLibro = (biblioteca, libro) => {
    if (biblioteca.findIndex((valor) => valor.nombre === libro.nombre) !== -1) {
        return true;
    } else {
        return false;
    }
};

//FUNCIONES APARTADO 7
function checkAutor(autor, biblioteca) {
    return biblioteca.find((libro) => libro.autor === autor);
};

let forraLibro = (biblioteca) => {
    for (libro of biblioteca) {
        libro.forrado = true;
    }
}

let prestarLibro = (biblioteca, titulo) => {
    let indexEliminar = biblioteca.findIndex((libro) => libro.nombre === titulo); //solo elimina la primera coincidencia
    if (indexEliminar !== -1) {
        biblioteca.splice(indexEliminar, 1);
    }
}

let devolverLibro = (biblioteca, libro) => {
    biblioteca.push(libro);
};

//APARTADO 1
const libro1 = {
    nombre: "El Lazarillo de Tormes",
    color: "negro",
    autor: "anónimo",
    numPags: 120,
    editorial: "Anaya",
    forrado: false,
    urlCover: "http://el-lazarillo-de-tormes.com",
    comprar() { console.log(`Libro de aventuras del autor ${this.autor} comprado`) },
    toString() { console.log(this.nombre + "-" + this.autor + "-" + this.numPags + "-" + this.forrado) }
};

const libro2 = {
    nombre: "El Lazarillo de Tormes",
    color: "negro",
    autor: "anónimo",
    numPags: 180,
    editorial: "Anaya",
    forrado: false,
    urlCover: "http://el-lazarillo-de-tormes.com",
    comprar() { console.log(`Libro de aventuras del autor ${this.autor} comprado`) },
    toString() { console.log(this.nombre + "-" + this.autor + "-" + this.numPags + "-" + this.forrado) }
};

const libro3 = {
    nombre: "Libros de la selva",
    color: "negro",
    autor: "Federico García Lorca",
    numPags: 120,
    editorial: "Anaya",
    forrado: false,
    urlCover: "http://el-lazarillo-de-tormes.com",
    comprar() { console.log(`Libro de aventuras del autor ${this.autor} comprado`) },
    toString() { console.log(this.nombre + "-" + this.autor + "-" + this.numPags + "-" + this.forrado) }
};

const libro4 = {
    nombre: "El Lazarillo de Tormes",
    color: "negro",
    autor: "anónimo",
    numPags: 120,
    editorial: "Anaya",
    forrado: false,
    urlCover: "http://el-lazarillo-de-tormes.com",
    comprar: function() { console.log(`Libro de aventuras del autor ${this.autor} comprado`) },
    toString: function() { console.log(this.nombre + "-" + this.autor + "-" + this.numPags + "-" + this.forrado) }
};

//Apartado 2
let biblioteca = [libro1, libro2, libro3];
console.log("biblioteca:");
biblioteca.toString();

//Apartado 3
console.log("EDITORIALES:")
for (libro of biblioteca) {
    console.log(libro.editorial);
}

console.log("Apartado 4:")
console.log("checkpages libro 1: "+ checkpages(libro1));
console.log("checkpages libro 2: " + checkpages(libro2));
console.log(checkLibro(biblioteca, libro4)); //devuelve true xk el nombre de libro4 y el de libro1 es el mismo

console.log("Apartado 5:");
//biblioteca.push(...libro4);  Da error
console.log(biblioteca);

console.log("Apartado 6:");
let librosLargos = biblioteca.filter((libro) => checkpages(libro));
console.log(librosLargos);

console.log("Apartado 7 - checkautor:");
console.log(checkAutor("Federico García Lorca", biblioteca));
console.log("Apartado 7 - ForraLibro:");
forraLibro(biblioteca);
console.log(biblioteca); //para ver que están forrados
console.log("Apartado 7 - prestarLibro:");
prestarLibro(biblioteca, "Libros de la selva");
console.log(biblioteca); //para ver que lo ha eliminado
console.log("Apartado 7 - devolverLibro:");
devolverLibro(biblioteca, libro1);
console.log(biblioteca); //para ver que lo ha añadido


