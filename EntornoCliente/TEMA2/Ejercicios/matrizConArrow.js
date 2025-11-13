let equipos = new Array(4);
equipos.fill(["", "", "", ""])
/*equipos[0] = new Array(4);
equipos[1] = new Array(4);
equipos[2] = new Array(4);
equipos[3] = new Array(4);
equipos[0].fill("");
equipos[1].fill("");
equipos[2].fill("");
equipos[3].fill("");*/
const equipo = {
    id: 1,
    nombre: 'Portátil',
    personal: true
};
equipos[0][0] = "equipo";
console.table(equipos);
equipos.forEach((fila) => console.log(fila.find((valor) => valor === "equipo")));
