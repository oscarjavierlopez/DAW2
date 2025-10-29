//Object.create() => Establece el prototipo
const person = {name: 'Pepe', age: 23};
const student = Object.create(person);
student.course = 'A';
const customer = Object.create(person);
customer.saldo = 1230;
console.log('Object.Create():');
console.log(person);
console.log(student);
console.log(customer);

//Object.assign() => Copia propiedades pero no establece prototipo
const persona = {name: 'Pepe', age: 23};
const datos = {altura: 160};
const estudiante = Object.assign({}, person, datos);
console.log('Object.assign():');
console.log(persona);
console.log(estudiante);

