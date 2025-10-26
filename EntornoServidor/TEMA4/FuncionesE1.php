<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FuncionesE1</title>
</head>

<body>
    <form action="" method="post">
        <label for="texto">Texto:</label><br>
        <input type="text" id="texto" name="texto"><br>

        <label for="numero">Número:</label><br>
        <input type="number" id="numero" name="numero" min="1" max="99"><br>

        <input type="radio" id="encriptar" name="opcion" value="encriptar">
        <label for="encriptar">encriptar</label><br>
        <input type="radio" id="desencriptar" name="opcion" value="desencriptar">
        <label for="desencriptar">desencriptar</label><br>
        <input type="submit" name="enviar" value="Enviar">
    </form>

    <?php
    if (isset($_POST['enviar'])) {
        $texto = $_POST['texto'];
        $num = $_POST['numero'];
        $nuevoTexto = "";
        if (strlen($texto) <= 10) {
            echo "<p>ERROR =>El texto debe tener más de 10 caracteres</p>";
        } elseif ($num < 1 or $num > 99) {
            echo "<p>ERROR =>El numero ha de estar entre 1 y 99</p>";
        } else {
            if ($_POST['opcion'] == "encriptar") {
                echo "<p>Antiguo texto:</p>";
                echo $texto;
                for ($i = 0; $i < strlen($texto); $i++) {
                    $nuevoTexto[$i] = chr(ord($texto[$i]) + $num);
                }
                echo "<p>Nuevo texto:</p>";
                echo $nuevoTexto;
            } elseif ($_POST['opcion'] == 'desencriptar') {
                echo "<p>Antiguo texto:</p>";
                echo $texto;
                for ($i = 0; $i < strlen($texto); $i++) {
                    $nuevoTexto[$i] = chr(ord($texto[$i]) - $num);
                }
                echo "<p>Nuevo texto:</p>";
                echo $nuevoTexto;
            }
        }
    }
    ?>
</body>

</html>