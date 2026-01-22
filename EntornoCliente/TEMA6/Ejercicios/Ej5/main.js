let options = Array.from(document.querySelectorAll('option'));
const consultarNumero = document.getElementById('consultar-numero');
const insertarFrancesa = document.getElementById('insertar-francesa');
const eliminarId2 = document.getElementById('eliminar-id2');
const consultarId2 = document.getElementById('consultar-id2');
const form = document.querySelector('form');

consultarNumero.addEventListener('click', () => {
    for (let i = 0; i < options.length; i++) {
        if (form.nacionalidad.value === options[i].value) {
            alert(`Nacionalidad número ${i}`);
        }
    }
});

insertarFrancesa.addEventListener('click', () => {
    const option = document.createElement('option');
    option.value = 'Francesa';
    option.innerText = 'Francesa';
    options.splice(4, 0, option);
    form.nacionalidad.innerHTML = "";
    options.forEach((option) => {
        form.nacionalidad.append(option);
    });
});

eliminarId2.addEventListener('click', () => {
    options.splice(2, 1);
    form.nacionalidad.innerHTML = "";
    options.forEach((option) => {
        form.nacionalidad.append(option);
    });
});

consultarId2.addEventListener('click', () => {
    let options = Array.from(document.querySelectorAll('option'));
    let optionId2 = options.find((_, index) => index === 2);
    alert(`La nacionalidad en la posicion 2 es ${optionId2.value}`);
})