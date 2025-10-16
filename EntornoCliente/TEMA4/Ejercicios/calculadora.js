//Invocar un unico metodo llamado calcular pa realizar las 4 operaciones basicas(+,-,*,/)
let calcular = (operacion = "suma", ...valores) => {
    let resultado = 0;
    switch (operacion) {
        case "suma":
            for (valor of valores) {
                resultado += valor;
            }
            break;
        case "resta":
            for (valor of valores) {
                resultado = valor - resultado;
            }
            break;
        case "multiplicacion":
            resultado = 1;
            for (valor of valores) {
                resultado *= valor;
            }
            break;
        case "division":
            resultado = 1;
            for (valor of valores) {
                resultado = valor / resultado;
            }
            break;
    }
    return resultado;
};
console.log(calcular("suma", 1, 1, 1));
console.log(calcular("restar", 1, 1, 1));
console.log(calcular("multiplicacion"), 3, 2);
