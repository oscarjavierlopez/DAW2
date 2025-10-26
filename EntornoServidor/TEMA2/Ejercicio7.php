<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <table style="border: 1px solid black;">
        <tr>
            <?php
            $numero = 1;
            while ($numero <= 10) {
                echo " <td style='border: 1px solid black;'>$numero</td>";
                $numero++;
            }
            ?>
        </tr>
    </table>
</body>

</html>