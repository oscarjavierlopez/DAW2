<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $Frutas = array(
        "Manzana" => " roja ",
        "Plátano" => " amarillo",
        "Naranja" => " naranja "
    );
    //ordenado por valor
    asort($Frutas);
    foreach ($Frutas as $clave => $valor) {
        echo "Clave: " . $clave . " - Valor: " . $valor;
        echo "<br>";
    }
    echo "<br>";
    //ordenado al revés por valor
    arsort($Frutas);
    foreach ($Frutas as $clave => $valor) {
        echo "Clave: " . $clave . " - Valor: " . $valor;
        echo "<br>";
    }
    echo "<br>";
    //ordenado por clave
    ksort($Frutas);
    foreach ($Frutas as $clave => $valor) {
        echo "Clave: " . $clave . " - Valor: " . $valor;
        echo "<br>";
    }
    echo "<br>";
    //ordenado reverso por clave
    krsort($Frutas);
    foreach ($Frutas as $clave => $valor) {
        echo "Clave: " . $clave . " - Valor: " . $valor;
        echo "<br>";
    }
    ?>
</body>

</html>