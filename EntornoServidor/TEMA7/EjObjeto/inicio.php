<?php
include_once('Ejemplos\Producto.php');//Ruta relativa 

use const EjObjeto\Ejemplos\IVA; //para acceder a una constante definida en otro fichero
use EjObjeto\Ejemplos\Producto; //para acceder a una clase definida en otro fichero

echo '<p>' . IVA . '</p>';
$p1 = new Producto("Banana");
echo '<p>' . $p1->getNombre() . '</P>';
