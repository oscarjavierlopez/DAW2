<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mayor, menor o igual</title>
</head>

<body>
    <?PHP
    $num1 = rand(0, 10);
    $num2 = rand(0, 10);
    if ($num1 == $num2) {
        echo "$num1 y $num2 son iguales";
    } else {
        if ($num1 > $num2) {
            echo "$num1 es mayor que $num2";
        } else {
            echo "$num2 es mayor que $num1";
        }
    }
    ?>
</body>

</html>