export class Equipo {
    #id;
    #fecha;
    #descripcion;
    #personal;

    constructor(descripcion, personal, dias = '') {
        let fechaActual = new Date();
        this.#descripcion = descripcion;
        this.#personal = personal;
        this.#fecha = dias ? new Date(fechaActual.setDate(fechaActual.getDate() + dias)) : new Date(2025, 5, 30);
        this.#id = `${this.#personal ? 'P' : 'S'}-${this.#descripcion.substring(this.#descripcion.length - 3)}-${this.#fecha.getDate()}-${this.#fecha.getMonth() + 1}-${this.#fecha.getFullYear()}`;
    }

    get personal(){
        return this.#personal;
    }

    toString() {
        return this.#id;
    }

}






