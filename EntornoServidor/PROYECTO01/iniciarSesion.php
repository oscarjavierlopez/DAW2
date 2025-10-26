<?php
ob_start();
if (!isset($_COOKIE['remember'])) {
    setcookie("remember", "");
}
session_start();
if (isset($_SESSION["inicio"])) { //Debe estar al principio para en caso de que se agote el tiempo que cierre la sesion
    $sessionTTL = time() - $_SESSION["inicio"];
    $inactividad = 600;
    if ($sessionTTL > $inactividad) {
        session_destroy();
    }
}
if (isset($_SESSION['email'])) {
    header("Location: categorias.php");
    exit;
}
if (!isset($_SESSION['inicio'])) {
    $_SESSION["inicio"] = time();
}




function validarUsuario($email, $clave)
{
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "tienda";
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = "SELECT email, clave, codRestaurante FROM restaurantes WHERE email = :email";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':email', $email, PDO::PARAM_STR);
        $stmt->execute();
        if ($stmt) {
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            if ($row) {
                if (password_verify($clave, $row['clave'])) {
                    $_SESSION['email'] = $email;
                    $_SESSION['codRestaurante'] = $row['codRestaurante']; //almacenamos en la sesion el codRestaurante para cuando se desee ver el carrito
                    $_SESSION["inicio"] = time(); //hacemos que el inicio comience a contar a partir de ahora
                    setcookie('remember', bin2hex($email), time() + 600, "/", "", true, true); //bin2hex() genera token oculto
                    header("Location: categorias.php");
                    exit;
                } else {
                    echo '<p>Contraseña no válida</p>';
                }
            } else {
                echo '<p>email no válido</p>';
            }
        } else {
            echo "Error en la consulta.";
        }
        $conn = null;
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}
?>




<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio de sesión</title>
    <link rel="stylesheet" href="paginas.css">
</head>

<body>
    <nav>
        <h1><a href="index.html">Mercarroña</a></h1>
    </nav>
    <main>

        <form action="" method="post">
            <h2>Login</h2>
            <div class="email">
                <label for="email">Email:</label><br>
                <input type="text" id="email" name="email" required>
            </div>

            <div class="clave">
                <label for="clave">Clave:</label><br>
                <input type="password" name="clave" id="clave" required>
            </div>
            <input type="submit" name="enviar" value="Iniciar Sesion">
            <?php
            if (isset($_POST['enviar'])) {
                validarUsuario($_POST['email'], $_POST['clave']); //para que el mensaje de error me lo muestre en el form debo validar dentro del form
            }
            ?>
        </form>

    </main>
</body>

</html>
<?php ob_end_flush(); ?>