<!DOCTYPE html>
<html>

    <head>
        <title>Ejemplo</title>
    </head>

    <body>
        <?php
        $mensaje_es = "Hola";
        $mensaje_en = "Hello";
        $idioma = "es";
        $mensaje = "mensaje_" . $idioma; //concatenación 
        print $mensaje; //Imprime mensaje_es
        print $$mensaje; //Imprime el contenido de la variable $mensaje_es que es lo que hay dentro de $mensaje

        ?>
    </body>

</html>