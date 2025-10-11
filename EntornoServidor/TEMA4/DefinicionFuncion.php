<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>suma</title>
</head>

<body>
    <?php
    function sumar($a, $b, $c, $d, $e)
    {
        return $a + $b + $c + $d + $e;
    }
    $suma = sumar(1, 2, 3, 4 ,5 );
    echo "El resultado de la suma es: " . $suma;

    ?>
</body>

</html>