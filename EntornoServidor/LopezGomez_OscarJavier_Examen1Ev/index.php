
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar sesion</title>
</head>
<body>
    <h1>Iniciar Sesión</h1>
    <form action="validar.php" method="post">
        <label for="correo">Correo:</label>
        <input type="mail" id="correo" name="correo"><br>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password"><br>
        <input type="submit" name="enviar" value="Iniciar Sesión">
    </form>
</body>
</html>