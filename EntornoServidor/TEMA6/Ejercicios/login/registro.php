<?php
ob_start();
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>registro</title>
    <link rel="stylesheet" href="login.css">
</head>

<body>
    <main>
        <form action="" method="post">
            <div class="nbusuario">
                <label for="usuario">Nombre de usuario:</label><br>
                <input type="text" id="usuario" name="nbusuario" required>
            </div>

            <div class="contrasena">
                <label for="contrasena">Contraseña:</label><br>
                <input type="password" name="contrasena" id="contrasena" required>
            </div>
            <input type="submit" name="enviar" value="registrarse">
        </form>
    </main>
</body>


<?php
if (isset($_POST['enviar']) and isset($_POST['contrasena']) and isset($_POST['nbusuario'])) {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "login";
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = "INSERT INTO usuarios (nbusuario, contrasena) VALUES (:nbusuario, :contrasena)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nbusuario', $_POST['nbusuario'], PDO::PARAM_STR);
        $stmt->bindParam(':contrasena', password_hash($_POST['contrasena'], PASSWORD_DEFAULT), PDO::PARAM_STR);
        if ($stmt->execute()) {
            header("Location: index.html");
            exit;
        } else {
            echo "Error al insertar usuario";
        }
        $conn = null;
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}
?>

</html>
<?php ob_end_flush(); ?>