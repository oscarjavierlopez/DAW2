
export class Aula {
    #numero;
    #equipos;
    #puestos;
    constructor(numero, filas, columnas) {
        this.#numero = numero;
        this.#equipos = new Array(filas);
        for (let i = 0; i < this.#equipos.length; i++) {
            this.#equipos[i] = new Array(columnas);
        }
        //inicializacion a null
        for (let i = 0; i < this.#equipos.length; i++) {
            for (let j = 0; j < this.#equipos[i].length; j++) {
                this.#equipos[i][j] = null;
            }
        }
        this.#puestos = filas * columnas;

    }

    get numero() {
        return this.#numero;
    }

    get equipos(){
        return this.#equipos;
    }

    activaEquipo(equipo, fila, columna) {
        for (let i = 0; i < this.#equipos.length; i++) {
            for (let j = 0; j < this.#equipos[i].length; j++) {
                if (fila === i && columna === j) {
                    this.#equipos[i][j] = equipo;
                    return true;
                }
            }
        }
        return false;
    }

    getPosicion(idEquipo) {
        for (let i = 0; i < this.#equipos.length; i++) {
            for (let j = 0; j < this.#equipos[i].length; j++) {
                if (this.#equipos[i][j].toString() === idEquipo) {
                    return [i, j];
                }
            }
        }
        return null;
    }

    getPorcentajeOcupacion() {
        let contador = 0;
        for (let i = 0; i < this.#equipos.length; i++) {
            for (let j = 0; j < this.#equipos[i].length; j++) {
                if (this.#equipos[i][j] !== null) {
                    contador++;
                }
            }
        }

        return(contador * 100 / this.#puestos);
    }
}





