<?php
ob_start();
session_start();
if (isset($_SESSION["inicio"])) { 
    $sessionTTL = time() - $_SESSION["inicio"];
    $inactividad = 600;
    if ($sessionTTL > $inactividad) {
        session_destroy();
    }
}
if (!isset($_SESSION['email'])) {
    header("Location: iniciarSesion.php"); //si la sesion está cerrada hay que volver a logearse
    exit; //Con exit nos aseguramos de que no siga procesando el documento php
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>categorias</title>
    <link rel="stylesheet" href="paginas.css">
</head>

<body>
    <nav>
        <h1><a href="index.html">Mercarroña</a></h1>
        <ul>
            <li><a href="carrito.php">Carrito</a></li>
            <li><a href="cerrarSesion.php">Cerrar sesión</a></li>
        </ul>
    </nav>
    <main>
        <h2>Lista de categorías</h2>
        <form class="categorias" action="productos.php" method="post">
            <?php
            $servername = "localhost";
            $username = "root";
            $password = "";
            $database = "tienda";
            try {
                $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $sql = "SELECT nombre, codCategoria FROM categorias";
                $stmt = $conn->prepare($sql);
                $stmt->execute();
                if ($stmt) {
                    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                        echo '<input type="submit" name="'. $row["codCategoria"] . '" value="' . $row["nombre"] . '">';
                    }
                } else {
                    echo "Error en la consulta.";
                }
                $conn = null;
            } catch (PDOException $e) {
                echo "Error: " . $e->getMessage();
            }
            ?>
        </form>
    </main>
</body>

</html>
<?php ob_end_flush(); ?>