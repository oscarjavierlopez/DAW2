<?php
/* Estecódigo asegura que si no hay ninguna actividad en 10 minutos, cualquier request en adelante
redigirirá a la página de logout*/
session_start();
// El siguiente key se crea cuando se inicia sesión
$_SESSION["timeout"] = time();

$inactividad = 600;
if (isset($_SESSION["timeout"])) {
    //Calcular el tiempo de vida de la sesión (TTL = Time To Live)
    $sessionTTL = time() - $_SESSION["timeout"];
    if ($sessionTTL > $inactividad) {
        session_destroy();
        header("Location: /logout.php");
    }
}

