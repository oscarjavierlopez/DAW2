<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Datos personales y academicos</title>
</head>

<body>
    <form action="visor1.php" method="post" enctype="multipart/form-data">
        <label>Nombre de usuario:</label> <br>
        <input type="text" name="nombre"><br>

        <label>Contraseña:</label><br>
        <input type="password" name="contraseña"><br>

        <label for="numPendientes">Número de asignaturas pendientes:</label><br>
        <input type="number" id="numPendientes" name="numPendientes" min="0" max="3" value="0">

        <p>Asignaturas pendientes:</p>
        <input type="checkbox" id="asignatura1" name="asignaturas[]" value="Lengua">
        <label for="asignatura1">Lengua</label>
        <input type="checkbox" id="asignatura2" name="asignaturas[]" value="Matematicas">
        <label for="asignatura2">Matematicas</label>
        <input type="checkbox" id="asignatura3" name="asignaturas[]" value="Historia">
        <label for="asignatura3">Historia</label>

        <p>curso:</p>
        <input type="radio" id="1ESO" name="curso" value="1ESO">
        <label for="1ESO">1ESO</label>
        <input type="radio" id="2ESO" name="curso" value="2ESO">
        <label for="2ESO">2ESO</label>
        <input type="radio" id="3ESO" name="curso" value="3ESO">
        <label for="3ESO">3ESO</label>
        <input type="radio" id="4ESO" name="curso" value="4ESO">
        <label for="4ESO">4ESO</label><br>

        <label for="fechaNacimiento">Fecha de nacimiento</label>
        <input type="date" id="fechaNacimiento" name="fechaNacimiento"><br>

        <label for="imagen">Imagen del alumno:</label>
        <input type="file" id="imagen" name="imagen"><br>

        <input type="submit" name="enviar" value="Enviar">
        <input type="reset" name="resetear" value="Resetear">
    </form>
</body>

</html>