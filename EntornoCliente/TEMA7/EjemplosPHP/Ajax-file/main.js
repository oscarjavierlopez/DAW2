document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    let xhr = new XMLHttpRequest();
    xhr.addEventListener('load', (e) => {
        if (xhr.status === 200) {
            let response = JSON.parse(xhr.response);
            console.log(response);

            let img = document.createElement('img');
            img.src = `http://localhost:8080/Ajax-file/${response.name}`;
            document.body.append(img);
        }
    });
    xhr.open("POST", "http://localhost:8080/Ajax-file/fichero.php");
    let data = new FormData();
    data.append('archivo', e.target.archivo.files[0]);
    xhr.send(data);
});