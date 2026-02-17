
//Petición GET
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

//Petición POST
fetch(`${BASE_URL}/eventos`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        nombre: datos.nombre,
        fecha: datos.fecha,
        descripcion: datos.descripcion,
        imagen: datos.imagen,
        id_municipio: parseInt(datos.municipio)
    })
})
    .then(response => response.json())
    .then(data => closeModal())
    .catch(err => console.log(err));

//Petición PATCH
fetch(`${BASE_URL}/eventos/${id}`, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        nombre: datos.nombre,
        fecha: datos.fecha,
        descripcion: datos.descripcion,
        imagen: datos.imagen,
        id_municipio: parseInt(datos.municipio)
    })
})
    .then(response => response.json())
    .then(data => closeModal())
    .catch(err => console.log(err));

//Petición DELETE
fetch(`${BASE_URL}/eventos/${id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => setviewSwal(false)) //puede haber otro .then() si hay body en la response
    .catch(error => console.error('Error:', error));