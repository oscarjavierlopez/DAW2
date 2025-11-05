import { Turismo } from "./Turismo.js";
import { Camion } from "./Camion.js";
import { Vehiculo } from "./Vehiculo.js";

function capturarReloj() {
    let horaActual = new Date();
    return `${horaActual.getHours()}:${horaActual.getMinutes()}:${horaActual.getSeconds()}`;
}

function generarVehiculos(vehiculos) {
    for (let i = 0; i < Math.floor(Math.random() * 4) + 1; i++) {
        let colores = ['azul', 'rojo', 'verde'];
        vehiculos.push(new Turismo(Math.floor(Math.random() * 7) + 1, colores[Math.floor(Math.random() * colores.length)]));
        vehiculos.push(new Camion(Math.floor(Math.random() * 7) + 1, Math.floor(Math.random() * 10000)));
    }
}

function mostrarVehiculos(vehiculos) {
    let table = document.querySelector('table');
    for (let vehiculo of vehiculos) {
        if (vehiculo instanceof Camion) {
            let tr = document.createElement('tr');
            tr.innerHTML = `<td>Hora: ${capturarReloj()}</td>
            <td>Tipo: Camión</td>
            <td>Pasajeros: ${vehiculo.pasajeros}</td>
            <td>Tara: ${vehiculo.tara}</td>`;
            table.appendChild(tr);
        } else {
            let tr = document.createElement('tr');
            tr.innerHTML = `
            <td>Hora: ${capturarReloj()}</td>
            <td>Tipo: Turismo</td>
            <td>Pasajeros: ${vehiculo.pasajeros}</td>
            <td class = ${vehiculo.color}>color: ${vehiculo.color}</td>`;
            table.appendChild(tr);
        }
    }


}

let vehiculos = [];
let c = 0;
const id = setInterval(function () {
    generarVehiculos(vehiculos);
    mostrarVehiculos(vehiculos); //la fn capturar reloj se invoca desde el mostrar
    vehiculos = [];
    if (c++ === 10) {
        clearInterval(id);
    }
}, 2000);