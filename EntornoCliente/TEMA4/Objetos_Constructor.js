function Persona(nombre = 'Paco', edad = 0){ //el nombre de las funciones constructoras debe comenzar por mayuscula
    this.nombre = nombre;
    this.edad = edad;
}

const persona1 = new Persona('Pepe', 50);
console.log(persona1);
const persona2 = new Persona(); //inicializa los valores por defecto
console.log(persona2);


//En el constructor sólo se añaden atributos, los métodos es mejor declararlos en el prototipo:
Persona.prototype.visualizarNombre = function(){ //con .prototype accedo al prototipo de persona y le inserto el metodo visualizarNombre
    console.log(this.nombre);
};
persona1.visualizarNombre();