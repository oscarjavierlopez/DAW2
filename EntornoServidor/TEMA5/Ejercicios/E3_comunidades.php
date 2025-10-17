<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comunidades</title>
</head>

<body>
    <!--Formulario de comunidades-->
    <form action="" method="post">
        <label for="comunidad">Comunidad:</label>
        <select id="comunidad" name="comunidad" required>
            <?php
            $servername = "localhost";
            $username = "root";
            $password = "";
            $database = "geografia";
            try {
                $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $sql = "SELECT nombre FROM comunidades";
                $stmt = $conn->prepare($sql);
                $stmt->execute();
                if ($stmt) {
                    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                        echo '<option value="' . $row['nombre'] . '">' . $row['nombre'] . '</option>';
                    }
                } else {
                    echo "Error en la consulta.";
                }
                $conn = null;
            } catch (PDOException $e) {
                echo "Error: " . $e->getMessage();
            }

            ?>
        </select>
        <input type="submit" name="enviarComunidad" value="Elegir">
    </form>

    <?php
    if ((isset($_POST['enviarComunidad']) && isset($_POST['comunidad']))) {
        //Formulario de provincias
        echo '<form action="" method="post">
        <label for="provincia">Provincia:</label>
        <select id="provincia" name="provincia" required>';
        try {
            $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "SELECT nombre FROM provincias WHERE id_comunidad=(SELECT id_comunidad FROM comunidades WHERE UPPER(nombre) = UPPER(:nombreComunidad))";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':nombreComunidad', $_POST['comunidad'], PDO::PARAM_STR);
            $stmt->execute();
            if ($stmt) {
                while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                    echo '<option value="' . $row['nombre'] . '">' . $row['nombre'] . '</option>';
                }
            } else {
                echo "Error en la consulta.";
            }
            $conn = null;
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
        echo '</select>
        <input type="submit" name="enviarProvincia" value="Elegir">
    </form>';
    }


    if ((isset($_POST['enviarProvincia']) && isset($_POST['provincia']))) {
        //Formulario de localidades
        echo '<form action="" method="post">
        <label for="provincia">Provincia:</label>
        <select id="provincia" name="provincia" required>
        <option>'. $_POST['provincia'] . '</option>
        </select><br>
        <label for="localidad">Localidad:</label>
        <select id="localidad" name="localidad" required>';
        try {
            $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "SELECT nombre FROM localidades WHERE n_provincia=(SELECT n_provincia FROM provincias WHERE nombre = :nombreProvincia )";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':nombreProvincia', $_POST['provincia'], PDO::PARAM_STR);
            $stmt->execute();
            if ($stmt) {
                while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                    echo '<option value="' . $row['nombre'] . '">' . $row['nombre'] . '</option>';
                }
            } else {
                echo "Error en la consulta.";
            }
            $conn = null;
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
        echo '</select>
        <input type="submit" name="enviarLocalidad" value="Elegir">
    </form>';
    }


    if (isset($_POST['enviarLocalidad']) && isset($_POST['localidad'])) {
        echo '<form action="" method="post">
        <label for="provincia">Provincia:</label>
        <select id="provincia" name="provincia" required>
        <option>'. $_POST['provincia'] . '</option>
        </select><br>
        <label for="localidad">Localidad:</label>
        <select id="localidad" name="localidad" required>
        <option>' . $_POST['localidad'] . '</option>
        </select><br>';
        try {
            $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "SELECT poblacion FROM localidades WHERE nombre = :nombreLocalidad";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':nombreLocalidad', $_POST['localidad'], PDO::PARAM_STR);
            $stmt->execute();
            if ($stmt) {
                $row = $stmt->fetch(PDO::FETCH_ASSOC);
                if($row){
                    echo '<ul>
                    <li>Poblacion: ' . $row['poblacion'] . ' habitantes</li></ul>'; 
                }
            } else {
                echo "Error en la consulta.";
            }
            $conn = null;
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }

    ?>


</body>

</html>