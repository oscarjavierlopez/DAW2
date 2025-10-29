const person = {nombre: 'Paco', edad: 30};
const student = {course: 'A'};
//El prototipo de ambas es Object(null prototype)
console.log(Object.getPrototypeOf(person)); 
console.log(Object.getPrototypeOf(student));

console.log(student.nombre); //undefined => xk busca en student y no encuentra propiedad nonbre y va a Object y tmpco la encuentra
Object.setPrototypeOf(student, person);
console.log(student.nombre);//Paco => va a student y no encuentra nombre entonces va a person y sí lo encunetra

student.nombre = 'Luis';
console.log(student.nombre); //Luis => Se queda con la propiedad nombre del objeto de más bajo nivel(sombreado de propiedades)

console.log('Propiedades de student con for in:'); 
for(const key in student){
    console.log(`${key}: ${student[key]}`); //for in => muestra las propiedades del objeto y las de sus padres
}

console.log('Propiedades de student con for of:'); 
for(const key of Object.keys(student)){
    console.log(`${key}: ${student[key]}`); //for...of => muestra SOLO las propiedades de STUDENT
}

console.log('Propiedades de student con for each:'); 
Object.entries(student).forEach( element => {
    console.log(`${element[0]}: ${element[1]}`);//forEach  => muestra SOLO las propiedades de STUDENT
}
)
