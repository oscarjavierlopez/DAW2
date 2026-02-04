const formActualizar = document.querySelector('form');

function getUsers() {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('load', (e) => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let response = JSON.parse(xhr.response);

            response.forEach(user => {
                const fila = document.createElement('tr');

                const colID = document.createElement('td');
                colID.innerText = user.id;
                const colNombre = document.createElement('td');
                colNombre.innerText = user.name;
                const colNombreUsuario = document.createElement('td');
                colNombreUsuario.innerText = user.username;
                const colEmail = document.createElement('td');
                colEmail.innerText = user.email;

                fila.append(colID, colNombre, colNombreUsuario, colEmail);
                fila.id = `${user.id}`;
                fila.addEventListener('click', function (e) {
                    fetch(`http://localhost:3000/users/${this.id}`)
                        .then(response => response.json())
                        .then(data => {
                            document.getElementById('id').value = data.id;
                            document.getElementById('nombre').value = data.name;
                            document.getElementById('nombreUsuario').value = data.username;
                            document.getElementById('email').value = data.email;
                            document.getElementById('ciudad').value = data.address.city;
                        })
                        .catch(err => console.log(err));
                });

                document.querySelector('tbody').append(fila);
            });
        }
    });
    xhr.open("get", "http://localhost:3000/users");
    xhr.send();
}
getUsers();

document.getElementById('actualizar').addEventListener('click', (e) => {
    e.preventDefault();

    let userToUpdate = {
        name: formActualizar.nombre.value,
        username: formActualizar.nombreUsuario.value,
        email: formActualizar.email.value
    };

    fetch(`http://localhost:3000/users/${formActualizar.idUsuario.value}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userToUpdate)
    })
        .then(response => response.json())
        .then(data => {
            document.querySelector('tbody').innerHTML = '';
            getUsers();
        })
        .catch(err => console.log(err));
});

document.getElementById('insertar').addEventListener('click', (e) => {
    e.preventDefault();

    let userToUpdate = {
        id: formActualizar.idUsuario.value,
        name: formActualizar.nombre.value,
        username: formActualizar.nombreUsuario.value,
        email: formActualizar.email.value,
        address: {
            city: formActualizar.ciudad.value
        }
    };

    async function insertar() {
        try {
            let response = await fetch(`http://localhost:3000/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userToUpdate)
            })

            let data = await response.json();

            document.querySelector('tbody').innerHTML = '';
            getUsers();
        } catch (err) {
            console.log(err);
        }
    }
    insertar();
});

document.getElementById('eliminar').addEventListener('click', (e) => {
    e.preventDefault();

    async function eliminar() {
        try {
            fetch(`http://localhost:3000/users/${formActualizar.idUsuario.value}`, {
                method: 'DELETE'
            })
                .then(response => {
                    document.querySelector('tbody').innerHTML = '';
                    getUsers();
                })
        } catch (err) {
            console.log(err);
        }
    }
    eliminar();
});






