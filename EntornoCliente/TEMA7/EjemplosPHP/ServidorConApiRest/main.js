const ul = document.createElement('ul');
const fooInsertar = document.querySelector('#insertarAlbum');
const fooDelete = document.querySelector('#eliminarAlbum');
const fooUpdate = document.querySelector('#actualizarUsuario');

let xhr = new XMLHttpRequest();
xhr.addEventListener('load', (e) => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let response = JSON.parse(xhr.response);

        response.forEach(user => {
            const li = document.createElement('li');
            li.innerHTML = `Usuario: ${user.userId} Título: ${user.title} <strong> ${user.completed === false ? 'No completado' : 'completado'}</strong>`;
            ul.append(li);
        });

        document.body.append(ul);
    }
});
xhr.open("get", "http://localhost:3000/todos");
xhr.send();

fooInsertar.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = {
        userId: e.target.idUsuario.value,
        title: e.target.titulo.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/albums');
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
    xhr.addEventListener('load', (e) => {
        if (xhr.status === 201) {
            console.log('insertado');
        } else {
            alert(`ERROR: ${xhr.status} ${xhr.statusText}`);
        }
    });
});

fooDelete.addEventListener('submit', (e) => {
    e.preventDefault();

    let xhr = new XMLHttpRequest();
    xhr.open('DELETE', `http://localhost:3000/albums/${e.target.idAlbum.value}`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
    xhr.addEventListener('load', (e) => {
        if (xhr.status >= 200) {
            console.log('albúm eliminado');
        } else {
            alert(`ERROR: ${xhr.status} ${xhr.statusText}`);
        }
    });
});

fooUpdate.addEventListener('submit', (e) => {
    e.preventDefault();

    let data = {}

    if (!/^\s*$/.test(e.target.name.value)) {
        data = {...data, name: e.target.name.value}
    }

    if (!/^\s*$/.test(e.target.username.value)) {
        data = {...data, name: e.target.username.value}
    }

    if (!/^\s*$/.test(e.target.email.value)) {
        data = {...data, name: e.target.email.value}
    }

    let xhr = new XMLHttpRequest();
    xhr.open('PATCH', `http://localhost:3000/users/${e.target.idUsuario.value}`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
    xhr.addEventListener('load', (e) => {
        if (xhr.status === 200) {
            console.log('usuario actualizado');
        } else {
            alert(`ERROR: ${xhr.status} ${xhr.statusText}`);
        }
    });
});

