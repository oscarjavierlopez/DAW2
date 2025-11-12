export class DptoInformatica {
    #aulas;

    constructor() {
        this.#aulas = new Map();
    }

    get aulas() {
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
        for (let [numAula, aula] of this.#aulas) {
            let posicion = aula.getPosicion(idEquipo);
            if (posicion) {
                let [fila, columna] = posicion
                return `Aula número: ${numAula}, Fila: ${fila}, Columna: ${columna}`;
            }
        }

        return "Equipo desconocido";
    }


    getNEquipos() {
        let contador = 0;
        for (let aula of this.#aulas.values()) {
            for (let i = 0; i < aula.equipos.length; i++) {
                for (let j = 0; j < aula.equipos[i].length; j++) {
                    if (aula.equipos[i][j]) {
                        contador++;
                    }
                }
            }
        }
        return contador;
    }
}








