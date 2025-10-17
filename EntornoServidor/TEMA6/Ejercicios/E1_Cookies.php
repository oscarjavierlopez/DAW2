<?php
if (isset($_COOKIE['contador_visitas'])) {
    $contador = $_COOKIE['contador_visitas'] + 1; //accedo al valor del contador con $_COOKIE['contador_visitas']
} else {
    $contador = 1;
}
setcookie("contador_visitas", $contador, mktime(19, 59, 00)); //las cookies se crean antes de que se empiece a renderizar el HTML
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>cookies-E1</title>
</head>

<body>
    <?php
    echo '<p>Número de visitas: ' . $contador . '</p>';
    ?>
</body>

</html>