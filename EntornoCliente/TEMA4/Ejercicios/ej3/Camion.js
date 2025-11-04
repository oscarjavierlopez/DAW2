import { Vehiculo } from "./Vehiculo.js";
export class Camion extends Vehiculo{
    #tara;
    constructor(pasajeros, tara){
        super(pasajeros);
        this.#tara = tara;
    }

    get tara(){
        return this.#tara;
    }

    set tara(tara){
        this.#tara = tara;
    }
}