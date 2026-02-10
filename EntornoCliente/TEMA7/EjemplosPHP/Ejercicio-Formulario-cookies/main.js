const MAX_INTENTOS = 5;

document.querySelector('input[type="submit"]').addEventListener('click', () => {
    //comprobacion de que existe la cookie
    let existsIntentos = false;
    let intentosActuales = 1;
    let cookieArray = document.cookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        const cookiePar = cookieArray[i].split('=');
        if (cookiePar[0] == "intentos") {
            existsIntentos = true;
            intentosActuales = parseInt(cookiePar[1]);
        }
    }

    if (existsIntentos) {
        document.cookie = `intentos=${encodeURIComponent(parseInt(intentosActuales + 1))}`;
    } else {
        document.cookie = `intentos=${encodeURIComponent(intentosActuales)}`;
    }

    //comprobacion de MAX_INTENTOS
    cookieArray = document.cookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        const cookiePar = cookieArray[i].split('=');
        if (cookiePar[0] == "intentos") {
            if (cookiePar[1] < MAX_INTENTOS) {
                document.getElementById('intentos').innerText = `Llevas ${cookiePar[1]} intentos`;
                document.getElementById('intentos').classList.remove('hidden');
                document.getElementById('intentos').classList.add('intentos-correctos');
            } else {
                document.getElementById('intentos').innerText = `Llevas ${cookiePar[1]} intentos`;
                document.getElementById('intentos').classList.remove('intentos-correctos');
                document.getElementById('intentos').classList.add('intentos-incorrectos');
                document.querySelector('input[type="submit"]').disabled = true;
            }
        }
    }
});