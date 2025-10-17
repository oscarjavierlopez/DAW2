<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Juego geográfico</title>
</head>

<body>
    <?php
    /*No es necesario inicializar fuera del try...catch las variables xk mientras no formen parte 
    de una funcion son de ambito global */
    $ids_disponibles = [];
    $errores = 0;
    $aciertos = 0;
    $provincia = "";
    $provinciaInsertada = "";

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
        $sql2 = "SELECT nombre FROM localidades WHERE id_localidad = :id_localidad";
        $stmt2 = $conn->prepare($sql2);
        $stmt2->bindParam(':id_localidad', $id_localidad, PDO::PARAM_INT);
        $stmt2->execute();
        if ($stmt2) {
            while ($row = $stmt2->fetch(PDO::FETCH_ASSOC)) {
                $localidad = $row['nombre'];
            }
        } else {
            echo "Error en la consulta.";
        }


        echo '<form action="" method="post">
        <label for="localidad">Localidad:</label>
        <select name="localidad" id="localidad">
        <option>' . $localidad . '</option>
        </select>
        <br>
        <label for="provincia">Provincia:</label><br>
        <input type="text" id="provincia" name="provinciaInsertada" required>
        <input type="submit" name="enviar" value="Enviar">
        </form>';



        $conn = null;
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }

    if (isset($_POST['enviar']) && isset($_POST['provinciaInsertada'])) {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database = "geografia";
        try {
            $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            //Buscamos la provincia de la localidad que nos ha salido
            $sql3 = "SELECT nombre FROM provincias WHERE n_provincia = (SELECT n_provincia FROM localidades WHERE nombre = :localidad)";
            $stmt3 = $conn->prepare($sql3);
            $stmt3->bindParam(':localidad', $_POST['localidad'], PDO::PARAM_STR);
            $stmt3->execute();
            if ($stmt3) {
                $row = $stmt3->fetch(PDO::FETCH_ASSOC);
                if ($row) {
                    $provincia = $row['nombre'];
                }
            } else {
                echo "Error en la consulta.";
            }

            //Validacion
            if ($_POST['provinciaInsertada'] != $provincia) {
                $sql4 = "UPDATE resultados SET numero = (SELECT numero + 1 FROM resultados WHERE nombre = 'errores') WHERE nombre = 'errores'";
                $stmt4 = $conn->prepare($sql4);
                $stmt4->execute();
            } else {
                $sql5 = "UPDATE resultados SET numero = (SELECT numero + 1 FROM resultados WHERE nombre = 'aciertos') WHERE nombre = 'aciertos'";
                $stmt5 = $conn->prepare($sql5);
                $stmt5->execute();
            }



            //Mostramos los resultados
            $sql6 = "SELECT numero FROM resultados WHERE nombre = 'errores'";
            $stmt6 = $conn->prepare($sql6);
            $stmt6->execute();
            if ($stmt6) {
                $row = $stmt6->fetch(PDO::FETCH_ASSOC);
                if ($row) {
                    $errores = $row['numero'];
                }
            } else {
                echo "Error en la consulta.";
            }
            $sql7 = "SELECT numero FROM resultados WHERE nombre = 'aciertos'";
            $stmt7 = $conn->prepare($sql7);
            $stmt7->execute();
            if ($stmt7) {
                $row = $stmt7->fetch(PDO::FETCH_ASSOC);
                if ($row) {
                    $aciertos = $row['numero'];
                }
            } else {
                echo "Error en la consulta.";
            }
            echo '<p><b>Errores: </b>' . $errores . '</p>';
            echo '<p><b>Aciertos: </b>' . $aciertos . '</p>';
            echo '<p><b>Porcentaje de aciertos: </b>' . $aciertos * 100 / ($aciertos + $errores) . '%</p>';


            $conn = null;
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }
    ?>
</body>



</html>