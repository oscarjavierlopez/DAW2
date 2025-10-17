<?
/*creacion de una cookie:
setcookie ("nombre de la cookie", $valor, fecha de caducidad,
ruta, dominio, seguro);*/
//es obligatorio al crear la cookie darle un nombre y un valor, si no le doy valor no se crea
$pieza="Tornillo";
setcookie("Hierro", $pieza, time()+300); //cooquie que dure desde el tiempo actual 300s(5mins)
setcookie("Hierro", $pieza, mktime(12,30,0,7,31,2021)); //Modificamos la cookie para q dure hasta las 12:30:00 del día 31 de julio de 2031:
//Modificar => se escribe un nuevo setcookie()


//Acceder al valor con $_COOKIE["nombre]
$valor = $_COOKIE["Hierro"];
echo $valor;

//Eliminacion => Hay que ponerle un tiempo que ya ha expirado
setcookie("Hierro", "", time() - 1000);

?>