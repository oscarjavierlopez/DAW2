export class Bailarin{
    #nombre;
    #apellidos;
    constructor(nombre, apellidos){
        this.#nombre = nombre;
        this.#apellidos = apellidos;
    }

    get nombre(){
        return this.#nombre;
    }

    get apellidos(){
        return this.#apellidos;
    }
}