<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    if (isset($_POST['enviar'])) {
        echo '<table border="2px">';
        echo '<tr>';
        echo '<td><strong>nombre</strong></td>';
        $nombres = $_POST['nombres'];
        for ($i = 0; $i < count($nombres); $i++) {
            echo '<td>' . $nombres[$i] . '</td>';
        }
        echo '</tr>';
        echo '<tr>';
        echo '<td><strong>edad</strong></td>';
        $edades = $_POST['edades'];
        for ($i = 0; $i < count($edades); $i++) {
            echo '<td>' . $edades[$i] . '</td>';
        }
        echo '</tr>';
        echo '<tr>';
        echo '<td><strong>genero</strong></td>';
        $generos = $_POST['generos'];
        for ($i = 0; $i < count($generos); $i++) {
            echo '<td>' . $generos[$i] . '</td>';
        }
        echo '</tr>';
        echo '<tr>';
        echo '<td><strong>carrera 1</strong></td>';
        $carrera1 = $_POST['carrera1'];
        for ($i = 0; $i < count($carrera1); $i++) {
            echo '<td>' . $carrera1[$i] . '</td>';
        }
        echo '</tr>';
        echo '<tr>';
        echo '<td><strong>carrera 2</strong></td>';
        $carrera2 = $_POST['carrera2'];
        for ($i = 0; $i < count($carrera2); $i++) {
            echo '<td>' . $carrera2[$i] . '</td>';
        }
        echo '</tr>';
        echo '</table>';
    }
    ?>
</body>

</html>
<?
