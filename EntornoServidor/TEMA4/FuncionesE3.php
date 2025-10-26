<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mostrar array</title>
</head>

<body>
    <?php
    $comidas = ['pizza', 'hamurguesa', 'sandwitch', 'bocadillo'];
    function imprimirArray($array)
    {
        echo '<table border= "2px">';
        echo '<tr>
        <td>posicion</td>
        <td>valor</td>
        </tr>';

        for ($i = 0; $i < count($array); $i++) {
            echo '<tr>';
            echo '<td>' . $i . '</td>';
            echo '<td>' . $array[$i] . '</td>';
            echo '</tr>';
        }
        echo '</table>';
    }
    imprimirArray($comidas);
    ?>
</body>

</html>