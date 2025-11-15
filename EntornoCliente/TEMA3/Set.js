let letras = new Set(['a', 'a', 'b', 'c', 'd']); //es como un array pero no permite duplicados
console.log(letras); //si se mete un elemento duplicado toma solo uno
letras.add('e');
letras.add('a');//si el elemento ya está no lo añade

console.log("El set tiene una longitud de " + letras.size);

letras.delete('e');

if(letras.has('e')){
    console.log("La letra e está en el set");
}else{
    console.log("La letra e no está en el set");
}

for(let letra of letras.values()){
    console.log(letra);
}

letras.clear();