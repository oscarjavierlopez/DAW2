<?php
ob_start();
session_start();
if (!isset($_SESSION['inicio'])) {
    $_SESSION["inicio"] = time();
}
$inactividad = 30;
if (isset($_SESSION["inicio"])) {
    $sessionTTL = time() - $_SESSION["inicio"];
    if ($sessionTTL > $inactividad) {
        session_destroy();
    }
}

if (!isset($_COOKIE['nbusuario']) and !isset($_COOKIE['contrasena'])) {
    setcookie("nbusuario", "");
    setcookie("contrasena", "");
}


function validarUsuario($nbusuario, $contrasena)
{
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "login";
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = "SELECT nbusuario, contrasena FROM usuarios WHERE nbusuario = :nbusuario";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nbusuario', $nbusuario, PDO::PARAM_STR);
        $stmt->execute();
        if ($stmt) {
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            if ($row) {
                if (password_verify($contrasena, $row['contrasena'])) {
                    header("Location: pagPersonal.html");
                    exit;
                } else {
                    echo '<p>Contraseña no válida</p>';
                    //si no fuera válido hay que eliminar las cookies creadas
                    setcookie("nbusuario", "", time() - 200);
                    setcookie("contrasena", "", time() - 200);
                    session_unset(); // Limpia todas las variables de sesión
                    session_destroy();
                    $_SESSION = array(); 
                }
            } else {
                echo '<p>Usuario no válido</p>';
                //si no fuera válido hay que eliminar las cookies creadas
                setcookie("nbusuario", "", time() - 200);
                setcookie("contrasena", "", time() - 200);
                session_unset();
                session_destroy();
                $_SESSION = array();
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
    <link rel="stylesheet" href="login.css">
</head>

<body>
    <main>
        <?php
        if (!isset($_SESSION["nbusuario"]) && !isset($_SESSION["contrasena"])) {
            if (!isset($_COOKIE['nbusuario']) and !isset($_COOKIE['contrasena'])) {
                echo '<form action="" method="post">
                    <div class="nbusuario">
                        <label for="usuario">Nombre de usuario:</label><br>
                        <input type="text" id="usuario" name="nbusuario" required>
                    </div>

                    <div class="contrasena">
                        <label for="contrasena">Contraseña:</label><br>
                        <input type="password" name="contrasena" id="contrasena" required>
                    </div>
                    <input type="submit" name="enviar" value="Iniciar Sesion">
                </form> ';
                if (isset($_POST['enviar'])) {
                    $_SESSION["nbusuario"] = $_POST['nbusuario'];
                    $_SESSION["contrasena"] = $_POST['contrasena'];
                    setcookie("nbusuario", $_POST['nbusuario'], time() + 60);
                    setcookie("contrasena", $_POST['contrasena'], time() + 60);
                    validarUsuario($_POST['nbusuario'], $_POST['contrasena']);
                }
            } else {
                echo '<form action="" method="post">
                    <div class="nbusuario">
                        <label for="usuario">Nombre de usuario:</label><br>
                        <input type="text" id="usuario" name="nbusuario" required value="' . $_COOKIE['nbusuario'] . '">
                    </div>

                    <div class="contrasena">
                        <label for="contrasena">Contraseña:</label><br>
                        <input type="password" name="contrasena" id="contrasena" required value="' . $_COOKIE['contrasena'] . '">
                    </div>
                    <input type="submit" name="enviar" value="Iniciar Sesion">
                </form> ';
                if (isset($_POST['enviar'])) {
                    $_SESSION["nbusuario"] = $_POST['nbusuario'];
                    $_SESSION["contrasena"] = $_POST['contrasena'];
                    validarUsuario($_POST['nbusuario'], $_POST['contrasena']);
                }
            }


            if (isset($_POST['enviar'])) {
                $_SESSION["nbusuario"] = $_POST['nbusuario'];
                $_SESSION["contrasena"] = $_POST['contrasena'];
                setcookie("nbusuario", $_POST['nbusuario'], time() + 60);
                setcookie("contrasena", $_POST['contrasena'], time() + 60);
                validarUsuario($_POST['nbusuario'], $_POST['contrasena']);
            }
        } else {
            validarUsuario($_SESSION["nbusuario"], $_SESSION["contrasena"]);
        }
        ?>
    </main>
</body>

</html>
<?php ob_end_flush(); ?>