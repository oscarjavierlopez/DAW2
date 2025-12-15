const letterInput = document.getElementById('letras');
letterInput.disabled = 'true';
const enteredWord = document.getElementById('palabra');
const newWordButton = document.getElementById('nueva');
const solutionButton = document.getElementById('solucion');
const endButton = document.getElementById('finalizar');
const result = document.getElementById('resultado');
let totalPartidas = 0;
let aciertos = 0;

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

function generateNewWord() {
    correctWord = palabras[Math.floor(Math.random() * palabras.length)];
    letterInput.value = '';
    disorderWord();
    solutionButton.disabled = false;
    newWordButton.disabled = true;
    enteredWord.value = '';
    result.style.display = 'none';
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

function endGame(){
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
    "PROGRAMACION",
    "SERVIDOR",
    "BASE",
    "DATOS",
    "JAVASCRIPT",
    "REACT",
    "PYTHON",
    "FRAMEWORK",
    "APLICACION",
    "DESARROLLO"
];
let correctWord = '';
generateNewWord();
enteredWord.addEventListener('input', enteredWordInput);
newWordButton.addEventListener('click', generateNewWord);
solutionButton.addEventListener('click', viewSolution);
endButton.addEventListener('click', endGame);