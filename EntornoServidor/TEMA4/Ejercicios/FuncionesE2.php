<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>anagramas</title>
</head>

<body>
    <form action="" method="post">
        <label for="texto1">TEXTO1:</label><br>
        <input type="text" id="texto1" name="texto1"><br>
        <label for="texto2">TEXTO2:</label><br>
        <input type="text" id="texto2" name="texto2"><br>
        <input type="submit" name="enviar" value="Enviar">
    </form>

    <?php
    if (isset($_POST['enviar'])) {
        if ($_POST['texto1'] == "" or $_POST['texto2'] == "") {
            echo '<p>ERROR => HAY ALGÚN CAMPO VACÍO</p>';
        } else {
            $texto1 = str_split($_POST['texto1']);
            $texto2 = str_split($_POST['texto2']);
            if (count($texto1) != count($texto2)) {
                echo "<p>RESULTADO: No son anagramas</p>";
            } else {
                $resultado = true;
                for ($i = 0; $i < count($texto1); $i++) {
                    $caracter = $texto1[$i];
                    if (!in_array($caracter, $texto2)) {
                        $resultado = false;
                    }
                }

                if ($resultado == true) {
                    echo "<p>RESULTADO:Son anagramas</p>";
                } else {
                    echo "<p>RESULTADO: No son anagramas</p>";
                }
            }
        }
    }
    ?>
</body>

</html>