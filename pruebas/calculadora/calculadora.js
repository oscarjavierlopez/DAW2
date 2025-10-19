let botones = document.querySelectorAll('button');
let input = document.querySelector('input');
function rellenarInput(valor) {
    if (input.value == 0) {
        if (valor == 'c') {
            input.value = '0';
        } else if (valor == '=') {
            input.value = '0';
        } else {
            input.value = valor;
        }
    } else {
        if (valor == 'c') {
            input.value = '0';
        } else if (valor == '=') {
            input.value = input.value.replace(/x/g, '*').replace(/÷/g, '/');
            if (/[A-Za-z]/.test(input.value)) {
                input.value = "ERROR";
            } else {
                input.value = eval(input.value);
            }
        } else {
            input.value = input.value + valor;
        }
    }
}

//Registramos los listeners
for (boton of botones) {
    let valor = "";
    switch (boton.id) {
        case 'siete':
            valor = '7';
            break;
        case 'ocho':
            valor = '8';
            break;
        case 'nueve':
            valor = '9';
            break;
        case 'division':
            valor = '÷';
            break;
        case 'cuatro':
            valor = '4';
            break;
        case 'cinco':
            valor = '5';
            break;
        case 'seis':
            valor = '6';
            break;
        case 'multiplicacion':
            valor = 'x';
            break;
        case 'uno':
            valor = '1';
            break;
        case 'dos':
            valor = '2';
            break;
        case 'tres':
            valor = '3';
            break;
        case 'resta':
            valor = '-';
            break;
        case 'cero':
            valor = '0';
            break;
        case 'punto':
            valor = '.';
            break;
        case 'c':
            valor = 'c';
            break;
        case 'suma':
            valor = '+';
            break;
        case 'igual':
            valor = '=';
            break;
    }
    boton.addEventListener('click', () => rellenarInput(valor));
}