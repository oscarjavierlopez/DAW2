let empleado = {
    nombre: "Ana",
    edad: 20,
    "Trabajador temporal": true, //una propiedad1 puede tener espacios pero hay q escaparlo cn comillas(no recomendable)
    domicilio: {
        calle: "Mayor, 2",
        poblacion: "Valladolid", //aunq sea el ultimo elemento puede acabar con una ',' y no da error
    }
}

empleado.sexo = "femenino"; //puedo añadir nuevas propiedad1es dinamicamente
console.log(empleado.sexo);
console.log(empleado.nombre);
empleado["Trabajador temporal"] = false;
console.log(empleado["Trabajador temporal"]); //Se puede acceder a propiedad1es con corchetes
console.log(empleado.domicilio.poblacion);
delete empleado.edad;
console.log(empleado.edad); //undefined xk la hemos eliminado



//tambien podemos definir propiedad1es cuyo nombre sea el valor de una variable o constante
const propiedad1 = 'edad';
const valor = 20;
const propiedad2 = 'trabajador';
const persona = {
    nombre: 'Pepe',
    [propiedad1]: valor, //si quiero q el nombre d la propiedad sea el valor de la cte debo incluirlo entre []
    [propiedad2]: true
}
console.log(persona.edad);

//construir un objeto a partir de pares clave valor
const propiedades = ['nombre', 'edad', 'trabajador'];
const valores = ['Luis', 43, true];
const persona2 = {};
for (const i in propiedades) {
    persona2[propiedades[i]] = valores[i];
}
console.log(persona2);

//Podemos recorrer props de objetos con for...in
const cliente = {
    nombre: 'Pepe',
    saldo: 1200,
    credito: true
}
for(const key in cliente){ //las propiedades de los objetos se comportan como claves y puedo iterarlas con un for...in
    console.log(`Propiedad: ${key} valor: ${cliente[key]}`);
}

console.log("nombre" in cliente);//true xk hay prop nombre
console.log("apellido" in cliente); //false xk no hay prop apellido

//podemos clonar objetos de distintas formas
const clienteCopia = {...cliente}; //de esta manera apuntan a direcciones de memoria distintas(copia superficial)
cliente.nombre = 'Jacinto'; //si cambio el nombre a cliente NO se cambia en clienteCopia
console.log(clienteCopia);

const clienteCopia2 = {apellido: 'García', ...cliente}; //tmb puedo añadir nuevas propiedades
console.log(clienteCopia2);

const clienteCopia3 = Object.assign(cliente); //con asign la copia y el cliente apuntan a la misma direcc de memoria
cliente.nombre = 'Rosa'; //si cambio el nombre en cliente se cambia en clienteCopia3
console.log(clienteCopia3);

const clienteCopia4 = cliente; //cliente4 y cliente apuntan a la misma direcc de memoria
cliente.saldo = 1800;
console.log(cliente === clienteCopia4); //con esto comparamos si apuntan a la misma direcc de memoria
console.log(clienteCopia4);

const clienteCopia5 = {};
Object.assign(clienteCopia5, cliente); //crea 2 direcciones de memoria distintas
cliente.credito = false; //si modifico cliente no se modifica clienteCopia5
console.log(clienteCopia5);








