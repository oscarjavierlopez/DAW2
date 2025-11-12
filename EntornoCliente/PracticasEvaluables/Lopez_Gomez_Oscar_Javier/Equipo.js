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
        //el mes del id es uno menos de lo que estamos acostumbrados por el calendario
        this.#id = `${this.#personal}-${this.#descripcion.substring(this.#descripcion.length - 3)}-${this.#fecha.getDate()}-${this.#fecha.getMonth()}-${this.#fecha.getFullYear()}`;
    }

    toString() {
        return this.#id;
    }
}




