let ciudades = new Map();
const MAX = 40;
const MIN = -20;
const DIAS = 30;
const divTable = document.getElementById('tabla-medidas');

const errores = document.getElementById('errores');
errores.style.display = 'none';
document.getElementById('temperatura-media').style.display = 'none';


function handleInputCiudad(e) {
    e.target.value = e.target.value.toUpperCase();
}

function guardarCiudad() {
    errores.style.display = 'none';
    if (/^\s+$/.test(document.getElementById('ciudad').value)) {
        errores.innerText = 'Ingrese una ciudad';
        errores.style.display = 'block';
    } else if (ciudades.has(document.getElementById('ciudad').value)) {
        errores.innerText = 'La ciudad ya existe';
        errores.style.display = 'block';
    } else if (!/^(-20,|-1\d,|-[1-9],|0,|[0-9],|[1-3]\d,|40,){29}(-20|-1\d|-[1-9]|0|[0-9]|[1-3]\d|40)$/
        .test(document.getElementById('medidas').value)) {
        errores.innerText = 'El formato de medidas no es correcto';
        errores.style.display = 'block';
    } else {
        ciudades.set(document.getElementById('ciudad').value, document.getElementById('medidas').value);
        document.getElementById('ciudad').value = '';
        document.getElementById('medidas').value = '';
        document.getElementById('medidas').readOnly = false;
        document.getElementById('medidas_manual').checked = true;
        toHTML();
    }
}

function borrarCiudad() {
    errores.style.display = 'none';
    if (/^\s+$/.test(document.getElementById('ciudad').value)) {
        errores.style.display = 'block';
        errores.innerText = 'Ingrese una ciudad';
    } else {
        if (!ciudades.has(document.getElementById('ciudad').value)) {
            errores.style.display = 'block';
            errores.innerText = 'No se pudo borrar la ciudad';
        } else {
            ciudades.delete(document.getElementById('ciudad').value);
            toHTML();
        }
    }
}

function handleChangeAleatorio() {
    let temperaturas = [];
    for (let i = 0; i < DIAS; i++) {
        temperaturas.push(Math.round(Math.random() * (MAX - MIN) + MIN));
    }
    document.getElementById('medidas').value = temperaturas.join(',');
    document.getElementById('medidas').readOnly = true;
}

function handleChangeManual() {
    document.getElementById('medidas').value = '';
    document.getElementById('medidas').readOnly = false;
}

function toHTML() {
    divTable.innerHTML = "";
    if (ciudades.size > 0) {
        let table = document.createElement('table');
        let filaInicial = document.createElement('tr');
        let col1 = document.createElement('th');
        col1.innerHTML = "ciudad";
        filaInicial.appendChild(col1);
        for (let i = 1; i <= DIAS; i++) {
            let col = document.createElement('th');
            col.innerHTML = i;
            filaInicial.appendChild(col);
        }
        let colMedia = document.createElement('th');
        colMedia.innerHTML = 'Media';
        colMedia.className = "col_media";
        filaInicial.appendChild(colMedia);
        table.appendChild(filaInicial);
        for (let [ciudad, temperaturas] of ciudades) {
            let medidas = temperaturas.split(',').map((temp) => temp = parseInt(temp));
            let fila = document.createElement('tr');
            let columna1 = document.createElement('td');
            columna1.innerHTML = ciudad;
            columna1.className = "grey";
            fila.appendChild(columna1);
            for (let medida of medidas) {
                let columna = document.createElement('td');
                columna.innerHTML = medida;
                fila.appendChild(columna);
            }
            let media = document.createElement('td');
            media.className = 'col_media';
            media.innerHTML = medidas.reduce((total, valor) => total + valor) / medidas.length;
            fila.appendChild(media);
            table.appendChild(fila);
        }
        divTable.append(table);
        document.getElementById('temperatura-media').style.display = 'block';
        let sumaMedias = 0;
        const medias = document.querySelectorAll('.col_media');
        console.log(medias);
        for (let i = 1; i < medias.length; i++) {
            sumaMedias += parseFloat(medias[i].innerText);
        }
        document.getElementById('temperatura-media').innerText = 'Temperatura media: ' + sumaMedias / (medias.length - 1);
    } else {
        document.getElementById('temperatura-media').style.display = 'none';
    }
}

document.getElementById('guardar').addEventListener('click', guardarCiudad);
document.getElementById('borrar').addEventListener('click', borrarCiudad);
document.getElementById('ciudad').addEventListener('input', handleInputCiudad);
document.getElementById('medidas_aleatorio').addEventListener('click', handleChangeAleatorio);
document.getElementById('medidas_manual').addEventListener('click', handleChangeManual);


