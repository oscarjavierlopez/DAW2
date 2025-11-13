import { Ciudad } from "./Ciudad.js";
import { DIAS } from "./Ciudad.js";
function toHTML() {
    let table = document.querySelector('table');

    let filaInicial = document.createElement('tr');
    filaInicial.className = "grey";
    let col1 = document.createElement('td');
    col1.innerHTML = "ciudad";
    filaInicial.appendChild(col1);
    for (let i = 1; i <= DIAS; i++) {
        let col = document.createElement('td');
        col.innerHTML = i;
        filaInicial.appendChild(col);
    }
    let colMedia = document.createElement('td');
    colMedia.innerHTML = 'Media';
    colMedia.className = "media";
    filaInicial.appendChild(colMedia);
    table.appendChild(filaInicial);

    for (let ciudad of ciudades) {
        let fila = document.createElement('tr');
        let columna1 = document.createElement('td');
        columna1.innerHTML = ciudad.nombre;
        columna1.className = "grey";
        fila.appendChild(columna1);
        for (let temperatura of ciudad.temperaturas) {
            let columna = document.createElement('td');
            columna.innerHTML = temperatura;
            fila.appendChild(columna);
        }
        let media = document.createElement('td');
        media.className = 'media';
        media.innerHTML = ciudad.temperaturas.reduce((total, valor) => total + valor) / ciudad.temperaturas.length;
        fila.appendChild(media);
        table.appendChild(fila);
    }

}

let ciudades = [];
let oviedo = new Ciudad("Oviedo");
oviedo.rellenarTemperaturas();
oviedo.modificarTemperatura(5, 30);
let santander = new Ciudad("Santander");
santander.rellenarTemperaturas();
ciudades.push(oviedo);
ciudades.push(santander);

toHTML();




