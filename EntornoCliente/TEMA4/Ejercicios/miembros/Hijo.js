import { Miembro } from "./Miembro.js";
export class Hijo extends Miembro{
    #moto;
    constructor(nombre = "sin nombre", apellidos = "sin apellidos", moto = "sin moto"){
        super(nombre, apellidos);
        this.#moto = moto;
    }
    get moto(){
        return this.#moto;
    }
    set moto(moto){
        this.#moto = moto;
    }
}