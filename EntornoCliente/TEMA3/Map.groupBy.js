let fruits = [ //tenemos un array de objetos
  { name: "apple", quantity: 250 },
  { name: "banana", quantity: 80 },
  { name: "orange", quantity: 300 },
  { name: "kiwi", quantity: 90 }
];
console.log(fruits instanceof (Array)); 

function suficiente(fruit) { //la fn opera sobre cada elemento del iterable
  if (fruit.quantity >= 200) {
    return 'ok';
  } else {
    return 'nok';
  }
}
let result = Map.groupBy(fruits, suficiente); //Map.groupBy recibe un iterable y una funcion callback
console.log("frutas de las que hay al menos 200 piezas:");//result es un mapa en el q hay 2 keys(ok y nok)
console.log(result.get('ok')); 
//Dentro de 'ok' el valor será un array con los objetos del array fruits que cumplen quantity >= 200
console.log("Frutas de las que hay menos de 200 piezas:");
console.log(result.get('nok'));
//dentro de 'nok' el valor será un array con los objetos del arra fruits que no cumplan quantity >= 200
