<!DOCTYPE html>
<html>

    <head>
        <title>Ejemplo</title>
    </head>

    <body>
        <?php
        $color = "azul"; //Variable con nombre color
        $$color = "es bonito"; //Crea automaticamente una variable con nombre azul a la q puedo acceder como $$color o como $azul
        print $color; //Imprime azul
        print $$color; //Imprime es bonito
        print $azul; //imprime es bonito
        ?>
    </body>

</html>