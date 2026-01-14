const caballo = document.createElement('img');
caballo.src = 'resources/caballo.gif';
caballo.id = 'caballo';
caballo.draggable = true;
const torre = document.createElement('img');
torre.src = 'resources/torre.png';
torre.draggable = true;
torre.id = 'torre';
const alfil = document.createElement('img');
alfil.src = 'resources/alfil.png';
alfil.draggable = true;
alfil.id = 'alfil';
const reina = document.createElement('img');
reina.src = 'resources/reina.jpg';
reina.draggable = true;
reina.id = 'reina';

const table = document.createElement('table');
for (let i = 0; i < 8; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < 8; j++) {
        const td = document.createElement('td');
        if (i == 0 && j == 0) {
            td.append(caballo);
        }
        if (i == 0 && j == 1) {
            td.append(torre);
        }
        if (i == 0 && j == 2) {
            td.append(alfil);
        }
        if (i == 0 && j == 3) {
            td.append(reina);
        }
        tr.append(td);
    }
    table.append(tr);
}
document.body.append(table);

const cells = document.querySelectorAll('td');
cells.forEach((cell) => {
    cell.addEventListener('dragover', (e) => {
        if (e.target.children.length === 0) {
            e.preventDefault();
        }
    });
    cell.addEventListener('drop', (e) => {
        if (e.target.children.length === 0) {
            e.preventDefault();
            e.target.append(document.getElementById(e.dataTransfer.getData('text')));
        }
    });
});

caballo.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text', e.target.id);
});

torre.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text', e.target.id);
});

alfil.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text', e.target.id);
});

reina.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text', e.target.id);
});