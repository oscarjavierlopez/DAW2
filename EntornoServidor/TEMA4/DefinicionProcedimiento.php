<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabla multiplicar</title>
</head>

<body>
    <?php
    $num = 3;
    echo '<h1>La tabla del ' . $num . ':</h1>';
    function mostrarTabla($num)
    {
        echo "<p>" . $num * 0 . "</p>";
        echo "<p>" . $num * 1 . "</p>";
        echo "<p>" . $num * 2 . "</p>";
        echo "<p>" . $num * 3 . "</p>";
        echo "<p>" . $num * 4 . "</p>";
        echo "<p>" . $num * 5 . "</p>";
        echo "<p>" . $num * 6 . "</p>";
        echo "<p>" . $num * 7 . "</p>";
        echo "<p>" . $num * 8 . "</p>";
        echo "<p>" . $num * 9 . "</p>";
        echo "<p>" . $num * 10 . "</p>";
    }
    mostrarTabla($num);
    ?>
</body>

</html>