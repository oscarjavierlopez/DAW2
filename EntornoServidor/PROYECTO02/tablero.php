<?php
session_start();
include("generarBarco.php");
include("pintarTablero.php");
include("pintarDatosPartida.php");
include("generarTablero.php");

//establecimiento de tiempo de partida(sólo si el usuario lo establece en el form inicial)
if (!empty($_POST['tiempo']) && !isset($_SESSION['time'])) {
    $_SESSION['time'] = time();
    $_SESSION['inactividad'] = $_POST['tiempo'];
}

//Comprobacion de que el tiempo de partida sigue activo
$activo = true;
if (isset($_SESSION['time'])) {
    $sessionTTL = time() - $_SESSION["time"];
    if ($sessionTTL >= $_SESSION['inactividad']) {
        $activo = false;
    }
}


//Creacion del tablero si no existe
if (!isset($_SESSION['board'])) {
    generarTablero($_FILES['board']);
}


//establecimiento del numero de intentos(validando que esté entre 1 y 100) => $_POST['intentos'] viene de index.php 
if (!isset($_SESSION['intentos'])) {
    if (isset($_POST['enviar']) && isset($_POST['intentos'])) {
        if ($_POST['intentos'] >= 1 && $_POST['intentos'] <= 100) {
            $_SESSION['intentos'] = $_POST['intentos'];
        } else {
            $_SESSION['intentos'] = 40;
        }
    }
}
//Inicializacion de barcos a hundir y barcos hundidos
if (!isset($_SESSION['hundir']) && !isset($_SESSION['hundidos'])) {
    $_SESSION['hundir'] = 16;
    $_SESSION['hundidos'] = 0;
}

//almacenamiento en sesion de casillas destapadas(1)
for ($i = 0; $i < 10; $i++) {
    for ($j = 0; $j < 10; $j++) {
        if (isset($_POST[$i . $j])) {
            $_SESSION['estado'][$i][$j] = 1;
            $_SESSION['intentos']--;
            if ($_SESSION['board'][$i][$j] ===  "X") {
                $_SESSION['hundidos']++;
                $_SESSION['hundir']--;
            }
        }
    }
}


?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>tablero</title>
    <link rel="stylesheet" href="tablero.css">

</head>

<body>
    <main>
        <section>
            <form action="" method="post">
                <table>
                    <?php
                    if ($_SESSION['intentos'] > 0 && $_SESSION['hundir'] > 0 && $activo) {
                        pintarTablero();
                    } else {
                        if ($_SESSION['hundir'] === 0) {
                            echo '<div id="gameOver">
                        <p class="rojo">GAME OVER</p>
                        <p class="verde">Has ganado</p>
                        <a href="cerrarSesion.php">Reset</a>
                        </div>';
                        } else {
                            echo '<div id="gameOver">
                        <p class="rojo">GAME OVER</p>
                        <p class="rojo">Has perdido</p>
                        <a href="cerrarSesion.php">Reset</a>
                        </div>';
                        }
                    }
                    ?>
                </table>
            </form>
        </section>
        <?php
        if ($_SESSION['intentos'] > 0 && $_SESSION['hundir'] > 0 && $activo) {
            echo '<aside>';
            pintarDatos();
            echo '<aside>';
        }
        ?>
    </main>
</body>

</html>