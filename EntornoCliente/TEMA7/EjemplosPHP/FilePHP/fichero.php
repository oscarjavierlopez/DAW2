<?php
$ruta = '.\\' . basename($_FILES['archivo']['name']);
if (move_uploaded_file($_FILES['archivo']['tmp_name'], $ruta)) {
    echo '<h1>Se ha subido el fichero' . $ruta . '</h1>';
} else {
    echo '<h1>ERROR</h1>';
}
