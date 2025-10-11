<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "test";
try {
    // Crear conexión usando PDO
    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    // Configurar el modo de errores para que lance excepciones
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // CAMBIA: Definir la consulta con marcador de posición
    $sql = "SELECT id, nombre FROM usuarios WHERE id = :id";
    // CAMBIA: Preparar la consulta
    $stmt = $conn->prepare($sql);
    // CAMBIA: Asignar valor al parámetro :id
    $idBuscado = 1;
    $stmt->bindParam(':id', $idBuscado, PDO::PARAM_INT);
    // CAMBIA: Ejecutar la consulta preparada
    $stmt->execute();
    // CAMBIA: Sustituimos $result por $stmt
    if ($stmt) {
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) { //while solo se pone si esperamos q haya varias coincidencias. si esperamos solo 1 se pone directamente $row$row = $stmt->fetch(PDO::FETCH_ASSOC))
            echo "ID: " . $row["id"] . ", Nombre: " . $row["nombre"] . "<br>"; //$row solo será true si la consulta devuelve algo
        }
    } else {
        echo "Error en la consulta.";
    }
    // Cerrar la conexión
    $conn = null;
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
