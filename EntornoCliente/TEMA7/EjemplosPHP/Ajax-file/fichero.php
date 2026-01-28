<?php
$ruta = '.\\' . basename($_FILES['archivo']['name']);
if (move_uploaded_file($_FILES['archivo']['tmp_name'], $ruta)) {
    echo json_encode(['name' => $_FILES['archivo']['name']]);
} else {
    echo json_encode(['ERROR' => 'No se pudo subir la imagen']);
}
