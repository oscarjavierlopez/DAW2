<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>pagina principal</title>
</head>

<body>
    <form action="" method="post">
        <button type="submit" name="login" value="Login">Iniciar sesión</button><br>
        <button type="submit" name="registrarse" value="Registrarse">Registrarse</button>
    </form>
    <?php
    if (isset($_POST['login'])) {
        include('login.html');
    } elseif (isset($_POST['registrarse'])) {
        include('registro.html');
    }
    ?>
</body>

</html>