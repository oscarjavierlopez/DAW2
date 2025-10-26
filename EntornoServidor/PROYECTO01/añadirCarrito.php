<?php
session_start();
header('Content-Type: application/json');
$datos = json_decode(file_get_contents("php://input"), true);
if (isset($datos['codProducto']) && isset($datos['unidades'])) {
    //comprobamos que las unidades estén entre 1 y stock para añadir un producto al carrito
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "tienda";
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = "SELECT stock FROM productos WHERE codProducto = :codProducto";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':codProducto', $datos['codProducto'], PDO::PARAM_INT);
        $stmt->execute();
        if ($stmt) {
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $stock = $row['stock'];
        } else {
            echo "Error en la consulta.";
        }
        $conn = null;
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
    if ($datos['unidades'] > 0 && $datos['unidades'] <= $stock) {
        if (!isset($_SESSION['productos']) && !isset($_SESSION['uds'])) { //inicializamos las variables productos y uds si no están creadas
            $_SESSION['productos'] = [];
            $_SESSION['uds'] = [];
        }

        if (in_array($datos['codProducto'], $_SESSION['productos'])) { //comproamos que el codigo de producto no esté ya en $_SESSION['productos']
            for ($i = 0; $i < count($_SESSION['productos']); $i++) {
                if ($_SESSION['productos'][$i] == $datos['codProducto']) { //si el codigo ya está en el array se modifican las unidades
                    $_SESSION['uds'][$i] = $_SESSION['uds'][$i] + $datos['unidades'];
                }
            }
        } else {
            //si el codigoProducto no está añadimos los productos al carrito
            array_push($_SESSION['productos'], $datos['codProducto']);
            array_push($_SESSION['uds'], $datos['unidades']);
        }
        echo json_encode(["estado" => "añadido"]);
    } else {
        echo json_encode(["estado" => "no añadido"]);
    }
} else {
    echo json_encode(["estado" => "no añadido"]);
}
