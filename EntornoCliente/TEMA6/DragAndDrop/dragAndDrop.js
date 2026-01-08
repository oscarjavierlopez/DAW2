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