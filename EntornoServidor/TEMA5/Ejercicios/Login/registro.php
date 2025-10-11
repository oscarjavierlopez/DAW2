<?php
if (isset($_POST['enviar'])) {
    if (isset($_POST['nombre']) and isset($_POST['usuario']) and isset($_POST['contraseña'])) {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database = "usuarios";
        try {
            $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "INSERT INTO usuarios (nombre, nbusuario, contraseña) VALUES (:nombre, :nbusuario, :contraseña)";
            $stmt = $conn->prepare($sql);
            $nombre = $_POST['nombre'];
            $nbusuario = $_POST['usuario'];
            $contraseña = $_POST['contraseña'];
            $stmt->bindParam(':nombre', $nombre, PDO::PARAM_STR);
            $stmt->bindParam(':nbusuario', $nbusuario, PDO::PARAM_STR);
            $stmt->bindParam(':contraseña', $contraseña, PDO::PARAM_STR);
            if ($stmt->execute()) {
                echo "Usuario insertado correctamente";
            } else {
                echo "Error al insertar usuario";
            }
            $conn = null;
        } catch (PDOException $e) {
            if ($e->getCode() == 23000) {
                echo "El nombre de usuario o la contrasña ya existen, por favor elija otros.";
            } else {
                die("Conexión fallida: " . $e->getMessage());
            }
        }
    }
}
