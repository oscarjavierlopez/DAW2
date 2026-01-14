const span = document.getElementById('texto');
const img = document.getElementById('pelota');
const origen = document.getElementById('origen');
const destino = document.getElementById('destino');

function arrastrar(e) {
    e.dataTransfer.setData('text', e.target.id);
}

function soltar(e) {
    e.preventDefault();
    if (e.dataTransfer.getData('text') == 'texto') {
        destino.append(span);
        span.draggable = false;
    } else {
        destino.append(img);
        img.draggable = false;
    }
}

function estarEncimaDestino(e){
    e.preventDefault();
}

span.addEventListener('dragstart', arrastrar);
img.addEventListener('dragstart', arrastrar);
destino.addEventListener('drop', soltar);
destino.addEventListener('dragover', estarEncimaDestino)