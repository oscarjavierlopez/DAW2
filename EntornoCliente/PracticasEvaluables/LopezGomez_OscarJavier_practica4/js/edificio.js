export class Edificio {
    plantas;
    constructor(calle, numero, cp) {
        this.calle = calle;
        this.numero = numero;
        this.cp = cp;
    }

    agregaPlantas(numPlantas) {
        this.plantas = new Array(numPlantas);
    }

    agregarPuertasPorPlanta(planta, numPuertas){
        this.plantas[planta] = new Array(numPuertas);
        for (let i = 0; i < this.plantas[planta].length; i++) {
            this.plantas[planta][i] = null;
        }

    }

    agregarPopietario(propietario, planta, puerta){
        this.plantas[planta][puerta] = propietario;
    }

    eliminarPropietario(planta, puerta){
        this.plantas[planta][puerta] = null;
    }

    getNumeroPlantas(){
        return this.plantas.length;
    }

    getNumeroPuertas(planta){
        return this.plantas[planta].length;
    }

    getPropietario(planta, puerta){
        return this.plantas[planta][puerta];
    }
}



