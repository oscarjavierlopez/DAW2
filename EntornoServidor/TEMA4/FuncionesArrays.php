<?php
/*current(array) => devuelve el contenido de elemento sobre el que está el
puntero sin variar su posición */

/*next(array) => devuelve el contenido del siguiente elemento según la
posición donde esté el puntero y desplaza éste a esa posición nueva. */
$personas = array("Juan", "Maria", "Sonia", "Pedro");
echo current($personas); //Devuelve Juan
echo next($personas); //Devuelve Maria
echo current($personas); //Devuelve Maria

/*reset(array) => coloca el puntero de una matriz sobre su primer elemento y
devuelve su contenido.*/

/*end(array) => coloca el puntero de una matriz sobre su último elemento y
devuelve su contenido. */
$personas = array("Juan", "Maria", "Sonia", "Pedro");
echo next($personas); //Devuelve Maria
echo reset($personas); //Devuelve Juan
echo end($personas); //Devuelve Pedro

/*count(array) => cuenta los elementos que integran una matriz y devuelve un
número entero. sizeof(array) funciona igual */
echo count($personas); //devuelve 4

/*explode(carácter separador, cadena) permite convertir una cadena de caracteres
en una matriz mediante un separador dado */
$cadena_nombres = "Juan,María,Pedro,Laura";
$nombres = explode(",", $cadena_nombres); //devuelve un array con ['Juan', 'María', 'Pedro', 'Laura']

/*implode(carácter separador, matriz) => lleva los elementos de una matriz a una cadena 
separándolos como se indique */
$colores = array("rojo", "verde", "azul", "amarillo");
$cadena_colores = implode(", ", $colores); //devuelve la cadena "rojo, verde, azul, amarillo"

/*is_array(variable) =>Devuelve true si es un array */
echo is_array($colores); //devuelve true

/*in_array(elem, array) => devuelve True si un valor está contenido en alguno
de los elementos de una matriz y False si no lo está */
echo in_array("rojo", $colores); //devuelve true

/*array_unshift(arr, v1,v2,..) => Inserta v1, v2... Al pincipio del array */
$frutas = array("manzana", "naranja", "plátano");
array_unshift($frutas, "fresa", "uva");

/*array_push(array, v1,v2,..): Inserta al final del array v1, v2... */
array_push($frutas, "fresa", "uva");

/*array_pad(array, size, var): Inserta elementos con el valor var las veces
necesarios para que el tamaño del array sea size */
$frutas = array("manzana", "naranja", "plátano");
$frutas_rellenadas = array_pad($frutas, 5, "uva"); /*Array ( [0] => manzana [1] =>
naranja [2] => plátano [3] => uva [4] => uva )*/

/*list(var1, var2...): Se utiliza para asignar valores a una lista de variables a partir de
un array */
$frutas = array("manzana", "plátano", "naranja");
list($fruta1, $fruta2, $fruta3) = $frutas;
echo $fruta1; // Muestra "manzana"
echo $fruta2; // Muestra "plátano"
echo $fruta3; // Muestra "naranja"

/*sort(array) ordena un array de índices en orden ascendente*/
$numeros = [1, 3, 2];
echo sort($numeros);
/*rsort(array) ordena un array de índices en orden descendiente.*/
echo rsort($numeros);

/*asort(array) ordena un array asociativo en orden ascendente por el valor.
• arsort(array) ordena un array asociativo en orden descendiente por el
valor.
• ksort(array) ordena un array asociativo en orden ascendente por la clave.
• krsort(array) ordena un array asociativo en orden descendiente por la
clave. */
