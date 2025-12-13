const letterInput = document.getElementById('letras');
letterInput.disabled = 'true';
const enteredWord = document.getElementById('palabra');

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

function enteredWordChange(e) {
    const result = document.getElementById('resultado');
    result.classList.remove('error');
    result.classList.remove('intentos');
    result.innerText = '';
    if (e.target.value !== correctWord) {
        if (e.target.value !== correctWord) {
            result.classList.add('error');
            result.innerText = 'PALABRA INCORRECTA';
        }
    } else {
        result.classList.add('intentos');
        result.innerText = 'PALABRA CORRECTA';
    }
}


const palabras = [
    "montaña",
    "río",
    "codigo",
    "teclado",
    "nube",
    "ventana",
    "bosque",
    "pantalla",
    "sol",
    "camino"
];
export const correctWord = palabras[Math.floor(Math.random() * palabras.length)];
disorderWord();
enteredWord.addEventListener('change', enteredWordChange);


