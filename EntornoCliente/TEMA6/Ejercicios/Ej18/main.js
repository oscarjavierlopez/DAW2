let palabra = "";
let intentos = 0;
let abecedario = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let letrasPalabra = [];
const formPalabra = document.getElementById('form-palabra');

const divResultado = document.createElement('div');
const pIntentos = document.createElement('p');
pIntentos.innerText = intentos;
const hr1 = document.createElement('hr');
const hr2 = document.createElement('hr');
const pLetrasErroneas = document.createElement('p');
const pLetrasCorrectas = document.createElement('p');


const divJugador2 = document.createElement('div');
divJugador2.id = 'jugador2';
const h2 = document.createElement('h2');
h2.innerText = 'JUGADOR 2';
const labelLetra = document.createElement('label');
labelLetra.htmlFor = 'letra';
const selectLetra = document.createElement('select');
selectLetra.name = 'letra';
selectLetra.id = 'letra';
abecedario.forEach(letra => {
    const option = document.createElement('option');
    option.value = letra;
    option.innerText = letra;
    selectLetra.append(option);
});
const letraButton = document.createElement('button');
letraButton.innerText = 'Decir letra';
const labelPalabra = document.createElement('label');
labelPalabra.htmlFor = 'palabra';
const inputPalabra = document.createElement('input');
inputPalabra.type = 'text';
inputPalabra.id = 'palabra';
const palabraButton = document.createElement('button');
palabraButton.innerText = 'Resolver';


formPalabra.addEventListener('submit', (e) => {
    e.preventDefault();
    palabra = formPalabra.palabra.value.toUpperCase();
    palabra.split("").forEach((letra) => {
        let letter = {
            valor: letra,
            vista: false
        };
        letrasPalabra.push(letter);
    });
    for (let i = 0; i < letrasPalabra.length; i++) {
        pLetrasCorrectas.innerText += "_ ";
    };

    document.getElementById('jugador1').remove();

    divResultado.append(pIntentos, hr1, pLetrasErroneas, hr2, pLetrasCorrectas);
    divJugador2.append(h2, labelLetra, selectLetra, letraButton, labelPalabra, inputPalabra, palabraButton);
    document.body.append(divResultado, divJugador2);
});

letraButton.addEventListener('click', () => {
    intentos++;
    pIntentos.innerText = intentos;

    if (palabra.indexOf(selectLetra.value) !== -1) {
        for (let i = 0; i < letrasPalabra.length; i++) {
            if (selectLetra.value === letrasPalabra[i].valor) {
                letrasPalabra[i].vista = true;
            }
        }
        pLetrasCorrectas.innerText = "";
        letrasPalabra.forEach((palabra) => {
            if (palabra.vista === true) {
                pLetrasCorrectas.innerText += palabra.valor;
            } else {
                pLetrasCorrectas.innerText += '_';
            }
        });
    } else {
        pLetrasErroneas.innerText += `${selectLetra.value}, `;
    }
});

inputPalabra.addEventListener('input', () => {
    inputPalabra.value = inputPalabra.value.toUpperCase();
});
palabraButton.addEventListener('click', () => {
    if (inputPalabra.value === palabra) {
        alert('Has acertado');
    } else {
        alert('Palabra incorrecta');
    }
})