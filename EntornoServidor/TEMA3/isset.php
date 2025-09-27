<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Respuesta</title>
</head>

<body>
    <?php
    if (isset($_POST["enviar"])) { //Cuando doy al botón enviar la clave enviar adquiere el value "Enviar" por lo tanto esto solo se cumple cuando le doy a enviar
        if (isset($_POST["nombre"])) { //si existe valor para la clave "nombre"
            if (!empty($_POST["nombre"])) {
                echo "Nombre:" . $_POST["nombre"];
            }else{
                echo "<p>El nombre está vacío</p>";
            }
        }
    } else {
    ?>
        <form action="" method="post">  <!--No se pone nada en action porque el php está en el mismo documento-->
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre">
            <input type="submit" name="enviar" value="Enviar">
        </form>
    <?php
    }
    ?>
</body>

</html>