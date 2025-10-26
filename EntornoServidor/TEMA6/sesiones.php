<?php
session_start(); //abre una nueva sesion de trabajo o prolonga la que ya está abierta
$_SESSION["usuario"] = "Ana"; //doy el valor "Ana" a la variable de sesión usuario
$_SESSION["hora"] = time(); //guardo el tiempo actual
$_SESSION["pagina"] = $_SERVER["PHP_SELF"]; //guardo el nombre del .php actual(sesiones.php)
if (empty($_SESSION["contador"])) {
    $_SESSION["contador"] = 0; //se crea la variable de sesión contador y se inicializa a 0
}
$_SESSION["contador"]++;
echo "Nombre de la sesión: " . $_SESSION['pagina'] .
    "<P>Nombre del usuario : " . $_SESSION['usuario'] .
    "<P>Hora última entrada: " . strftime("%H:%M:%S
del %d/%m/%Y", $_SESSION['hora']);

unset($_SESSION['usuario']); //elimina la variable de sesion 'usuario'
session_unset(); //elimina todas las variables de sesion
//después de ejecutar esta función se pueden seguir creando variables de sesión
session_destroy(); //elimina toda la información que se haya recogido y asociado a la sesión activa
