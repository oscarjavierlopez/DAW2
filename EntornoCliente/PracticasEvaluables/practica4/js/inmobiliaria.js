export class Inmobiliaria {
    constructor() {
        this.edificios = [];
    }

    addEdificio(edificio) {
        this.edificios.push(edificio);
    }

    getEdificio(calle, numero) {
        for (let i = 0; i < this.edificios.length; i++) {
            if (this.edificios[i].calle === calle && this.edificios[i].numero === numero) {
                return this.edificios[i];
            }
        }
    }
}




