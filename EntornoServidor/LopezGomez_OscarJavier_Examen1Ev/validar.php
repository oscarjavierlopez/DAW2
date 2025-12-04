<?php
session_start();
if (isset($_POST['enviar']) && isset($_POST['correo']) && isset($_POST['password'])) {
    if (!empty($_POST['correo']) && !empty($_POST['password'])) {
        include('variablesBBDD.php');
        try {
            $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "SELECT id_usuario, email, password FROM usuarios WHERE email = :email";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':email', $_POST['correo'], PDO::PARAM_STR);
            $stmt->execute();
            if ($stmt) {
                $row = $stmt->fetch(PDO::FETCH_ASSOC);
                if ($row) {
                    if ($row['password'] === $_POST['password']) {
                        if (!isset($_SESSION['email'])) {
                            $_SESSION['email'] = $row['email'];
                            $_SESSION['id_usuario'] = $row['id_usuario'];
                        }
                        header("Location: libros.php");
                        exit;
                    } else {
                        include('index.php');
                        echo '<p>Contraseña no válida</p>';
                    }
                } else {
                    include('index.php');
                    echo '<p>Usuario no válido</p>';
                }
            } else {
                echo "Error en la consulta.";
            }
            $conn = null;
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    } else {
        include('index.php');
        echo '<p>El email y la contraseña son obligatorios</p>';
    }
}
