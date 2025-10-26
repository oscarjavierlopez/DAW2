let botones = document.querySelectorAll('button');
let main = document.querySelector('main');


async function realizarPedido() {
    try {
        const respuesta = await fetch("realizarPedido.php");
        const resultado = await respuesta.json();
        console.log(resultado);
        return resultado;
    } catch (error) {
        console.error("Error al enviar los datos:", error);
    }

}

async function eliminarCarrito(codProducto) {
    try {
        const respuesta = await fetch("eliminarCarrito.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                codProducto: codProducto
            })
        });

        const resultado = await respuesta.json();
        console.log(resultado);
    } catch (error) {
        console.error("Error al enviar los datos:", error);
    }

}

for (let boton of botones) {
    if (boton.id !== "realizarPedido") {
        boton.addEventListener('click', () => {
            eliminarCarrito(boton.id);
            location.reload(); //recargamos la página para que se muestren los cambios
        })
    } else {
        boton.addEventListener('click', async () => {
            resultado = await realizarPedido();
            if (resultado.estado == "pedido realizado con éxito") {
                boton.textContent = '¡Pedido realizado!';
                boton.id = "";
                boton.classList.add('pedidoRealizado');
                setTimeout(function () {
                    location.reload();
                }, 4000);
            }else{
                let p = document.createElement('p');
                p.textContent = resultado.mensaje;
                main.appendChild(p);
            }
        });
    }
}