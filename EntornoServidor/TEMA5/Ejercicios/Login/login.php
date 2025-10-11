<?php
if (isset($_POST['enviar'])) {
    if (isset($_POST['usuario']) and isset($_POST['contraseña'])) {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database = "usuarios";
        try {
            $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "SELECT nbusuario, contraseña FROM usuarios WHERE nbusuario = :nbusuario";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':nbusuario', $_POST['usuario'], PDO::PARAM_STR);
            $stmt->execute();
            if ($stmt) {
                $row = $stmt->fetch(PDO::FETCH_ASSOC);
                if ($row) {
                    if($row['contraseña'] == $_POST['contraseña']){
                        echo '<h1>Bienvenido a tu zona privada</h1>';
                    }else{
                        echo '<p>contraseña incorrecta</p>';
                    }
                } else {
                    echo "<p>El usuario insertado no existe</p>";
                }
            } else {
                echo "Error en la consulta.";
            }
            $conn = null;
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }
}
