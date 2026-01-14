let victoria = false;
let valores = [];

function comprobar() {
    const cajas = document.querySelectorAll('.caja');
    let iguales = true;
    for (let i = 0; i < cajas.length; i++) {
        if (cajas[i].innerText !== valores[i]) {
            iguales = false;
        }
    }
    if (iguales == true) {
        victoria = true;
    }
    if (victoria === true) {
        alert('Lista Ordenada!!');
    }
}

function iniciarJuego() {
    let contador = 0;
    document.getElementById('contador').innerText = `${contador} segundos`;
    const id = setInterval(function () {
        document.getElementById('contador').innerText = `${contador} segundos`;
        contador++;
        if (victoria === true) {
            clearInterval(id);
        }
    }, 1000);

    for (let i = 0; i < 10; i++) {
        const caja = document.createElement('div');
        do {
            caja.innerText = Math.floor(Math.random() * 100) + 1;
        } while (valores.includes(caja.innerText));
        valores.push(caja.innerText);
        caja.classList.add('caja');
        caja.id = caja.innerText;
        caja.draggable = true;
        caja.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text', e.target.id);
            e.target.classList.add('seleccionada');
        });
        caja.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        caja.addEventListener('drop', (e) => {
            e.preventDefault();
            const origen = document.getElementById(e.dataTransfer.getData('text'));
            origen.classList.remove('seleccionada');
            origen.innerText = e.target.innerText;
            origen.id = e.target.id;
            e.target.innerText = e.dataTransfer.getData('text');
            e.target.id = e.dataTransfer.getData('text');
            comprobar();
        });
        document.getElementById('cajas').append(caja);
    }

    valores.sort((a, b) => a - b);
    console.log(valores);
}

const iniciar = document.querySelector('button');
iniciar.addEventListener('click', iniciarJuego);


