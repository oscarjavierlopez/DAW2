export class Ciudad {
    #nombre;
    #temperaturas = new Array(30);
    constructor(nombre) {
        this.#nombre = nombre;
        for(let i = 0; i < this.#temperaturas.length; i++){
            this.#temperaturas[i] = "";
        }
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(nombre) {
        this.#nombre = nombre;
    }

    modificarTemperatura(dia, temperatura){
        this.#temperaturas[dia - 1] = temperatura;
    }

    rellenarTemperaturas(){
        this.#temperaturas = this.#temperaturas.map((temperatura) => temperatura = Math.round(Math.random() * 60 - 20));
    }

    get temperaturas(){
        return this.#temperaturas;
    }
}




