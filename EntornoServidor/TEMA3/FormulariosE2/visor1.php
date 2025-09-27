<?php
/*Mostrará los errores arriba de la pantalla y debajo el formulario para volverlo a rellenar*/
$nuevoNombre = ""; //declaro la variable nuevoNombre aquí para poder utilizarla después en <img src>
//gestion de errores
$errores = array();
if (isset($_POST['enviar'])) {
    if (isset($_POST['nombre'])) {
        if (empty($_POST['nombre'])) {
            array_push($errores, "<p>El formulario no contiene nombre</p>"); //con array_push se añade el error en la ultima posicion
        }
    } else {
        echo "No existe el campo nombre en el formulario";
    }

    if (isset($_POST['contraseña'])) {
        if (empty($_POST['contraseña'])) {
            array_push($errores, "<p>El formulario no contiene contraseña</p>");
        }
    } else {
        echo "No existe el campo contraseña en el formulario";
    }

    if (isset($_POST['numPendientes'])) {
        if (empty($_POST['numPendientes'])) {
            array_push($errores, "<p>El formulario no contiene numPendientes</p>");
        }
    } else {
        echo "No existe el campo numPendientes en el formulario";
    }

    if (isset($_POST['asignaturas'])) {
        //El numero de asignaturas pendientes y el contenido del array de asignaturas pendientes debe coincidir
        $pendientes = $_POST['asignaturas'];
        if ($_POST['numPendientes'] != count($pendientes)) {
            array_push($errores, "<p>El numero de asignaturas pendientes marcadas debe coincidir con el valor introducido en el campo numero de asignaturas pendientes</p>");
        }
        if (empty($_POST['asignaturas'])) {
            array_push($errores, "<p>El formulario no contiene asignaturas pendientes</p>");
        }
    } else {
        array_push($errores, "<p>El formulario no contiene  asignaturas pendientes</p>"); //Si no se marca una opcion el input de tipo radio no se envía al formulario por lo tanto si está vacío será porque no se ha marcado
    }

    if (isset($_POST['curso'])) {
        if (empty($_POST['curso'])) {
            array_push($errores, "<p>El formulario no contiene curso</p>");
        }
    } else {
        echo "No existe el campo curso en el formulario";
    }

    if (isset($_POST['fechaNacimiento'])) {
        if (empty($_POST['fechaNacimiento'])) {
            array_push($errores, "<p>El formulario no contiene fechaNacimiento</p>");
        }
    } else {
        echo "No existe el campo fechaNacimiento en el formulario";
    }

    if (isset($_FILES['imagen']) && is_uploaded_file($_FILES['imagen']['tmp_name'])) {
        $nombreTemporal = $_FILES['imagen']['tmp_name'];
        $nombre = $_FILES['imagen']['name'];
        $nuevoNombre = time() . "-" . $nombre;
        $ruta = './' . $nuevoNombre;
        if(!move_uploaded_file($nombreTemporal, $ruta)){
            array_push($errores, "<p>El fichero de imagen no se pudo mover al directorio indicado</p>");
        }
    } else {
        array_push($errores, "<p>El formulario no contiene imágen</p>");
    }
} else {
    include('formulario1.php');
}


/*Lo que haremos si hay errores vs si no los hay*/
if (count($errores) > 0) {
    echo "<p><strong>El formulario presenta los siguientes errores:</strong></p>";
    echo "<ul>";
    for ($i = 0; $i < count($errores); $i++) {
        echo '<li style="color: red;">' . $errores[$i] . '</li>';
    }
    echo "</ul>";
    include('formulario1.php');
} else {
    echo "<p> DATOS INTRODUCIDOS:";
    echo "<p> nombre: " . $_POST['nombre'];
    echo "<p> contraseña: " . $_POST['contraseña'];
    echo "<p> Numero de asignaturas pendientes: " . $_POST['numPendientes'];
    echo "<p> Asignaturas pendientes: ";
    echo "<ul>";
    for ($i = 0; $i < count($pendientes); $i++) {
        echo "<li>$pendientes[$i]</li>";
    }
    echo "</ul>";
    echo "<p> curso: " . $_POST['curso'];
    echo "<p> fecha de nacimiento: " . $_POST['fechaNacimiento'];
    echo "<p>Su imágen es:</p>
    <img src='". $nuevoNombre . "' width='200px'/>";
}
