<!DOCTYPE html>
<html>

<head>
    <title>Resultado de la Selección de Colores</title>
</head>

<body>
    <h2>Colores Favoritos Seleccionados:</h2>
    <?php
    if (
        isset($_POST['colores']) &&
        !empty($_POST['colores'])
    ) {
        $coloresSeleccionados = $_POST['colores'];
        echo "<ul>";
        $numColores = count($coloresSeleccionados);
        for ($i = 0; $i < $numColores; $i++) {
            $color = $coloresSeleccionados[$i];
            echo "<li>$color</li>";
        }
        echo "</ul>";
    } else {
        echo "No has seleccionado ningún color
favorito.";
    }
    ?>
</body>

</html>