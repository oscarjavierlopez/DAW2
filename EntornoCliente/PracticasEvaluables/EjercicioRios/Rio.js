export class Rio {
    #nombre;
    #cuenca;
    #caudalMedio;
    #poblaciones = [];
    constructor(v_nombre, v_cuenca) {
        this.#nombre = v_nombre;
        this.#cuenca = v_cuenca;
        console.log(`nuevo rio ${this.#nombre}, de la cuenca: ${this.#cuenca}`);
    }

    static ordenar_por_caudal(rioA, rioB){
        let caudalA = rioA.caudal !== undefined ? rioA.caudal : 0;
        let caudalB = rioB.caudal !== undefined ? rioB.caudal : 0;
        return caudalA - caudalB;
    }

    get caudal(){
        return this.#caudalMedio;
    }

    agregarPoblacion(v_poblacion) {
        this.#poblaciones.push(v_poblacion);
        console.log(`El río ${this.#nombre} pasa por ${v_poblacion}`);
    }

    eliminarPoblacion(v_poblacion) {
        for (let i = 0; i < this.#poblaciones.length; i++) {
            if (v_poblacion === this.#poblaciones[i]) {
                this.#poblaciones.splice(i, 1);
            }
        }
        console.log(`El río ${this.#nombre} no pasa por ${v_poblacion}`);
    }

    modificarCaudalMedio(v_caudal){
        this.#caudalMedio = v_caudal;
    }

    imprimeNombre() {
        return this.#nombre;
    }

    imprimeCuenca() {
        return this.#cuenca;
    }

    imprimeCaudal() {
        return this.#caudalMedio !== undefined ? this.#caudalMedio : 'no consta';
    }
    imprimePoblaciones() {
        return this.#poblaciones.length !== 0 ? this.#poblaciones : 'no consta';
    }

    imprimeRio() {
        return `Nombre: ${this.imprimeNombre()},
        Cuenca: ${this.imprimeCuenca()},
        Caudal medio: ${this.imprimeCaudal()},
        poblaciones: ${this.imprimePoblaciones()}`;
    }

}