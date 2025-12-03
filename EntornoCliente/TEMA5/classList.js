div.classList.remove("foo"); //elimina la clase del classList
div.classList.add("anotherclass"); //Añade la clase al classList

// si visible está presente la elimina, de lo contrario la añade
div.classList.toggle("visible");

// añadir/eliminar visible, dependiendo de la condición, i menor que 10
div.classList.toggle("visible", i < 10);
alert(div.classList.contains("foo"));

// añadir o eliminar varias clases
div.classList.add("foo", "bar");
div.classList.remove("foo", "bar");

// reemplazar la clase "foo" por "bar"
div.classList.replace("foo", "bar");