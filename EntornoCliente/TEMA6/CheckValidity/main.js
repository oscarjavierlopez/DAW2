const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(form['nombre'].checkValidity());//Muestra true si la validacion del HTML se cumple
    console.log(form['pass'].checkValidity());
    console.log(form['nif'].checkValidity());
});

form['nombre'].addEventListener('input', () => {
    if (!form['nombre'].checkValidity()) {
        form['nombre'].setCustomValidity('El nombre es obligatorio y debe tener 5-20 caracteres');/*Permite mostrar 
        un mensaje distinto al que muestra el navegador cuando no se cumple la validacion del html*/
    } else {
        form['nombre'].setCustomValidity('');
    }
    form['nombre'].reportValidity();
});

form['pass'].addEventListener('input', () => {
    if (form['pass'].checkValidity() == false) {
        form['pass'].setCustomValidity('La contraseña es obligatoria y debe tener mínimo 10 caracteres');
    } else {
        form['pass'].setCustomValidity('');
    }
    form['pass'].reportValidity();
});

form['nif'].addEventListener('input', () => {
    if (form['nif'].checkValidity() == false) {
        form['nif'].setCustomValidity('El NIF es obligatorio y debe tener 7 números y una letra');
    } else {
        form['nif'].setCustomValidity('');
    }
    form['nif'].reportValidity();
})

