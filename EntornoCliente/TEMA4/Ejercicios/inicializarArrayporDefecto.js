//relleno con bucle y push
let arrayGrande = [];
for(let i = 0; i <= 50; i++){
    arrayGrande.push(0);
}
console.log('con for y push: '+ arrayGrande);

//relleno con fill
arrayGrande = new Array(50); //antes de usar el metodo fill hay que especifiar la longitud del array
arrayGrande.fill(0, 0, 49);
console.log('Con fill: ' + arrayGrande);
