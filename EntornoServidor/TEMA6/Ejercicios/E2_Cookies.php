<?php
if (!isset($_COOKIE['idioma'])) {
    setcookie('idioma', "");
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recordar Idioma</title>
</head>

<body>
    <?php
    if (!isset($_COOKIE['idioma'])) { //en la primera visita la cookie no estará disponible xk no se la mandó al servidor
        echo '<form action="" method="post">
        <input type="radio" name="idioma" value="español" id="español" required> <!--Solo se pone required en uno de los input de tipo radio-->
        <label for="español">Español</label><br>
        <input type="radio" name="idioma" value="ingles" id="ingles">
        <label for="ingles">Inglés</label><br>
        <input type="submit" name="elegir" value="Elegir">
        </form>';

        if (isset($_POST['elegir']) && isset($_POST['idioma'])) {
            setcookie('idioma', $_POST['idioma'], time() + 30);
        }
    } else {
        if ($_COOKIE['idioma'] === 'ingles') {
            echo '<h1>Welcome to the second exercise of cookies</h1>';
        } else {
            echo '<h1>Bienvenido al ejercicio 2 de cookies</h1>';
        }
    }
    ?>
</body>

</html>