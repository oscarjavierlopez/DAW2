export class Miembro {
    #nombre;
    #apellidos;
    constructor(nombre = "sin nombre", apellidos = "sin apellidos") {
        this.#nombre = nombre;
        this.#apellidos = apellidos;
    }
    get nombre() {
        return this.#nombre;
    }

    set nombre(nombre) {
        this.#nombre = nombre;
    }

    get apellidos() {
        return this.#apellidos;
    }

    set apellidos(apellidos) {
        this.#apellidos = apellidos;
    }

    comer() {
        console.log("estoy comiendo");
    }

    cenar() {
        console.log("estoy cenando");
    }
}


