//paso por valor => datos primitivos
//paso por referencia => Objetos

let a = [1, 2, 3, 4];
console.log(a);
let eliminaUltimo = (a) => {
    a.pop();
}
eliminaUltimo(a);
console.log(a);//me ha eliminado en el array de fuera la última posicion