let u1 = {
    nombre: 'Pepe',
    ver: function(){ //una funcion se puede declarar como propiedad
        console.log(this.nombre);
    },
    setNombre(nombre){ //una funcion se puede declarar directamente
        this.nombre = nombre;
    }
};

u1.setNombre('Paco');
u1.ver();


/*Para no tener que escribir los mismos metodos en varios objetos se pueden introducir en el padre y 
crear varios hijos basados en el prototipo. De esta manera las funciones sólo se guardan en memoria en el prototipo*/
const persona = {
    visualizar: function(){
        console.log(this);
    }
};
const estudiante = Object.create(persona);
estudiante.nombre = 'Pedro';
estudiante.visualizar();
const trabajador = Object.create(persona);
trabajador.activo = true;
trabajador.visualizar();
