//Forma 1 => Manual
let array = [100, 23, 23, 23, 23, 67, 45];
let outputArray = [];
for (let numero of array) {
    if (!outputArray.includes(numero)) {
        outputArray.push(numero);
    }
}
console.log(outputArray);


//Forma 2 => metodo Array.from() y objeto set
outputArray = [];
let setArray = new Set(array);
outputArray = Array.from(setArray);
console.log(outputArray);
