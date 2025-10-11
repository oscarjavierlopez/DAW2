<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "test";
try {
    // Crear conexión
    $conn = new PDO(
        "mysql:host=$servername;dbname=$database",
        $username,
        $password
    );
    // Configurar el modo de error para que lance excepciones
    $conn->setAttribute(
        PDO::ATTR_ERRMODE,
        PDO::ERRMODE_EXCEPTION
    );
    echo "Conexión establecida correctamente <br>";
    // Mostrar información del servidor
    echo $conn->getAttribute(PDO::ATTR_CONNECTION_STATUS) .
        "<br>";
    $conn = null; //cerramos conexion
} catch (PDOException $e) {
    // Mostrar mensaje de error si falla la conexión
    die("Conexión fallida: " . $e->getMessage());
}
