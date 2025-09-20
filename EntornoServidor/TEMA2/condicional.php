<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>notas</title>
</head>
<body>
    <?php
    $num = rand(1, 10);
    if ($num < 5){
        echo "La nota es: $num y estás suspenso";
    }else if ($num >= 5 and $num <7){
        echo "La nota es: $num y estás aprobado";
    }else if ($num >= 7 and $num < 9){
        echo "La nota es: $num y tienes notable";
    }else {
        echo "La nota es: $num y tienes sobresaliente";
    }
    ?>
</body>
</html>