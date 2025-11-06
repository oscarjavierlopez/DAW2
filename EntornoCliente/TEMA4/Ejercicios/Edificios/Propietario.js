export class Propietario{
    #nombre;
    #genero;
    #miembros;
    constructor(nombre, genero, miembros){
        this.#nombre = nombre;
        this.#genero = genero;
        this.#miembros = miembros;
    }

    get nombre(){
        return this.#nombre;
    }
}