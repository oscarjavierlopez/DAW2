<?php
session_start();
ob_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hundir la flota</title>
</head>

<body>
    <?php
    if (!isset($_SESSION['board'])) {
        echo '<form action ="tablero.php" method="post" enctype="multipart/form-data">
        <label for="intentos">Establezca un número de intentos:<label>
        <input type="number" name="intentos" id="intentos"><br>
        <label for="board">Selecciona un fichero</label>
        <input type="file" name="board" id="board"><br>
        <label for="tiempo"> Tiempo de juego(en segundos) </label>
        <input type="number" name="tiempo" id="tiempo"><br>
        <input type="submit" name="enviar" value="empezar">
        </form>';
    } else {
        header("Location: tablero.php");
        exit;
    }
    ?>
</body>

</html>
<?php ob_end_flush(); ?>