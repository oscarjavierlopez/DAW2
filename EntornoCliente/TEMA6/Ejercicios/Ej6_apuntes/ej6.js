const foo = document.querySelector('form');

const nombre = document.createElement('input');
nombre.type = 'text';
nombre.name = 'nombre';
nombre.id = 'nombre';
nombre.maxLength = '20';
nombre.required = true;
const labelNombre = document.createElement('label');
labelNombre.htmlFor = 'nombre';
labelNombre.innerText = 'Nombre:';

const nif = document.createElement('input');
nif.type = 'text';
nif.name = 'nif';
nif.id = 'nif';
nif.pattern = '^[0-9]{7,8}[A-Z]$';
nif.required = true
const labelNif = document.createElement('label');
labelNif.htmlFor = 'nif';
labelNif.innerText = 'Nif:';

const edad = document.createElement('input');
edad.type = 'number';
edad.id = 'edad';
edad.max = '65';
edad.min = '18';
edad.step = '1';
edad.required = true;
const labelEdad = document.createElement('label');
labelEdad.htmlFor = 'edad';
labelEdad.innerText = 'Edad:';

const fechaAlta = document.createElement('input');
fechaAlta.type = 'date';
fechaAlta.id = 'fechaAlta';
fechaAlta.required = true;
const labelFechaAlta = document.createElement('label');
labelFechaAlta.htmlFor = 'fechaAlta';
labelFechaAlta.innerText = 'Fecha de alta:';

const email = document.createElement('input');
email.type = 'email';
email.id = 'email';
email.pattern = '^.{3,}@.{3,}\.es$|^.{3,}@.{3,}\.pt$|^.{3,}@.{3,}\.fr$';
email.required = true;
const labelEmail = document.createElement('label');
labelEmail.htmlFor = 'email';
labelEmail.innerText = 'Email:';

const submit = document.createElement('input');
submit.type = 'submit';
submit.value = 'Enviar';

const provincias = document.createElement('select');
provincias.id = 'provincias'
const valladolid = document.createElement('option');
valladolid.value = 'Valladolid';
valladolid.innerText =  'Valladolid';
const segovia = document.createElement('option');
segovia.value = 'Segovia';
segovia.innerHTML = 'Segovia';
const salamanca = document.createElement('option');
salamanca.value = 'Salamanca';
salamanca.innerHTML = 'Salamanca';
provincias.append(valladolid, segovia, salamanca);
const labelProvincias = document.createElement('label');
labelProvincias.htmlFor = 'provincias';
labelProvincias.innerText = 'Provincias';


foo.append(labelNombre, nombre, labelNif, nif, labelEdad, edad,
    labelFechaAlta, fechaAlta, labelEmail, email,labelProvincias, provincias, submit);

foo.addEventListener('submit', (e) => {
    e.preventDefault();

    if (/^[0-9]{7,8}[A-Z]$/.test(foo.nif.value)) {
        alert('El NIF cumple el criterio');
    } else {
        alert('El NIF no cumple el criterio');
    }

    const alta = new Date(foo.fechaAlta.value);
    if (alta.getDay() === 1 || alta.getDay() === 2 || alta.getDay() === 3 ||
        alta.getDay() === 4 || alta.getDay() === 5) {
        alert('fecha de alta válida');
    } else {
        alert('La fecha de alta no cumple el criterio');
    }

});


