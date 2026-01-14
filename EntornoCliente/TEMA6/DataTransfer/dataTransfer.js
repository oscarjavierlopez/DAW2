const caja1 = document.querySelector('.caja1');
const caja2 = document.querySelector('.caja2');
//El objeto dataTransfer permite pasar información durante los eventos drag and drop

caja1.addEventListener('dragstart', (e) => { 
    e.dataTransfer.setData('text', 'String enviado!!');
    //setData() guarda datos durante el arrastre
});

caja2.addEventListener('drop', (e) =>{
    e.preventDefault();
    console.log(e.dataTransfer.getData('text'));
    //getData() recupera los datos en el drop
    //Aquí se haría el append del dataTransfer
});

caja2.addEventListener('dragover', (e) => {
   e.preventDefault(); //NO OLVIDARSE
   //El comportamiento por defecto es bloquear q se pueda soltar en una superficie
});

//En los ejercicios 24, 25, 26 y 27 hay ejemplos