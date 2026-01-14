const span = document.getElementById('texto');
const img = document.getElementById('pelota');
const rojo = document.getElementById('origen');
const azul = document.getElementById('destino');
const verde = document.getElementById('verde');


function arrastrar(e) {
    e.dataTransfer.setData('text', e.target.id);
}

function soltar(e) {
    e.preventDefault();
    if (e.target.id === 'destino') {
        if (e.dataTransfer.getData('text') == 'texto') {
            azul.append(span);
            span.draggable = false;
        }
    } else {
        if (e.dataTransfer.getData('text') != 'texto') {
            verde.append(img);
            img.draggable = false;
        }
    }
}

function estarEncimaazul(e) {
    e.preventDefault();
}

span.addEventListener('dragstart', arrastrar);
img.addEventListener('dragstart', arrastrar);
azul.addEventListener('drop', soltar);
azul.addEventListener('dragover', estarEncimaazul);
verde.addEventListener('drop', soltar);
verde.addEventListener('dragover', estarEncimaazul);
