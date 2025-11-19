export class Pareja {
    #nombre;
    #nivel;
    #bailarin1;
    #bailarin2;
    #posicion;
    #orientacion;
    constructor(bailarin1, bailarin2, nivel, posicion, orientacion) {
        this.#nombre = bailarin1.nombre
            .split("")
            .filter((caracter, indice) => indice % 2 !== 0)
            .join("")
            .toUpperCase() +
            bailarin2.nombre
                .split("")
                .filter((caracter, indice) => indice % 2 !== 0)
                .join("")
                .toUpperCase();
        this.#nivel = nivel;
        this.#bailarin1 = bailarin1;
        this.#bailarin2 = bailarin2;
        this.#posicion = posicion;
        this.#orientacion = orientacion;
    }

    get nombre() {
        return this.#nombre;
    }

    get nivel() {
        return this.#nivel;
    }

    get bailarin1() {
        return this.#bailarin1;
    }

    get bailarin2() {
        return this.#bailarin2;
    }

    get posicion() {
        return this.#posicion;
    }

    desplazar(desplazamiento, pista) {
        let x0 = this.#posicion.x;
        let y0 = this.#posicion.y;
        let acciones = desplazamiento.split("");
        for (let accion of acciones) {
            switch (accion) {
                case "A":
                    switch (this.#orientacion) {
                        case "norte":
                            this.#posicion.x--;
                            break;
                        case "este":
                            this.#posicion.y++;
                            break;
                        case "sur":
                            this.#posicion.x++;
                            break;
                        case "oeste":
                            this.#posicion.y--;
                            break;
                    }
                    break;
                case "I":
                    switch (this.#orientacion) {
                        case "norte":
                            this.#orientacion = "oeste";
                            break;
                        case "oeste":
                            this.#orientacion = "sur";
                            break;
                        case "sur":
                            this.#orientacion = "este";
                            break;
                        case "este":
                            this.#orientacion = "norte";
                            break;
                    }
                    break;
                case "D":
                    switch (this.#orientacion) {
                        case "norte":
                            this.#orientacion = "este";
                            break;
                        case "este":
                            this.#orientacion = "sur";
                            break;
                        case "sur":
                            this.#orientacion = "oeste";
                            break;
                        case "oeste":
                            this.#orientacion = "norte";
                            break;
                    }
                    break;
            }
        }
        if (!pista[this.#posicion.x][this.#posicion.y]) {
            pista[this.#posicion.x][this.#posicion.y] = this.#nombre;
        } else {
            this.#posicion.x = x0;
            this.#posicion.y = y0;
            pista[this.#posicion.x][this.#posicion.y] = this.#nombre;
        }
    }
}