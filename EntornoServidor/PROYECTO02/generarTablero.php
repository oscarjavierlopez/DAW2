<?php
function generarTablero($fichero)
{
    for ($i = 0; $i < 10; $i++) {
        for ($j = 0; $j < 10; $j++) {
            $_SESSION['board'][$i][$j] = "";
            $_SESSION['estado'][$i][$j] = 0; //me registra si las casillas están tapadas o destapadas
        }
    }

    //generamos los 4barcos(por fichero o randm)
    if ($fichero['size'] !== 0) { //comprobamos que haya un archivo con contenido
        $nombreTemporal = $fichero['tmp_name'];
        $directorioDestino = "./";
        $nombreArchivo = time() . "-" . $fichero['name'];
        $rutaCompleta = $directorioDestino . $nombreArchivo;
        if (move_uploaded_file($nombreTemporal, $rutaCompleta)) {
            $lineas = file($nombreArchivo);
            if ($lineas) {
                foreach ($lineas as $linea) {
                    $_SESSION['board'][$linea[0]][$linea[1]] = "X";
                    $_SESSION['board'][$linea[3]][$linea[4]] = "X";
                    $_SESSION['board'][$linea[6]][$linea[7]] = "X";
                    $_SESSION['board'][$linea[9]][$linea[10]] = "X";
                }
            }
        }
    } else { //si no hay archivo se generan aleatoriamente las posiciones de los barcos
        for ($i = 0; $i < 4; $i++) {
            generarBarco();
        }
    }
}
