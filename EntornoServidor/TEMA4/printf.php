<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PRINTF</title>
</head>
<body>
    <?php
    $nombre = "Óscar";
    $edad = "20";
    $pi = 3.14;
    $i = 1;
    printf("Nombre: %s, Edad: %d, Valor de Pi: %.2f", $nombre, $edad, $pi);//imprime la 1 cadena sustituyendo los % por los parametros que le pasamos depues(sustityue en orden)
    echo '<p></p>';
    printf("Valor de la variable \$i: %05d", $i);
    echo "<p></p>";
    printf("Valor de la variable \$i= %%d \n", $i); // con %% escapamos el %
    ?>
</body>
</html>