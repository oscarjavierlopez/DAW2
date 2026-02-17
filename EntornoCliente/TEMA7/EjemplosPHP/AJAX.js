//Petición GET
const parametros = new URLSearchParams('nombre=Pepe&edad=10');
const url = `http://localhost:8080/Ajax-POST/pruebaPost.php`;
let xhr = new XMLHttpRequest();
xhr.open('POST', url);
xhr.send(parametros);
xhr.addEventListener('load', (e) => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        document.querySelector('#datos').innerHTML = xhr.responseText;
    } else {
        alert(`ERROR: ${xhr.status} ${xhr.statusText}`);
    }
});

//Petición POST
const datos = {
    nombre: 'Pepe',
    apellido: 'Suárez'
}

let xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/formdata/pruebaPost.php');
xhr.setRequestHeader('Content-type', 'application/json');
xhr.send(JSON.stringify(datos));
xhr.addEventListener('load', (e) => {
    if (xhr.status === 201) {
        console.log('elemento insertado');
    } else {
        alert(`ERROR: ${xhr.status} ${xhr.statusText}`);
    }
});

//Petición delete
let id = 0;
let xhr = new XMLHttpRequest();
xhr.open('DELETE', `http://localhost:8080/formdata/pruebaPost.php/${id}`);
xhr.setRequestHeader('Content-type', 'application/json');
xhr.send();
xhr.addEventListener('load', (e) => {
    if (xhr.status === 204) { //o 200
        console.log('elemento borrado');
    } else {
        alert(`ERROR: ${xhr.status} ${xhr.statusText}`);
    }
});

//petición PATCH
let xhr = new XMLHttpRequest();
xhr.open('PATCH', `http://localhost:8080/formdata/pruebaPost.php/${id}`);
xhr.setRequestHeader('Content-type', 'application/json');
xhr.send(JSON.stringify(datos));
xhr.addEventListener('load', (e) => {
    if (xhr.status === 200) {
        console.log('elemento modificado');
    } else {
        alert(`ERROR: ${xhr.status} ${xhr.statusText}`);
    }
});
