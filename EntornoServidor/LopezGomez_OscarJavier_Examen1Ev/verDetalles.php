<?php
if (!isset($_COOKIE['last']) && !isset($_COOKIE['id_libro'])) {
    setcookie('last', 0);
    setcookie('id_libro', 0);
}
session_start();
include('variablesBBDD.php');
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detalles</title>
</head>

<body>
    <?php
    echo '<p>Usuario: ' . $_SESSION['email'] . '</p>';
    ?>
    <a href="cerrarSesion.php">Cerrar Sesión</a>
    <?php
    if (isset($_POST['libro'])) {
        try {
            $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "SELECT titulo, autor, categoria FROM libros WHERE id_libro = :id_libro";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id_libro', $_POST['libro'], PDO::PARAM_INT);
            $stmt->execute();
            if ($stmt) {
                $row = $stmt->fetch(PDO::FETCH_ASSOC);
                setcookie('last', $row['titulo']);
                setcookie('id_libro', $_POST['libro']);
                echo '<h2>Detalles del Libro: ' . $row['titulo'] . '</h2>';
                echo '<p><b>Autor:</b>' . $row['autor'] . '</p>';
                echo '<p><b>Categoría:</b>' . $row['categoria'] . '</p>';
                echo '<h2>Reseñas</h2>';
                echo '<ul>';
                $sql2 = "SELECT usuarios.email as usuario, resenias.puntuacion as puntuacion, resenias.comentario as comentario 
                FROM resenias JOIN usuarios ON resenias.id_usuario = usuarios.id_usuario 
                WHERE resenias.id_libro=:id_libro";
                $stmt2 = $conn->prepare($sql2);
                $stmt2->bindParam(':id_libro', $_POST['libro'], PDO::PARAM_INT);
                $stmt2->execute();
                if ($stmt2) {
                    while ($row2 = $stmt2->fetch(PDO::FETCH_ASSOC)) {
                        echo '<li><b>' . $row2['usuario'] . ':</b> ' . $row2['puntuacion'] . '/5-' . $row2['comentario'];
                    }
                }
                echo '</ul>';
            }
            $conn = null;
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }
    ?>

    <h2>Tu Reseña</h2>
    <form action="" method="post">
        <label for="puntuacion">Puntuacion</label>
        <select name="puntuacion" id="puntuacion">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select><br>
        <label for="comentario">comentario</label>
        <textarea name="comentario" id="comentario"></textarea> <br>
        <input type="submit" name="guardar" value="Guardar Reseña">
    </form>
    <?php
    if (isset($_POST['guardar'])) {
        try {
            $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "SELECT COUNT(id_usuario) as numResenias
             FROM resenias
              WHERE id_libro = :id_libro and id_usuario = :usuario";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':usuario', $_SESSION['id_usuario'], PDO::PARAM_INT);
            $stmt->bindParam(':id_libro', $_COOKIE['id_libro'], PDO::PARAM_STR);
            $stmt->execute();
            if ($stmt) {
                $row = $stmt->fetch(PDO::FETCH_ASSOC);
                if ($row) {
                    if ($row['numResenias'] > 0) {
                        $sql2 = "UPDATE resenias SET puntuacion=:puntuacion, comentario=:comentario, fecha=:fecha WHERE id_libro = :id_libro and id_usuario = :usuario";
                        $stmt2 = $conn->prepare($sql2);
                        $stmt2->bindParam(':usuario', $_SESSION['id_usuario'], PDO::PARAM_INT);
                        $stmt2->bindParam(':id_libro', $_COOKIE['id_libro'], PDO::PARAM_STR);
                        $stmt2->bindParam(':puntuacion', $_POST['puntuacion'], PDO::PARAM_INT);
                        $stmt2->bindParam(':comentario', $_POST['comentario'], PDO::PARAM_STR);
                        $fechaActual = getdate();
                        $fecha = $fechaActual['year'] . "-" . $fechaActual['mon'] . "-" . $fechaActual['mday'];
                        $stmt2->bindParam(':fecha', $fecha, PDO::PARAM_STR);
                        $stmt2->execute();
                    } else {
                        $sql2 = "INSERT INTO resenias (id_usuario, id_libro, puntuacion, comentario, fecha) VALUES (:id_usuario, :id_libro, :puntuacion, :comentario, :fecha)";
                        $stmt2 = $conn->prepare($sql2);
                        $stmt2->bindParam(':id_usuario', $_SESSION['id_usuario'], PDO::PARAM_INT);
                        $stmt2->bindParam(':id_libro', $_COOKIE['id_libro'], PDO::PARAM_STR);
                        $stmt2->bindParam(':puntuacion', $_POST['puntuacion'], PDO::PARAM_INT);
                        $stmt2->bindParam(':comentario', $_POST['comentario'], PDO::PARAM_STR);
                        $fechaActual = getdate();
                        $fecha = $fechaActual['year'] . "-" . $fechaActual['mon'] . "-" . $fechaActual['mday'];
                        $stmt2->bindParam(':fecha', $fecha, PDO::PARAM_STR);
                        $stmt2->execute();
                    }
                }
            }
            $conn = null;
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }
    ?>


    <a href="libros.php"> Volver al Catálogo</a>
</body>

</html>