import { Vehiculo } from "./Vehiculo.js";
export class Turismo extends Vehiculo{
    #color;
    constructor(pasajeros, color){
        super(pasajeros);
        this.#color = color;
    }

    get color(){
        return this.#color;
    }

    set color(color){
        this.#color = color;
    }
}