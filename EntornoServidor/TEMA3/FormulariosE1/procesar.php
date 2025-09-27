<?php
if (isset($_POST["enviar"])) {
    if (isset($_POST['frutaFav']) && !empty($_POST['frutaFav'])) {
        if ($_POST['frutaFav'] == "fresa") {
            echo "<img src='fresa.jpg'/>";
        } else if ($_POST['frutaFav'] == "platano") {
            echo "<img src='platano.png'/>";
        } else {
            echo "<img src='manzana.png'/>";
        }
    }
} else {
    echo '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Frutas</title>
</head>
<body>
    <form action="procesar.php" method="post">
        <label for="fresa">
            <input type="radio" name="frutaFav" value="fresa" id ="fresa">
            fresa
        </label>
        <label for="platano">
            <input type="radio" name="frutaFav" value="plátano" id ="platano">
            plátano
        </label>
        <label for="manzana">
            <input type="radio" name="frutaFav" value="manzana" id ="manzana">
            manzana
        </label>
        <input type="submit" name="enviar" value="Enviar">
    </form>
</body>
</html>';
}
