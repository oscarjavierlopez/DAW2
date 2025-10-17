<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Juego geográfico</title>
</head>

<body>
    <?php
    $ids_disponibles = [];
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "geografia";
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = "SELECT id_localidad FROM localidades";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        if ($stmt) {
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                array_push($ids_disponibles, $row['id_localidad']);
            }
        } else {
            echo "Error en la consulta.";
        }

        $id_localidad = $ids_disponibles[rand(0, count($ids_disponibles) - 1)];
        $sql2 = "SELECT * FROM localidades WHERE id_localidad = :id_localidad";
        $stmt2 = $conn->prepare($sql2);
        $stmt2->bindParam(':id_localidad', $id_localidad, PDO::PARAM_INT);
        $stmt2->execute();
        if ($stmt2) {
            while ($row = $stmt2->fetch(PDO::FETCH_ASSOC)) {
                echo '<p><b>Localidad:</b>';
            }
        } else {
            echo "Error en la consulta.";
        }

        $conn = null;
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }

    ?>
</body>

</html>