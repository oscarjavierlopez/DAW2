const pedidos = [
    { id: 101, cliente: "Ana", estado: "pendiente" },
    { id: 102, cliente: "Luis", estado: "enviado" },
    { id: 103, cliente: "Marta", estado: "entregado" },
    { id: 104, cliente: "Carlos", estado: "pendiente" },
    { id: 105, cliente: "Lucía", estado: "enviado" }
];


function estado(pedido) {
    if (pedido.estado === "pendiente") {
        return "pendiente";
    } else if (pedido.estado === "enviado") {
        return "enviado";
    } else {
        return "entregado";
    }
}
let pedidosAgrupados = Map.groupBy(pedidos, estado);

function verCantidad(tipo) {
    let contador = 0;
    for (let pedido of pedidosAgrupados.get(tipo)) {
        contador++;
    }
    console.log("Hay " + contador + " pedidos " + tipo + "s");
}
verCantidad("pendiente");
verCantidad("entregado");
verCantidad("enviado");
