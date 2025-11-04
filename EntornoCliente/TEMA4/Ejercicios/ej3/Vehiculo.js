export class Vehiculo{
    #pasajeros; //el atributo privado lo debo declarar antes del constructor
    constructor(pasajeros){
        this.#pasajeros = pasajeros
    }

    get pasajeros(){
        return this.#pasajeros;
    }

    set pasajeros(pasajeros){
        this.#pasajeros = pasajeros;
    }
}