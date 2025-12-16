const letterInput = document.getElementById('letras');
letterInput.disabled = 'true';
const enteredWord = document.getElementById('palabra');
const newWordButton = document.getElementById('nueva');
const solutionButton = document.getElementById('solucion');
const endButton = document.getElementById('finalizar');
const result = document.getElementById('resultado');
const dificultad = document.createElement('span');
dificultad.style.border = '2px solid black';
dificultad.style.padding = '5px';
dificultad.innerHTML = 'dificultad';
for (let i = 0; i < 3; i++) {
    const label = document.createElement('label');
    const button = document.createElement('input');
    button.type = 'radio';
    button.name = 'dificultad';
    if (i === 0) {
        label.innerText = '4 letras';
        button.id = '4';
        label.htmlFor = '4';
        button.checked = true;
    } else if (i === 1) {
        label.innerText = '6 letras';
        button.id = '6';
        label.htmlFor = '6';
    } else {
        label.innerText = '8 letras';
        button.id = '8';
        label.htmlFor = '8';
    }
    dificultad.append(button);
    dificultad.append(label);
}
document.querySelector('h3').after(dificultad);
let correctWord = '';
let totalPartidas = 0;
let aciertos = 0;

function generateNewWord() {
    if (document.getElementById('4').checked === true) {
        correctWord = palabras[0][Math.floor(Math.random() * palabras[0].length)];
    } else if (document.getElementById('6').checked === true) {
        correctWord = palabras[1][Math.floor(Math.random() * palabras[1].length)];
    } else if (document.getElementById(8).checked === true) {
        correctWord = palabras[2][Math.floor(Math.random() * palabras[2].length)];
    }
    letterInput.value = '';
    disorderWord();
    solutionButton.disabled = false;
    newWordButton.disabled = true;
    enteredWord.value = '';
    result.style.display = 'none';
}

function disorderWord() {
    const lettersOfCorrectWord = [];
    correctWord.split('').forEach((character) => {
        const letter = {
            value: character,
            include: false
        };
        lettersOfCorrectWord.push(letter);
    });
    for (let i = 0; i < lettersOfCorrectWord.length; i++) {
        let letter = '';
        do {
            letter = lettersOfCorrectWord[Math.floor(Math.random() * lettersOfCorrectWord.length)];
            if (letter.include === false) {
                letter.include = true; //letter tiene asignada la misma posicion de memoria que lo que haya en
                break;                 //lettersOfCorrectWord[random]. Por eso al actualizarse el include de letter
                // se actualiza tmb el de lettersOfCorrectWord[random].
            }
        } while (letter.include === true);
        letterInput.value += letter.value;
    }
}

function enteredWordInput(e) {
    e.target.value = e.target.value.toUpperCase();
    result.innerText = '';
    if (e.target.value === correctWord) {
        result.style.display = 'block';
        result.classList.remove('info');
        result.classList.add('intentos');
        result.innerText = 'Has acertado la palabra ' + correctWord;
        newWordButton.disabled = false;
        solutionButton.disabled = true;
        aciertos++;
        totalPartidas++;
    }
}

function viewSolution() {
    result.style.display = 'block';
    result.classList.remove('error');
    result.classList.remove('intentos');
    result.classList.add('info');
    result.innerText = 'La palabra correcta es ' + correctWord;
    newWordButton.disabled = false;
    solutionButton.disabled = true;
    totalPartidas++;
}

function endGame() {
    result.style.display = 'block';
    result.classList.remove('info');
    result.classList.remove('intentos');
    result.classList.add('error');
    result.innerText = `Porcentaje de aciertos: ${aciertos * 100 / totalPartidas}%`;
    endButton.disabled = true;
    solutionButton.disabled = true;
    newWordButton.disabled = true;
}
const palabras = [
    ["LUNA", "ROCA", "NUBE", "FARO", "CIMA", "RAMA", "PESO", "VIDA", "ALAS", "PURO"],
    ["CAMINO", "VENTANA", "RUIDOS", "BRILLO", "SUEÑO", "ARENAS", "MONTES", "RIELES", "CIELOS", "BORDES"],
    ["HORIZONTE", "MADEREROS", "CAMPANAS", "ESPEJADO", "LUMINOSA", "COSTURAS", "NAVEGADO", "SILENCIO",
        "TERRAZAS", "MOTIVOSO"]
];

generateNewWord();
enteredWord.addEventListener('input', enteredWordInput);
newWordButton.addEventListener('click', generateNewWord);
solutionButton.addEventListener('click', viewSolution);
endButton.addEventListener('click', endGame);