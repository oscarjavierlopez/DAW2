<?php
session_start();
include('variablesBBDD.php');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>libros</title>
</head>

<body>
    <?php
    echo '<p>Usuario: ' . $_SESSION['email'] . '</p>'
    ?>
    <a href="cerrarSesion.php">Cerrar Sesión</a>
    <h2>Catálogo de Libros</h2>
    <form action="" method="post">
        <select name="categoria">
            <?php
            try {
                $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $sql = "SELECT categoria FROM libros";
                $stmt = $conn->prepare($sql);
                $stmt->execute();
                if ($stmt) {
                    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                        echo '<option>' . $row['categoria'] . '</option>';
                    }
                }
                $conn = null;
            } catch (PDOException $e) {
                echo "Error: " . $e->getMessage();
            }
            ?>
        </select>
        <input type="submit" name="filtrar" value="filtrar">
    </form>


    
        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Categoría</th>
                    <th>Puntuación Promedio</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <?php
                if (!isset($_POST['categoria'])) {
                    try {
                        $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
                        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                        $sql = "SELECT * FROM libros";
                        $stmt = $conn->prepare($sql);
                        $stmt->execute();
                        if ($stmt) {
                            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                                echo '<tr>';
                                echo '<td>' . $row['titulo'] . '</td>';
                                echo '<td>' . $row['autor'] . '</td>';
                                echo '<td>' . $row['categoria'] . '</td>';
                                $sql2 = "SELECT ROUND(SUM(puntuacion) / COUNT(puntuacion), 2) as promedio FROM resenias WHERE id_libro = :id_libro";
                                $stmt2 = $conn->prepare($sql2);
                                $stmt2->bindParam(':id_libro', $row['id_libro'], PDO::PARAM_INT);
                                $stmt2->execute();
                                if ($stmt2) {
                                    $row2 = $stmt2->fetch(PDO::FETCH_ASSOC);
                                    if ($row2) {
                                        echo '<td>' . $row2['promedio'] . '</td>';
                                    } else {
                                        echo '<td>Sin reseñas</td>';
                                    }
                                }
                                echo '<form action="verDetalles.php" method="post">';
                                echo '<td><input type="submit" name="detalles" value="Ver Detalles">';
                                echo '<input type="hidden" name="libro" value="' . $row['id_libro'] .'"></td>';
                                echo '</form>';
                                echo '</tr>';
                            }
                        }
                        $conn = null;
                    } catch (PDOException $e) {
                        echo "Error: " . $e->getMessage();
                    }
                } else {
                    try {
                        $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
                        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                        $sql = "SELECT * FROM libros WHERE categoria =:categoria";
                        $stmt = $conn->prepare($sql);
                        $stmt->bindParam(':categoria', $_POST['categoria'], PDO::PARAM_STR);
                        $stmt->execute();
                        if ($stmt) {
                            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                                echo '<tr>';
                                echo '<td>' . $row['titulo'] . '</td>';
                                echo '<td>' . $row['autor'] . '</td>';
                                echo '<td>' . $row['categoria'] . '</td>';
                                $sql2 = "SELECT ROUND(SUM(puntuacion) / COUNT(puntuacion), 2) as promedio FROM resenias WHERE id_libro = :id_libro";
                                $stmt2 = $conn->prepare($sql2);
                                $stmt2->bindParam(':id_libro', $row['id_libro'], PDO::PARAM_INT);
                                $stmt2->execute();
                                if ($stmt2) {
                                    $row2 = $stmt2->fetch(PDO::FETCH_ASSOC);
                                    if ($row2) {
                                        echo '<td>' . $row2['promedio'] . '</td>';
                                    } else {
                                        echo '<td>Sin reseñas</td>';
                                    }
                                }
                                echo '<form action="verDetalles.php" method="post">';
                                echo '<td><input type="submit" name="detalles" value="Ver Detalles">';
                                echo '<input type="hidden" name="libro" value="' . $row['id_libro'] .'"></td>';
                                echo '</form>';
                                echo '</tr>';
                            }
                        }
                        $conn = null;
                    } catch (PDOException $e) {
                        echo "Error: " . $e->getMessage();
                    }
                }
                ?>
            </tbody>
        </table>

    <?php
    if (isset($_COOKIE['last'])) {
        echo '<h2>Último Libro Visitado</h2>
                <ul>
                <li>' . $_COOKIE['last'] .  '</li>
                </ul>';
    }
    ?>


</body>

</html>