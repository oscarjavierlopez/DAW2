const paises = ['spain', 'germany', 'portugal', 'usa'];

paises.forEach((pais) => {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('load', (e) => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let response = JSON.parse(xhr.response);
            console.log(response);


            const card = document.createElement('article');
            card.innerHTML = ` <h1>${response[0].name.common}</h1>
        <img src=${response[0].flags.png} alt="gatito">
                    `;
            document.querySelector('.banderas').append(card);
        }
    });
    xhr.open("get", `https://restcountries.com/v3.1/name/${pais}`);
    xhr.send();
});
