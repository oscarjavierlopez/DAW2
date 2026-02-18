import { Bailarin } from "./bailarin.js";

let bailarines = [];
if (localStorage.getItem('bailarines') && localStorage.getItem('bailarines') !== '[null]') {
    bailarines = JSON.parse(localStorage.getItem('bailarines'));
}

function colocarBailarines() {
    document.getElementById('salsaCards').innerHTML = '';
    document.getElementById('bachataCards').innerHTML = '';
    document.getElementById('rock&rollCards').innerHTML = '';
    document.getElementById('swingCards').innerHTML = '';

    bailarines.forEach((bailarin, index) => {
        if (bailarin) {
            const card = document.createElement('div');
            card.id = index;
            card.draggable = true;
            card.classList.add('card');

            let fechaAlta = new Date(bailarin.fechaAlta);
            card.innerHTML = `<p class="sexo">${bailarin.sexo === 'masculino' ? '🕺' : '💃'}</p>
            <div>
            <p class="nombre">${bailarin.nombre}</p>
        <p class="dni">${bailarin.dni}</p>
        <p class="fecha">${fechaAlta.getDate()}/${fechaAlta.getMonth() + 1}/${fechaAlta.getFullYear()}</p>
        </div>`;

            switch (bailarin.estiloBaile) {
                case 'salsa':
                    card.classList.add('salsa');
                    document.getElementById('salsaCards').append(card);
                    break;
                case 'bachata':
                    card.classList.add('bachata');
                    document.getElementById('bachataCards').append(card);
                    break;
                case 'rock&roll':
                    card.classList.add('rockRoll');
                    document.getElementById('rock&rollCards').append(card);
                    break;
                case 'swing':
                    card.classList.add('swing');
                    document.getElementById('swingCards').append(card);
                    break;
            }

            card.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text', card.id);
            });
        }
    });
}

colocarBailarines();

document.getElementById('baja').addEventListener('dragover', (e) => {
    e.preventDefault();
});

document.getElementById('baja').addEventListener('drop', (e) => {
    e.preventDefault();
    const bailarin = bailarines[e.dataTransfer.getData('text')];
    let fechaActual = new Date();
    let fechaAlta = new Date(bailarin.fechaAlta);

    let mesesInscritos = Math.floor((fechaActual - fechaAlta) / (1000 * 60 * 60 * 24 * 30));


    if (document.querySelector('.error')) {
        document.querySelector('.error').remove();
    }
    if (document.querySelector('.exito')) {
        document.querySelector('.exito').remove();
    }
    const pExito = document.createElement('p');
    pExito.classList.add('exito');
    pExito.innerText = `${bailarin.nombre} dado de baja. Total gastado ${mesesInscritos === 0 ? 50 : mesesInscritos * 50}.00€`;
    document.getElementById('bailarinesInscritos').append(pExito);

    bailarines.splice(e.dataTransfer.getData('text'), 1);
    localStorage.setItem('bailarines', JSON.stringify(bailarines));

    colocarBailarines();
})

document.querySelectorAll('.estilo').forEach((caja) => {
    caja.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    caja.addEventListener('drop', (e) => {
        e.preventDefault();
        const card = document.getElementById(e.dataTransfer.getData('text'));
        const bailarin = bailarines[e.dataTransfer.getData('text')];

        card.classList.remove('salsa');
        card.classList.remove('bachata');
        card.classList.remove('rockRoll');
        card.classList.remove('swing');


        switch (caja.id) {
            case 'salsa':
                card.classList.add('salsa');
                bailarin.estiloBaile = 'salsa';
                break;
            case 'bachata':
                card.classList.add('bachata');
                bailarin.estiloBaile = 'bachata';
                break;
            case 'rock&roll':
                card.classList.add('rockRoll');
                bailarin.estiloBaile = 'rock&roll';
                break;
            case 'swing':
                card.classList.add('swing');
                bailarin.estiloBaile = 'swing';
                break;
        }

        caja.append(card);
        localStorage.setItem('bailarines', JSON.stringify(bailarines));
    });
});




const fooInscripcion = document.querySelector('form');
fooInscripcion.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const bailarinInsertado = Object.fromEntries(formData);

    if (document.querySelector('.error')) {
        document.querySelector('.error').remove();
    }

    if (document.querySelector('.exito')) {
        document.querySelector('.exito').remove();
    }

    if (!bailarinInsertado.nombre) {
        const pError = document.createElement('p');
        pError.classList.add('error');
        pError.innerText = 'Todos los campos son obligatorios';
        document.getElementById('bailarinesInscritos').append(pError);
    } else if (!bailarinInsertado.DNI) {
        const pError = document.createElement('p');
        pError.classList.add('error');
        pError.innerText = 'Todos los campos son obligatorios';
        document.getElementById('bailarinesInscritos').append(pError);
    } else if (!/^\d{8}[A-Z]$/.test(bailarinInsertado.DNI)) {
        const pError = document.createElement('p');
        pError.classList.add('error');
        pError.innerText = 'DNI incorrecto';
        document.getElementById('bailarinesInscritos').append(pError);
    } else if (!bailarinInsertado.fechaAlta) {
        const pError = document.createElement('p');
        pError.classList.add('error');
        pError.innerText = 'Todos los campos son obligatorios';
        document.getElementById('bailarinesInscritos').append(pError);
    } else {
        const bailarin = new Bailarin(bailarinInsertado.nombre, bailarinInsertado.DNI, bailarinInsertado.fechaAlta, bailarinInsertado.estilo, bailarinInsertado.sexo);
        bailarines.push(bailarin);
        localStorage.setItem('bailarines', JSON.stringify(bailarines));

        const pExito = document.createElement('p');
        pExito.classList.add('exito');
        pExito.innerText = 'Bailarín añadido correctamente';
        document.getElementById('bailarinesInscritos').append(pExito);

        colocarBailarines();
    }
});

