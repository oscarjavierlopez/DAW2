<!DOCTYPE html>
<html>

<head>
    <title>Ejemplo</title>
</head>

<body>
    <?php
    $mensaje = "Hola, mundo!"; // Variable global
    mostrarMensajeConGlobals();

    function mostrarMensajeConGlobals()
    {
        echo $GLOBALS['mensaje']; //$GLOBALS es un array de las variables del programa
    }


    ?>
</body>

</html>