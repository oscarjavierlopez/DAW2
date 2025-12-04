<?php
function pintarDatos()
{
    echo '<div><p><span>Nº de intentos:</span> ' . $_SESSION['intentos'] . '</p>';
    echo '<p><span>A hundir:</span> ' . $_SESSION['hundir'] . '</p>';
    echo '<p><span>Hundidos:</span> ' . $_SESSION['hundidos'] . '</p>';
    if (isset($_SESSION['time'])) {
        echo '<p><span>Tiempo Restante:</span> ' . $_SESSION['inactividad'] - (time() - $_SESSION['time']) .  '</p>';
    }
    echo '<a href="cerrarSesion.php">Reset</a></div>';
}
