const span = document.getElementById('texto');
const img = document.getElementById('pelota');
const origen = document.getElementById('origen');
const destino = document.getElementById('destino');

function arrastrar(e) {
    e.dataTransfer.setData('text', e.target.id);
}

function soltar(e) {
    e.preventDefault();
    if (e.target.id === 'destino') {
        if (e.dataTransfer.getData('text') == 'texto') {
            destino.append(span);
        } else {
            destino.append(img);
        }
    } else {
        if (e.dataTransfer.getData('text') == 'texto') {
            origen.append(span);
        } else {
            origen.append(img);
        }
    }
}

function estarEncimaDestino(e) {
    e.preventDefault();
}

span.addEventListener('dragstart', arrastrar);
img.addEventListener('dragstart', arrastrar);
destino.addEventListener('drop', soltar);
destino.addEventListener('dragover', estarEncimaDestino);
origen.addEventListener('drop', soltar);
origen.addEventListener('dragover', estarEncimaDestino);
