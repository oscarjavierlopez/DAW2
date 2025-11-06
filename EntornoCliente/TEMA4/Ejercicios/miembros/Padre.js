import { Miembro } from "./Miembro.js";
export class Padre extends Miembro{
    #coche;
    constructor(nombre = "sin nombre", apellidos = "sin apellidos", coche){
        super(nombre, apellidos);
        this.#coche = coche;
    }
    get coche(){
        return this.#coche;
    }
    set coche(coche){
        this.#coche = coche;
    }

    comer(){
        //super.comer();  => puedo llamar al metodos de la clase padre con super.metodo()
        console.log("estoy comiendo huevos");
    }
    
    cenar(){
        console.log("estoy cenando huevos");
    }
}