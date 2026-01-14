const caja1 = document.querySelector('.caja1');
const caja2 = document.querySelector('.caja2');


caja1.addEventListener('drop', () => { //se produce cuando se suelta el elemento arrastable
    if(!caja1.childElementCount){
        caja1.append(caja2.children[0]);
    }
});

caja2.addEventListener('drop', () =>{
    if(!caja2.childElementCount){
        caja2.append(caja1.children[0]);
    }
});

caja1.addEventListener('dragover', function(e) { //Se produce cuando el elemento arrastable está sobre la zona de soltar
    e.preventDefault();
});
caja2.addEventListener('dragover', function(e) {
    e.preventDefault();
});

caja1.addEventListener('dragstart', () => {
    console.log('dragstart'); //Se dispara cuando comienzas a arrastrar
})

caja1.addEventListener('drag', () => {
    console.log('drag');//se dispara repetidamente mientras el usuario sigue arrastrando el elemento
})
caja1.addEventListener('dragend', () => {
    console.log('dragend');//se dispara cuando sueltas
})

caja2.addEventListener('dragenter', () => {
    console.log('dragenter');//se dispara cuando el elemento arrastrable entra en el área de soltado
})

caja2.addEventListener('dragover', () => {
    console.log('dragover'); //Se dispara continuamente mientras el elemento arrastrado se mantiene sobre esa área.
});

caja2.addEventListener('dragleave', () => {
    console.log('dragleave');//se dispara cuando el elemento arrastrado sale del área de soltado
})