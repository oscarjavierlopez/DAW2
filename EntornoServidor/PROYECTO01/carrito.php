<?php
session_start();

if (isset($_SESSION["inicio"])) {
    $sessionTTL = time() - $_SESSION["inicio"];
    $inactividad = 600;
    if ($sessionTTL > $inactividad) {
        session_destroy();
    }
}
if (!isset($_SESSION['email'])) {
    header("Location: iniciarSesion.php");
    exit;
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>carrito</title>
    <link rel="stylesheet" href="paginas.css">
    <script src="carrito.js" defer></script>
</head>

<body>
    <nav>
        <h1><a href="index.html">Mercarroña</a></h1>
        <ul>
            <li><a href="categorias.php">Categorías</a></li>
            <li><a href="cerrarSesion.php">Cerrar sesión</a></li>
        </ul>
    </nav>

    <main>
        <h2>Carrito de la compra</h2>
        <?php
        if (isset($_SESSION['productos'])) {
            if (count($_SESSION['productos']) > 0) {
                echo '<table>
            <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Unidades</th>
                <th></th>
            </tr>';
                for ($i = 0; $i < count($_SESSION['productos']); $i++) {
                    $servername = "localhost";
                    $username = "root";
                    $password = "";
                    $database = "tienda";
                    try {
                        $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
                        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                        $sql = "SELECT nombre, descripcion, precio FROM productos WHERE codProducto = :codProducto";
                        $stmt = $conn->prepare($sql);
                        $stmt->bindParam(':codProducto', $_SESSION['productos'][$i], PDO::PARAM_INT);
                        $stmt->execute();
                        if ($stmt) {
                            $row = $stmt->fetch(PDO::FETCH_ASSOC);
                            if ($row) {
                                echo '<tr>';
                                echo '<td>' . $row['nombre'] . '</td>';
                                echo '<td>' . $row['descripcion'] . '</td>';
                                echo '<td>' . $row['precio'] . '</td>';
                                echo '<td>' . $_SESSION['uds'][$i] . '</td>';
                                echo '<td> <button type="button" id="' . $_SESSION['productos'][$i] . '">Eliminar</td>';
                                echo '</tr>';
                            }
                        } else {
                            echo "Error en la consulta.";
                        }
                        $conn = null;
                    } catch (PDOException $e) {
                        echo "Error: " . $e->getMessage();
                    }
                }
                echo '</table>';
                echo '<button type="button" id="realizarPedido">Realizar pedido</button>';
            } else {
                echo '<p>El carrito está vacío</p>';
            }
        } else {
            echo '<p>El carrito está vacío</p>';
        }
        ?>
    </main>
</body>

</html>