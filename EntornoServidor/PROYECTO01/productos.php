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
    header("Location: iniciarSesion.php");
    exit;
}




function consultarProductos($codCategoria)
{
    echo '<h2>' . $_POST[$codCategoria] . '</h2>';
    echo '<table>
    <tr>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Precio</th>
        <th>Stock</th>
        <th>Unidades</th>
        <th></th>
    </tr>';
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "tienda";
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = "SELECT codProducto, nombre, descripcion, precio, stock FROM productos WHERE codCategoria = :codCategoria";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':codCategoria', $codCategoria, PDO::PARAM_INT);
        $stmt->execute();
        if ($stmt) {
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                echo '<tr>';
                echo '<td>' . $row['nombre'] . '</td>';
                echo '<td>' . $row['descripcion'] . '</td>';
                echo '<td>' . $row['precio'] . '</td>';
                if (isset($_SESSION['productos']) && in_array($row["codProducto"], $_SESSION['productos'])) {
                    for ($i = 0; $i < count($_SESSION['productos']); $i++) {
                        if ($row["codProducto"] === $_SESSION['productos'][$i]) {
                            $unidades = $row['stock'] - $_SESSION['uds'][$i];
                            echo '<td>' . $unidades;
                            if ($unidades < 5) {
                                echo ' ¡SOLO QUEDAN ' . $unidades . '!</td>';
                            }
                        }
                    }
                } else {
                    echo '<td>' . $row['stock'];
                    if ($row['stock'] < 5) {
                        echo ' ¡SOLO QUEDAN ' . $row['stock'] . '!</td>';
                    }
                }
                echo '<td><input type="number" min="0" max="' . $row['stock'] . '" id="' . $row["codProducto"] . '"></td>';
                echo '<td><button type="button" id="' . $row["codProducto"] . '">comprar</button></td>';
                echo '</tr>';
            }
        } else {
            echo "Error en la consulta.";
        }
        $conn = null;
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
    echo '</table>';
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>productos</title>
    <link rel="stylesheet" href="paginas.css">
    <script src="productos.js" defer></script>
</head>

<body>
    <nav>
        <h1><a href="index.html">Mercarroña</a></h1>
        <ul>
            <li><a href="categorias.php">Categorías</a></li>
            <li><a href="carrito.php">Carrito</a></li>
            <li><a href="cerrarSesion.php">Cerrar sesión</a></li>
        </ul>
    </nav>
    <main class="productos">
        <?php
        if (isset($_POST[1])) {
            consultarProductos(1);
        } elseif (isset($_POST[2])) {
            consultarProductos(2);
        } elseif (isset($_POST[3])) {
            consultarProductos(3);
        } elseif (isset($_POST[4])) {
            consultarProductos(4);
        } elseif (isset($_POST[5])) {
            consultarProductos(5);
        }
        ?>
    </main>
</body>

</html>
<?php ob_end_flush(); ?>