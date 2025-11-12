import { Aula } from "./Aula.js";
export class DptoInformatica {
    #aulas;

    constructor() {
        this.#aulas = new Map();
    }

    get aulas(){
        return this.#aulas;
    }

    addAula(aula, grupo) {
        if (this.#aulas.has(aula.numero)) {
            return false;
        }
        this.#aulas.set(aula.numero, aula);
        return true;
    }

    getUbicacion(idEquipo) {
        for ([numAula, aula] of this.#aulas) {
            posicion = aula.getPosicion(idEquipo);
            if (posicion !== null) {
                return `Aula número: ${numAula}, Fila: ${posicion[0]}, Columna: ${posicion[1]}`;
            }
        }

        return "Equipo desconocido";
    }


    getNEquipos() {
        let contador = 0;
        for (let aula of this.#aulas.values()) {
            for (let i = 0; i < aula.equipos.length; i++) {
                for (let j = 0; j < aula.equipos[i].length; j++) {
                    if (this.aula.equipos[i][j] !== null) {
                        contador++;
                    }
                }
            }
        }
        return contador;
    }
}




