<?php
session_start();
header('Content-Type: application/json');
$datos = json_decode(file_get_contents("php://input"), true);
if (isset($datos['codProducto'])) {
    for ($i = 0; $i < count($_SESSION['productos']); $i++) {
        if ($_SESSION['productos'][$i] == $datos['codProducto']) {
            unset($_SESSION['productos'][$i]);
            $_SESSION['productos'] = array_values($_SESSION['productos']); //reindexamos los indices para las siguientes iteraciones
            unset($_SESSION['uds'][$i]);
            $_SESSION['uds'] = array_values($_SESSION['uds']);
        }
    }
    echo json_encode(["estado" => "eliminado"]);
} else {
    echo json_encode(["estado" => "no eliminado"]);
}
