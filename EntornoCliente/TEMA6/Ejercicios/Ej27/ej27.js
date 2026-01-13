const caballo = document.getElementById('caballo');
const torre = document.getElementById('torre');
const alfil = document.getElementById('alfil');
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