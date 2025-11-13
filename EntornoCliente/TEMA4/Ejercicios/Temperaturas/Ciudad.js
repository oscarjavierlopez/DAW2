const MAX = 40;
const MIN = -20;
export const DIAS = 30;
export class Ciudad {
    #nombre;
    #temperaturas = new Array(DIAS);
    constructor(nombre) {
        this.#nombre = nombre;
        for (let i = 0; i < this.#temperaturas.length; i++) {
            this.#temperaturas[i] = "";
        }
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(nombre) {
        this.#nombre = nombre;
    }

    //meter la temperatura a mano
    modificarTemperatura(dia, temperatura) {
        if ((dia > 0 && dia <= 30) && (temperatura <= MAX && temperatura >= MIN)) {
            this.#temperaturas[dia - 1] = temperatura;
        }
    }

    //generar random
    rellenarTemperaturas() {
        this.#temperaturas = this.#temperaturas.
        map((temperatura) => temperatura = Math.round(Math.random() * (MAX - MIN) + MIN));
    }

    get temperaturas() {
        return this.#temperaturas;
    }
}




