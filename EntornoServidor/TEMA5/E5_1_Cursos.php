<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cursos</title>
    <style>
        table {
            width: 100%;
        }
    </style>
</head>

<body>
    <h1>Lista de cursos</h1>
    <?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "cursos";
    try {

        $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = "SELECT * FROM cursos";
        $result = $conn->query($sql);
        echo '<table>
        <tr style="background-color: black;
        color:aliceblue;">
            <td>Cursos disponibles</td>
            <td>Plazas totales</td>
            <td>Plazas disponibles</td>
            <td></td>
        </tr>';
        if ($result) {
            while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
                if ($row['plazas_disponibles'] != 0) {
                    echo '<tr>';
                    echo '<td>' . $row['titulo'] . '</td>';
                    echo '<td>' . $row['plazas_totales'] . '</td>';
                    echo '<td>' . $row['plazas_disponibles'] . '</td>';
                    echo '<td><button>Añadir plaza</button></td>';
                    echo '</tr>';
                } else {
                    echo '<tr>';
                    echo '<td><s>' . $row['titulo'] . '</s></td>';
                    echo '<td><s>' . $row['plazas_totales'] . '</s></td>';
                    echo '<td><s>' . $row['plazas_disponibles'] . '</s></td>';
                    echo '<td><button>Añadir plaza</button></td>';
                    echo '</tr>';
                }
            }
            echo '</table>';
        } else {
            echo "Error en la consulta.";
        }

        echo '<p>Resumen de ocupación:';
        echo '<ul>';
        $sql2 = "SELECT SUM(plazas_totales) as plazas_totales_ofertadas,  SUM(plazas_totales) - SUM(plazas_disponibles) as plazas_ocupadas FROM cursos";
        $result2 = $conn->query($sql2);
        if ($result2) {
            while ($row = $result2->fetch(PDO::FETCH_ASSOC)) {
                echo '<li>Plazas totales ofertadas:' . $row['plazas_totales_ofertadas'] . '</li>';
                echo '<li>Plazas ocupadas:' . $row['plazas_ocupadas'] . '</li>';
                echo '<li>Porcentaje de ocupación' . $row['plazas_ocupadas'] * 100 / $row['plazas_totales_ofertadas'] . '%</li>';
            }
        } else {
            echo "Error en la consulta.";
        }
        echo '</ul>';


        $conn = null;
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
    ?>

</body>

</html>