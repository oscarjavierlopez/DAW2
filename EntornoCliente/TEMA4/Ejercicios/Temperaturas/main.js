import { Ciudad } from "./Ciudad.js";
function toHTML() {
    let table = document.querySelector('table');
    let filaInicial = document.createElement('tr');
    filaInicial.className = "grey";
    filaInicial.innerHTML = `<td>Ciudad</td>
<td>1</td>
<td>2</td>
<td>3</td>
<td>4</td>
<td>5</td>
<td>6</td>
<td>7</td>
<td>8</td>
<td>9</td>
<td>10</td>
<td>11</td>
<td>12</td>
<td>13</td>
<td>14</td>
<td>15</td>
<td>16</td>
<td>17</td>
<td>18</td>
<td>19</td>
<td>20</td>
<td>21</td>
<td>22</td>
<td>23</td>
<td>24</td>
<td>25</td>
<td>26</td>
<td>27</td>
<td>28</td>
<td>29</td>
<td>30</td>
<td class="media">media</td>`;
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
let santander = new Ciudad("Santander");
santander.rellenarTemperaturas();
ciudades.push(oviedo);
ciudades.push(santander);

toHTML();




