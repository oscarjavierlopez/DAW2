const formNacionalidades = document.getElementById('form-nacionalidades');
const formEliminar = document.getElementById('form-eliminar');

fetch('ej6.json')
    .then(response => response.json())
    .then(data => data.forEach(nacionalidad => {
        const option = document.createElement('option');
        option.value = nacionalidad.valor;
        option.innerText = nacionalidad.valor;
        formNacionalidades.nacionalidad.append(option);
    }));

function addNacionalidad(e) {
    e.preventDefault();

    let nacionalidades = Array.from(document.querySelectorAll('option'));

    let exists = false;
    for (let i = 0; i < nacionalidades.length; i++) {
        if (nacionalidades[i].value === formNacionalidades.nueva.value) {
            exists = true;
        }
    }

    if (!exists) {
        formNacionalidades.nacionalidad.innerHTML += `<option value="${formNacionalidades.nueva.value}">${formNacionalidades.nueva.value}</option>`;
    }
}

function deleteNacionalidad(e) {
    e.preventDefault();

    let nacionalidades = Array.from(document.querySelectorAll('option'));
    if (formEliminar.nacionalidadEliminar.value === 'ultima') {
        nacionalidades.pop();
    } else {
        for (let i = 0; i < nacionalidades.length; i++) {
            if (nacionalidades[i].value === formNacionalidades.nacionalidad.value) {
                nacionalidades.splice(i, 1);
            }
        }
    }

    formNacionalidades.nacionalidad.innerHTML = "";
    nacionalidades.forEach(nacionalidad => {
        const option = document.createElement('option');
        option.value = nacionalidad.value;
        option.innerText = nacionalidad.value;
        formNacionalidades.nacionalidad.append(option);
    });
}

formNacionalidades.addEventListener('submit', addNacionalidad);
formEliminar.addEventListener('submit', deleteNacionalidad);
