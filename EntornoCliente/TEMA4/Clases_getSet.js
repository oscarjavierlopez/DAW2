class Persona {
    constructor(nombre) {
        this._nombre = nombre; //por convencion se pone _ antes de un atributo para indicar q es privado y diferenciarlo del get y el set
    }
    set nombre(nombre) { //get y set van con un espacio entre medias
        this._nombre = nombre;
    }

    get nombre() {
        return this._nombre;
    }
}

const p = new Persona('Paco'); //realmente cn la '_' no lo hago privado pero indico q se debe acceder al atributo por medio de get y set
console.log(p._nombre); //aqui accedo desde el atributo
p.nombre = 'Raúl'; //aquí voy al set
console.log(p.nombre); //aqui accedo desde el get
