import { Edificio } from "./edificio.js";
import { Inmobiliaria } from "./inmobiliaria.js";

let miInmobiliaria = new Inmobiliaria();
let miEdificio = new Edificio("General Yague", 2, "39001");
let miEdificio2 = new Edificio("Primero de Mayo", 1, "39011");
let miEdificio3 = new Edificio("Paseo de Pereda", 5, "39002");

let inquilinosImportar = [
  {
    piso: 3,
    puerta: 1,
    nombre: "Gustavo Ramírez",
    genero: "hombre",
    miembros: 5,
  },
  {
    piso: 2,
    puerta: 1,
    nombre: "María Pérez",
    genero: "mujer",
    miembros: 1,
  },
  {
    piso: 2,
    puerta: 2,
    nombre: "Manuel González",
    genero: "hombre",
    miembros: 1,
  },
  {
    piso: 2,
    puerta: 3,
    nombre: "Pepa Fernández",
    genero: "mujer",
    miembros: 3,
  },
  {
    piso: 1,
    puerta: 1,
    nombre: "Asterio Gómez",
    genero: "hombre",
    miembros: 2,
  },
];

let inquilinosImportar2 = [
  {
    piso: 2,
    puerta: 1,
    nombre: "Eleuterio Gómez",
    genero: "hombre",
    miembros: 5,
  }
]

let inquilinosImportar3 = [];

let TIPO_FAMILIA = {
  HOMBRE: "hombre",
  MUJER: "mujer",
  PAREJA: "pareja",
  FAMILIA: "familia",
};

//=== Instanciar VARIABLES GLOBALES ============================================
window.addEventListener("load", cargaPagina);

function cargaPagina() {
  creaEdificio();
  cargaInquilinos();
  pintarEdificio();
}

function cargaInquilinos() {
  inquilinosImportar.forEach((inquilino) => {
    miEdificio.agregarPopietario(
      inquilino,
      inquilino.piso - 1,
      inquilino.puerta - 1,
    );
  });

  inquilinosImportar2.forEach((inquilino) => {
    miEdificio2.agregarPopietario(
      inquilino,
      inquilino.piso - 1,
      inquilino.puerta - 1,
    );
  });

  inquilinosImportar3.forEach((inquilino) => {
    miEdificio3.agregarPopietario(
      inquilino,
      inquilino.piso - 1,
      inquilino.puerta - 1);
  })
}

function creaEdificio() {
  miEdificio.agregaPlantas(3);
  miEdificio.agregarPuertasPorPlanta(0, 2);
  miEdificio.agregarPuertasPorPlanta(1, 4);
  miEdificio.agregarPuertasPorPlanta(2, 1);
  miInmobiliaria.addEdificio(miEdificio);

  miEdificio2.agregaPlantas(2);
  miEdificio2.agregarPuertasPorPlanta(0, 1);
  miEdificio2.agregarPuertasPorPlanta(1, 1);
  miInmobiliaria.addEdificio(miEdificio2);

  miEdificio3.agregaPlantas(4);
  miEdificio3.agregarPuertasPorPlanta(0, 2);
  miEdificio3.agregarPuertasPorPlanta(1, 2);
  miEdificio3.agregarPuertasPorPlanta(2, 1);
  miEdificio3.agregarPuertasPorPlanta(3, 1);
  miInmobiliaria.addEdificio(miEdificio3);
}

function pintarEdificio() {
  const divInmobiliaria = document.createElement('div');
  divInmobiliaria.classList.add('inmobiliaria');

  miInmobiliaria.edificios.forEach((edificio, indexEdificio) => {
    const divEdificio = document.createElement("div");
    divEdificio.classList.add("edificio");

    const h1Edificio = document.createElement("h1");
    h1Edificio.innerText = `C/ ${edificio.calle} nº ${edificio.numero}. ${edificio.cp}`;

    const divPisos = document.createElement("div");
    divPisos.classList.add("pisos");

    for (let i = edificio.plantas.length - 1; i >= 0; i--) {
      const divPlanta = document.createElement("div");
      divPlanta.classList.add("planta");

      for (let j = 0; j < edificio.plantas[i].length; j++) {
        const divPropietario = document.createElement("div");
        divPropietario.classList.add("propietario");
        if (edificio.plantas[i].length === 1) {
          divPropietario.classList.add("col-4");
        } else if (edificio.plantas[i].length === 2) {
          divPropietario.classList.add("col-2");
        } else {
          divPropietario.classList.add("col-1");
        }

        if (edificio.plantas[i][j] !== null) {
          const pPropietario = document.createElement("p");
          pPropietario.innerText = edificio.plantas[i][j].nombre;

          const imgPropietario = document.createElement("img");
          if (edificio.plantas[i][j].miembros === 1) {
            if (edificio.plantas[i][j].genero === "mujer") {
              imgPropietario.src = "img/mujer.jpg";
            } else {
              imgPropietario.src = "img/hombre.jpg";
            }
          } else if (edificio.plantas[i][j].miembros === 2) {
            imgPropietario.src = "img/pareja.jpg";
          } else if (edificio.plantas[i][j].miembros === 3) {
            imgPropietario.src = "img/familia-1.jpg";
          } else {
            imgPropietario.src = "img/familia-2.jpg";
          }

          const divBotones = document.createElement("div");
          divBotones.classList.add("botones");
          const ButtonModificar = document.createElement("button");
          ButtonModificar.innerText = "Modificar";
          ButtonModificar.classList.add("modificar");
          ButtonModificar.id = `${i}_${j}_${indexEdificio}`;
          const ButtonBorrar = document.createElement("button");
          ButtonBorrar.innerText = "Borrar";
          ButtonBorrar.classList.add("borrar");
          ButtonBorrar.id = `${i}${j}${indexEdificio}`;
          divBotones.append(ButtonModificar, ButtonBorrar);

          divPropietario.append(pPropietario, imgPropietario, divBotones);
        } else {
          const pPropietario = document.createElement("p");
          pPropietario.innerText = "Vacío";

          const imgPropietario = document.createElement("img");
          imgPropietario.src = "img/vacio.jpg";

          const divBotones = document.createElement("div");
          divBotones.classList.add("botones");
          const Buttonaniadir = document.createElement("button");
          Buttonaniadir.innerText = "Añadir";
          Buttonaniadir.classList.add("aniadir");
          Buttonaniadir.id = `${i}-${j}-${indexEdificio}`;
          divBotones.append(Buttonaniadir);

          divPropietario.append(pPropietario, imgPropietario, divBotones);
        }
        divPlanta.append(divPropietario);
      }
      divPisos.append(divPlanta);
    }

    divEdificio.append(h1Edificio, divPisos);
    divInmobiliaria.append(divEdificio);
    document.body.append(divInmobiliaria);
  });

  cargaManejadores();
}

function cargaManejadores() {
  document.querySelectorAll(".borrar").forEach((borrarButton, index) => {
    if (index > 0) {
      borrarButton.addEventListener("click", () => {
        let edificio = miInmobiliaria.edificios[borrarButton.id.charAt(2)]
        edificio.eliminarPropietario(
          borrarButton.id.charAt(0),
          borrarButton.id.charAt(1),
        );
        document.querySelector(".inmobiliaria").remove();
        pintarEdificio();
      });
    }
  });

  document.querySelectorAll(".aniadir").forEach((addButton, index) => {
    if (index > 0) {
      addButton.addEventListener("click", (e) => {
        document.getElementById("formulario-modificar").disabled = true;
        document.getElementById("planta").value =
          parseInt(e.target.id.charAt(0)) + 1;
        document.getElementById("puerta").value =
          parseInt(e.target.id.charAt(2)) + 1;
        document.getElementById("formulario").style.display = "block";
        document.getElementById('idEdificio').value = addButton.id.charAt(4);
      });
    }
  });

  document.querySelectorAll(".modificar").forEach((modifyButton, index) => {
    if (index > 0) {
      modifyButton.addEventListener("click", (e) => {
        let edificio = miInmobiliaria.edificios[modifyButton.id.charAt(4)];

        document.getElementById("formulario-aniadir").disabled = true;
        document.getElementById("planta").value =
          parseInt(e.target.id.charAt(0)) + 1;
        document.getElementById("puerta").value =
          parseInt(e.target.id.charAt(2)) + 1;
        document.getElementById("nombre").value =
          edificio.plantas[e.target.id.charAt(0)][
            e.target.id.charAt(2)
          ].nombre.split(" ")[0];
        document.getElementById("apellidos").value =
          edificio.plantas[e.target.id.charAt(0)][
            e.target.id.charAt(2)
          ].nombre.split(" ")[1];
        switch (
        edificio.plantas[e.target.id.charAt(0)][e.target.id.charAt(2)]
          .miembros
        ) {
          case 1:
            document.getElementById("unidad-familiar").value = "soltero";
            break;
          case 2:
            document.getElementById("unidad-familiar").value = "pareja";
            break;
          case 3:
            document.getElementById("unidad-familiar").value = "familia-1";
            break;
          case 4:
            document.getElementById("unidad-familiar").value = "familia-2";
            break;
          default:
            document.getElementById("unidad-familiar").value = "familia-mas";
            break;
        }
        switch (
        edificio.plantas[e.target.id.charAt(0)][e.target.id.charAt(2)]
          .genero
        ) {
          case "hombre":
            document.getElementById("formulario").genero.value = "hombre";
            break;
          case "mujer":
            document.getElementById("formulario").genero.value = "mujer";
            break;
        }

        document.getElementById('idEdificio').value = modifyButton.id.charAt(4);
        document.getElementById("formulario").style.display = "block";
      });
    }
  });

}


document
  .getElementById("formulario-borrar")
  .addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("nombre").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("unidad-familiar").value = "none";
    document.getElementById("formulario").genero.value = "hombre";
    document.getElementById("planta").value = "";
    document.getElementById("puerta").value = "";
    document.getElementById("formulario-aniadir").disabled = false;
    document.getElementById("formulario-modificar").disabled = false;
    document.getElementById("formulario").style.display = "none";
  });

document
  .getElementById("formulario-modificar")
  .addEventListener("click", (e) => {
    e.preventDefault();

    let edificio = miInmobiliaria.edificios[parseInt(document.getElementById('idEdificio').value)];

    let miembros = 0;
    switch (document.getElementById("unidad-familiar").value) {
      case "soltero":
        miembros = 1;
        break;
      case "pareja":
        miembros = 2;
        break;
      case "familia-1":
        miembros = 3;
        break;
      case "familia-2":
        miembros = 4;
        break;
      case "familia-mas":
        miembros = 4;
        break;
    }

    let propietario = {
      piso: document.getElementById("planta").value,
      puerta: document.getElementById("puerta").value,
      nombre: `${document.getElementById("nombre").value} ${document.getElementById("apellidos").value}`,
      genero: document.getElementById("formulario").genero.value,
      miembros: miembros,
    };

    edificio.agregarPopietario(
      propietario,
      parseInt(propietario.piso - 1),
      parseInt(propietario.puerta - 1),
    );

    document.querySelector(".inmobiliaria").remove();
    pintarEdificio();

    document.getElementById("nombre").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("unidad-familiar").value = "none";
    document.getElementById("formulario").genero.value = "hombre";
    document.getElementById("planta").value = "";
    document.getElementById("puerta").value = "";
    document.getElementById("formulario-aniadir").disabled = false;
    document.getElementById("formulario").style.display = "none";
  });

document
  .getElementById("formulario-aniadir")
  .addEventListener("click", (e) => {
    e.preventDefault();

    let edificio = miInmobiliaria.edificios[parseInt(document.getElementById('idEdificio').value)];

    if (
      /^\s+$/.test(document.getElementById("nombre").value) ||
      /^\s+$/.test(document.getElementById("apellidos").value) ||
      document.getElementById("unidad-familiar").value === "none"
    ) {
      alert("Rellena los campos obligatorios");
    } else {
      let miembros = 0;
      switch (document.getElementById("unidad-familiar").value) {
        case "soltero":
          miembros = 1;
          break;
        case "pareja":
          miembros = 2;
          break;
        case "familia-1":
          miembros = 3;
          break;
        case "familia-2":
          miembros = 4;
          break;
        case "familia-mas":
          miembros = 4;
          break;
      }

      let propietario = {
        piso: document.getElementById("planta").value,
        puerta: document.getElementById("puerta").value,
        nombre: `${document.getElementById("nombre").value} ${document.getElementById("apellidos").value}`,
        genero: document.getElementById("formulario").genero.value,
        miembros: miembros,
      };

      edificio.agregarPopietario(
        propietario,
        parseInt(propietario.piso - 1),
        parseInt(propietario.puerta - 1),
      );
      document.querySelector(".inmobiliaria").remove();
      pintarEdificio();

      document.getElementById("formulario").style.display = "none";
      document.getElementById("nombre").value = "";
      document.getElementById("apellidos").value = "";
      document.getElementById("unidad-familiar").value = "none";
      document.getElementById("formulario").genero.value = "hombre";
      document.getElementById("planta").value = "";
      document.getElementById("puerta").value = "";
      document.getElementById("formulario-modificar").disabled = false;
    }
  });
