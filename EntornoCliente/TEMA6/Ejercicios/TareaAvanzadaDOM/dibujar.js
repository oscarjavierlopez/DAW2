//tablero
let activeDrawWithMouse = false;
function activeDraw(e) {
    activeDrawWithMouse = activeDrawWithMouse ? false : true;
    palletTds[palletTds.length - 1].innerText = activeDrawWithMouse ? 'PINCEL ACTIVADO...' : 'PINCEL DESACTIVADO...';
}
function draw(e) {
    if (activeDrawWithMouse) {
        e.target.classList.add(document.querySelector('.seleccionado').className
            .split(' ')
            .filter((_, index) => index === 0)
            .join(''));
    }
}
const zonadibujo = document.getElementById('zonadibujo');
const tablero = document.createElement('table');
tablero.classList.add('tablerodibujo');
for (let i = 0; i < 30; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 30; j++) {
        const cell = document.createElement('td');
        cell.addEventListener('click', activeDraw);
        cell.style.border = '2px solid black';
        row.append(cell);
    }
    tablero.append(row);
}
tablero.addEventListener('mousemove', draw)
zonadibujo.append(tablero);

//escoger color
function changeSelectedColor(e) {
    if (!e.target.classList.contains('seleccionado')) {
        palletTds.forEach((td) => {
            if (td.classList.contains('seleccionado')) {
                td.classList.remove('seleccionado');
            }
        });
        e.target.classList.add('seleccionado');
    }
}
const palletTds = document.getElementById('paleta').querySelectorAll('td');
palletTds.forEach((td, index) => {
    if (index < palletTds.length - 1) {
        td.addEventListener('click', changeSelectedColor);
    }
});






