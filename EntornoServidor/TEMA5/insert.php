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

    $nombre = 'Juan Pérez';
    $email = 'juan@example.com';
    $edad = 30;

    $sql = "INSERT INTO usuarios (nombre, email, edad) VALUES (:nombre, :email, :edad)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':nombre', $nombre, PDO::PARAM_STR); //hay que decirle el tipo de parametro que le pasamos
    $stmt->bindParam(':email', $email, PDO::PARAM_STR);
    $stmt->bindParam(':edad', $edad, PDO::PARAM_INT);

    if ($stmt->execute()) {
        echo "Usuario insertado correctamente";
    } else {
        echo "Error al insertar usuario";
    }
} catch (PDOException $e) {
    // Mostrar mensaje de error si falla la conexión
    die("Conexión fallida: " . $e->getMessage());
}
