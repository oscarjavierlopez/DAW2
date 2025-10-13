<?php
//addSlashes(string) => Añade //
$consulta = "WHERE nom = 'Ana'";
$consulta = addSlashes($consulta); // Así la variable $consulta contendrá WHERE nom = \‘Ana\’

//stripSlashes(string) => Quita //
$consulta = stripSlashes($consulta); // Así la variable $consulta contendrá WHERE nom = 'Ana'

//strtoupper(string) => Pasa la cadena a mayusculas
$a = 'Pepe';
$a = strtoupper($a);
//strtolower(string) => Pasa la cadena a minusculas
$a = strtolower($a);

/*ucfirst(string) => devuelve la misma cadena convirtiendo su primer carácter en mayúscula 
si es una letra*/
$texto = 'viva la vida';
$texto = ucfirst(($texto));

/*ucwords(string) => devuelve la misma cadena convirtiendo el primer carácter de todas las 
palabras en mayúscula*/
$texto = ucwords($texto);

//strlen(string) => devuelve la longitud de una cadena expresada en valor numérico entero
$longitud = strlen($texto);

/*chop(string) => elimina los espacios en blanco que haya al final de una cadena de 
caracteres, incluyendo los códigos de fin de línea si los hubiere*/
$texto = 'jshkjfksdhf     ';
$texto = chop($texto);

/*ltrim(string) => elimina los espacios en blanco que haya al principio de una cadena 
de caracteres*/
$texto = '      sakjdljsdkl';
$texto = ltrim($texto);

/*trim(string) => elimina los espacios en blanco que haya al principio y al final de una 
cadena*/
$texto = '    kjsckhksd   ';
$texto = trim($texto);

//strip_tags(string) => elimina los controles HTML de una cadena
$quita_html = "<H1>Texto grande</H1> <B>Negrita</B><P>";
echo $quita_html;
echo strip_tags($quita_html);

/*str_repeat(string, number) => devuelve la misma cadena que toma como
primer argumento repetida tantas veces como se indique en el segundo argumento*/
$texto2 = str_repeat($texto, 2); //contiene $texto 2 veces

/*strtr() => devuelve la misma cadena sustituyendo los caracteres de la misma
que se indiquen en el segundo argumento por los que se indiquen en el
tercer argumento haciéndolos equivaler uno a uno */
$cambia = "Los días perdidos en verano";
$cambia = strtr($cambia, "ao", "ua"); //"Las díus perdidas en veruna"

/*str_replace(find, replace, string) => reemplaza todas las apariciones del
string buscado con el string de reemplazo. */
str_replace("world", "Peter", "Hello world!"); //Devolveria "Hello Peter"

/*strrev(string) => recibe una cadena de caracteres y la devuelve al revés. */
$paseo = 'paseo';
$paseo = strrev($paseo); //devuelve oesap

/*str_split(string) => separa los caracteres de una cadena y los introduce en un
array*/
$texto = "Hola";
$resultado = str_split($texto); /*$resultado = Array
                                    (
                                        [0] => H
                                        [1] => o
                                        [2] => l
                                        [3] => a
                                    )*/

