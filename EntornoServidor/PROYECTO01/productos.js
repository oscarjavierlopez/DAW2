let botones = document.querySelectorAll('button');
let inputs = document.querySelectorAll('input[type="number"]');


async function añadirCarrito(codProducto, unidades) {
    if (unidades != "") { //si las unidades son distintas de cadena vacía accedemos a la API
        try {
            const respuesta = await fetch("añadirCarrito.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    codProducto: codProducto,
                    unidades: unidades
                })
            });

            const resultado = await respuesta.json();
            console.log(resultado);
        } catch (error) {
            console.error("Error al enviar los datos:", error);
        }
    }
}

for (let boton of botones) {
    boton.addEventListener('click', () => {
        añadirCarrito(boton.id, Array.from(inputs)
            .find((input) => input.id == boton.id)
            .value);
    })
}
