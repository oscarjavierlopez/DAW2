<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table style="border: 1px solid black;">
            <?php
            for($numero = 1; $numero <= 10; $numero++){
                echo " <tr><td style='border: 1px solid black;'>$numero</td></tr>"; //varias filas con una columna
            }
            ?>
    </table>
</body>
</html>