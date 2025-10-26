<?php
session_start();
header('Content-Type: application/json');
function precioTotalPedido() //funcion q calcula el total de todos los artículos
{
    $_SESSION['precios'] = [];
    $precioTotalPedido = 0;
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "tienda";
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        for ($i = 0; $i < count($_SESSION['productos']); $i++) {
            $sql = "SELECT precio FROM productos WHERE codProducto = :codProducto";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':codProducto', $_SESSION['productos'][$i], PDO::PARAM_INT);
            $stmt->execute();
            if ($stmt) {
                $row = $stmt->fetch(PDO::FETCH_ASSOC);
                $precioTotalPedido += $row['precio'] * $_SESSION['uds'][$i];
                $_SESSION['precios'][$i] = $row['precio'];
            } else {
                echo "Error en la consulta.";
            }
        }
        $conn = null;
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
    return $precioTotalPedido;
}

if (count($_SESSION['productos']) > 0) { //solo insertamos un pedido en la bbdd si hay productos en el carrito
    $precioTotalPedido = precioTotalPedido();

    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "tienda";
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $conn->beginTransaction();

        //creacion de nuevo pedido
        $sql = "INSERT INTO pedidos (codRestaurante, fechaPedido, precioTotalPedido) VALUES (:codRestaurante, :fechaPedido, :precioTotalPedido)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':codRestaurante', $_SESSION['codRestaurante'], PDO::PARAM_INT);
        $fechaPedido = date('Y-m-d');
        $stmt->bindParam(':fechaPedido', $fechaPedido, PDO::PARAM_STR);
        $stmt->bindParam(':precioTotalPedido', $precioTotalPedido, PDO::PARAM_STR); //lo ponemos como PARAM_STR para que coja el decimal
        if ($stmt->execute()) {
            //almacenamos el id del pedido que se ha generado en una variable de sesion
            $_SESSION['codPedido'] = $conn->lastInsertId(); //recogemos el ultimo valor de codPedido de la tabla pedidos
        } else {
            throw new Exception("nuevo pedido no registrado");
        }

        //inserción de los productos y sus uds en pedidosproductos
        for ($i = 0; $i < count($_SESSION['productos']); $i++) {
            $sql2 = "INSERT INTO pedidosproductos (codPedido, codProducto, precioProducto, udsProducto) VALUES (:codPedido, :codProducto, :precioProducto, :udsProducto)";
            $stmt2 = $conn->prepare($sql2);
            $stmt2->bindParam(':codPedido', $_SESSION['codPedido'], PDO::PARAM_INT);
            $stmt2->bindParam(':codProducto', $_SESSION['productos'][$i], PDO::PARAM_INT);
            $stmt2->bindParam(':precioProducto', $_SESSION['precios'][$i], PDO::PARAM_STR);
            $stmt2->bindParam(':udsProducto', $_SESSION['uds'][$i], PDO::PARAM_INT);
            if (!$stmt2->execute()) {
                throw new Exception("producto de pedido no registrado");
            }
        }

        //modificacion de stock de productos
        for ($i = 0; $i < count($_SESSION['productos']); $i++) {
            $sql3 = "SELECT stock FROM productos WHERE codProducto = :codProducto";
            $stmt3 = $conn->prepare($sql3);
            $stmt3->bindParam(':codProducto', $_SESSION['productos'][$i], PDO::PARAM_INT);
            $stmt3->execute();
            if ($stmt3) {
                $row = $stmt3->fetch(PDO::FETCH_ASSOC);
                $stock = $row['stock'];
            } else {
                echo "Error en la consulta.";
            }

            if ($stock >= $_SESSION['uds'][$i]) {
                $sql4 = "UPDATE productos SET stock = :nuevoStock WHERE codProducto = :codProducto";
                $stmt4 = $conn->prepare($sql4);
                $nuevoStock = $stock - $_SESSION['uds'][$i];
                $stmt4->bindParam(':nuevoStock', $nuevoStock, PDO::PARAM_INT);
                $stmt4->bindParam(':codProducto', $_SESSION['productos'][$i], PDO::PARAM_INT);
                $stmt4->execute();
            } else {
                throw new Exception("Stock inferior a las unidades pedidas");
            }
        }

        //tras realizar la transacción limpiamos el carrito
        unset($_SESSION['productos']);
        unset($_SESSION['uds']);
        unset($_SESSION['precios']);

        echo json_encode(["estado" => "pedido realizado con éxito"]);
        $conn->commit();
        $conn = null;
    } catch (PDOException $e) {
        $conn->rollBack();
        echo json_encode(["estado" => "error", "mensaje" => $e->getMessage()]);
        $conn = null;
    }
}
