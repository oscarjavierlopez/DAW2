export class Robot{ç
    #nombre;
    #orientacion;
    #posicion;
    constructor(nombre, orientacion, posicion){
        this.#nombre = nombre;
        this.#orientacion = orientacion;
        this.#posicion = posicion;
    }

    get nombre(){
        return this.#nombre;
    }

    get posicion(){
        return this.#posicion;
    }

    get orientacion(){
        return this.#orientacion;
    }
}