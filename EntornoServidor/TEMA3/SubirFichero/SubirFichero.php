<?php
if (
    isset($_FILES['imagen']) &&
    is_uploaded_file($_FILES['imagen']['tmp_name']) //se cumple cuando existe el fichero y tiene contenido, y el usuario lo ha subido
) {
    //se ha enviado un archivo con ese nombre y se ha cargado correctamente
    $nombreTemporal = $_FILES['imagen']['tmp_name'];
    if (is_file($nombreTemporal)) {
        // Si es un archivo, Se moverá a su ubicación deseada
        $directorioDestino = "./"; //me lo lleva a la carpeta en la que estoy
        $nombreArchivo = time() . "-" . $_FILES['imagen']['name'];
        $rutaCompleta = $directorioDestino . $nombreArchivo;
        if (move_uploaded_file(
            $nombreTemporal, //el origen es el nombre temporal con el que está en el servidor
            $rutaCompleta //el destino tendrá el nuevo nombre que le hayamos dado
        )) {
            echo "El archivo se ha subido y movido con éxito.";
        } else {
            echo "Error al mover el archivo.";
        }
    } else {
        echo "Error: El archivo no es válido.";
    }
} else {
    echo "Error: No se recibió un archivo válido.";
}
