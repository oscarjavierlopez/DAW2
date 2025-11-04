class Persona {
    constructor(nombre){
        this.nombre = nombre;
    }

    static comparar(personaA, personaB){
        return personaA.nombre.localeCompare(personaB.nombre); //compara caracter por caracter según el alfabeto
        //si las letras de personaA van antes en el alfabeto q las de personaB => devuelve -1
        //Si las dos palabras son iguales => devuelve 0
        //si las letras de personaB van antes en el alfabeto q las de personaA => devuelve 1
    }

    static crearPersona(nombre){
        return new this(nombre); //return new this() devuelve una nueva instancia de la clase
        //es como hacer new Persona(nombre)
    }
}

const a = [new Persona('Pepe'), new Persona('Paco')];
console.log(Persona.comparar(a[0], a[1]));
a.sort(Persona.comparar);
console.log(a.map(e => e.nombre).join(','));
console.log(Persona.comparar(a[0], a[1]));
const persona = Persona.crearPersona('Luis'); //se crea una nueva instancia de Persona cn el nombre Luis
console.log(persona.nombre);