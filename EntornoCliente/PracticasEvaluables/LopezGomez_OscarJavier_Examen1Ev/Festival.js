export class Festival {
    #nombre;
    #provincia;
    #fecha;
    #pista = new Array(5);
    constructor(nombre, provincia, fecha = "2025-01-03") {
        this.#nombre = nombre;
        this.#provincia = provincia;
        this.#fecha = new Date(fecha);
        for (let i = 0; i < this.#pista.length; i++) {
            this.#pista[i] = new Array(4); //El tablero no va por coord sino por índices de array
            for (let j = 0; j < this.#pista[i].length; j++) {
                this.#pista[i][j] = null;
            }
        }
        console.log(`FESTIVAL ${nombre} (${provincia}) - fecha:${this.#fecha.getDate()}/${this.#fecha.getMonth() + 1}/${this.#fecha.getFullYear()}`)
    }

    get nombre() {
        return this.#nombre;
    }

    get provincia() {
        return this.#provincia;
    }

    get fecha() {
        return `${this.#fecha.getDate()}/${this.#fecha.getMonth() + 1}/${this.#fecha.getFullYear()}`
    }
    get pista() {
        return this.#pista;
    }
}