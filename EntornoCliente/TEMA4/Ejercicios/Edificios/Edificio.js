export class Edificio {
    #calle;
    #numero;
    #cp;
    #pisos;
    constructor(calle, numero, cp, numPlantas, numPuertas) {
        this.#calle = calle;
        this.#numero = numero;
        this.#cp = cp;
        this.#pisos = new Array(numPlantas);
        for(let i = 0; i < this.#pisos.length; i++){
            this.#pisos[i] = new Array(numPuertas);
        }
        
        console.log(`construido nuevo edificio en calle: ${calle} Nº: ${numero} CP: ${cp}`);
    }

    get calle() {
        return this.#calle;
    }
    set calle(calle) {
        this.#calle = calle;
    }

    get numero(){
        return this.#numero;
    }
    
    set numero(numero) {
        this.#numero = numero;
    }

    get cp(){
        return this.#cp;
    }
    
    set cp(cp) {
        this.#cp = cp;
    }

    get pisos(){
        return this.#pisos;
    }

    setPropietario(propietario, planta, puerta){
        this.#pisos[planta][puerta] = propietario;
        console.log(`${propietario} es ahora el propietario de la puerta ${puerta} de la planta ${planta}`);
    }

}


