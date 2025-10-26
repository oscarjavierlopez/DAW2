<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atletas</title>
</head>

<body>
    <form action="" method="post">
        <label for="numAtletas">Ingrese numero de atletas:</label><br>
        <input type="text" id="numAtletas" name="numAtletas">

        <input type="submit" name="enviar" value="Enviar">
    </form>
    <?php
    if (isset($_POST['enviar'])) {
        if (isset($_POST['numAtletas'])) {
            if ($_POST['numAtletas'] !== "") {
                if ($_POST['numAtletas'] >= 0) {
                    echo '<form action="procesar.php" method="post">';
                    for ($i = 0; $i < $_POST['numAtletas']; $i++) {
                        echo '<label for="nombre">nombre:</label><br>
        <input type="text" id="nombre" name="nombres[]"><br>
        <label for="edad">edad:</label><br>
        <input type="text" id="edad" name="edades[]"><br>
        <input type="checkbox" id="hombre" name="generos[]" value="hombre"><label for="hombre">hombre</label><br>
        <input type="checkbox" id="mujer" name="generos[]" value="mujer"><label for="mujer">mujer</label><br>
        <label for="carrera1">tiempo carrera1</label><br>
        <input type="text" id="carrera1" name="carrera1[]"><br>
        <label for="carrera2">tiempo carrera2</label><br>
        <input type="text" id="carrera2" name="carrera2[]"><br>';
                    }
                    echo '<input type="submit"name="enviar" value="Enviar">';
                    echo '</form>';
                } else {
                    echo "<span>El numero de atletas no puede ser inferior a 0</span>";
                }
            } else {
                echo "<span>No se insertó numero de atletas</span>";
            }
        } else {
            echo "<span>No se insertó numero de atletas</span>";
        }
    }
    ?>
</body>

</html>