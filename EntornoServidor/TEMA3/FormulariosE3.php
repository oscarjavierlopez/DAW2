<!DOCTYPE html>
<html lang="en">
<?php
$numErrores = 0;
?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Datos personales y academicos</title>
    <style>
        .campo {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .error {
            color: red;
        }
    </style>
</head>

<body>
    <form action="" method="post">
        <label>Nombre de usuario:</label> <br>
        <div class="campo">
            <input type="text" name="nombre"><br>
            <?php
            if (isset($_POST['enviar']) && empty($_POST['nombre'])) {
                echo '<span class= "error">campo vacío</span>';
                $numErrores++;
            }
            ?>
        </div>

        <label>Contraseña:</label><br>
        <div class="campo">
            <input type="password" name="contraseña"><br>
            <?php
            if (isset($_POST['enviar']) && empty($_POST['contraseña'])) {
                echo '<span class= "error">campo vacío</span>';
                $numErrores++;
            }
            ?>
        </div>

        <label for="numPendientes">Número de asignaturas pendientes:</label><br>
        <div class="campo">
            <input type="number" id="numPendientes" name="numPendientes" min="0" max="3" value="0">
            <?php
            if (isset($_POST['enviar']) && $_POST['numPendientes'] === '') { //como el min valor es 0 y empty considera el 0 como vacío comparamos $_POST['numPendientes'] con cadena vacía
                echo '<span class= "error">campo vacío</span>';
                $numErrores++;
            }
            ?>
        </div>

        <p>Asignaturas pendientes:</p>
        <div class="campo">
            <input type="checkbox" id="asignatura1" name="asignaturas[]" value="Lengua">
            <label for="asignatura1">Lengua</label>
            <input type="checkbox" id="asignatura2" name="asignaturas[]" value="Matematicas">
            <label for="asignatura2">Matematicas</label>
            <input type="checkbox" id="asignatura3" name="asignaturas[]" value="Historia">
            <label for="asignatura3">Historia</label>
            <?php
            if (isset($_POST['enviar']) && $_POST['numPendientes'] > 0 && !isset($_POST['asignaturas'])) { //comprobamos que no esté vacio con isset porque si esta vacio no lo manda al php
                echo '<span class= "error">campo vacío</span>';
                $numErrores++;
            }

            if(isset($_POST['enviar']) && isset($_POST['asignaturas']) && ($_POST['numPendientes'] != count($_POST['asignaturas']))){
                echo '<span class= "error">El número de asignaturas seleccionadas debe coincidir con el número de asignaturas pendientes</span>';
                $numErrores++;
            }
            ?>
        </div>

        <p>curso:</p>
        <div class="campo">
            <input type="radio" id="1ESO" name="curso" value="1ESO">
            <label for="1ESO">1ESO</label>
            <input type="radio" id="2ESO" name="curso" value="2ESO">
            <label for="2ESO">2ESO</label>
            <input type="radio" id="3ESO" name="curso" value="3ESO">
            <label for="3ESO">3ESO</label>
            <input type="radio" id="4ESO" name="curso" value="4ESO">
            <label for="4ESO">4ESO</label><br>
            <?php
            if (isset($_POST['enviar']) && !isset($_POST['curso'])) {
                echo '<span class= "error">campo vacío</span>';
                $numErrores++;
            }
            ?>
        </div>

        <label for="fechaNacimiento">Fecha de nacimiento</label>
        <div class="campo">
            <input type="date" id="fechaNacimiento" name="fechaNacimiento"><br>
            <?php
            if (isset($_POST['enviar']) && empty($_POST['fechaNacimiento'])) {
                echo '<span class= "error">campo vacío</span>';
                $numErrores++;
            }
            ?>
        </div>

        <input type="submit" name="enviar" value="Enviar">
        <input type="reset" name="resetear" value="Resetear">
    </form>

    <?php
    if (isset($_POST['enviar']) && $numErrores == 0) {
        echo "<p> DATOS INTRODUCIDOS:";
        echo "<p> nombre: " . $_POST['nombre'];
        echo "<p> contraseña: " . $_POST['contraseña'];
        echo "<p> Numero de asignaturas pendientes: " . $_POST['numPendientes'];
        if ($_POST['numPendientes'] > 0) {
            echo "<p> Asignaturas pendientes: ";
            $pendientes = $_POST['asignaturas'];
            echo "<ul>";
            for ($i = 0; $i < count($pendientes); $i++) {
                echo "<li>$pendientes[$i]</li>";
            }
            echo "</ul>";
        }
        echo "<p> curso: " . $_POST['curso'];
        echo "<p> fecha de nacimiento: " . $_POST['fechaNacimiento'];
    }
    ?>
</body>

</html>