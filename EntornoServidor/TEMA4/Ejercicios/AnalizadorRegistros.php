<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Analizador de registros</title>
</head>

<body>
    <?php
    $registros = [
        "Oscar|login|2025-10-10 08:15:00",
        "Lucia|upload|2025-10-10 08:45:00",
        "Oscar|logout|2025-10-10 09:00:00",
        "Lucia|login|2025-10-11 10:00:00",
        "Oscar|upload|2025-10-11 10:30:00",
        "Lucia|logout|2025-10-11 11:00:00",
        "Oscar|login|2025-10-12 08:00:00"
    ];
    $registros2 = [];
    $registrosAsociativo = [];
    for ($i = 0; $i < count($registros); $i++) {
        $registros2 = explode("|", $registros[$i]);
        $nombre = 'nombre' . $i;
        $accion = 'accion' . $i;
        $fecha = 'fecha' . $i;
        $registrosAsociativo[$nombre] = $registros2[0];
        $registrosAsociativo[$accion] = $registros2[1];
        $registrosAsociativo[$fecha] = $registros2[2];
    }
    $fechaActual = date("Y-n-j");
    echo '<p>Registros de hoy:</p>';
    for($i = 0; $i < 7; $i++){
        $claveFecha = 'fecha' . $i;
        $claveNombre = 'nombre' . $i;
        $claveAccion = 'accion' . $i;
        $fecha = date("Y-n-j",strtotime($registrosAsociativo[$claveFecha]));
        if($fecha === $fechaActual){
            echo '<p>Registro:</p>';
            echo '<p>Nombre:' . $registrosAsociativo[$claveNombre] . '</p>';
            echo '<p>Accion:' . $registrosAsociativo[$claveAccion] . '</p>';
            echo '<p>Fecha:' . $registrosAsociativo[$claveFecha] . '</p>';
        }
    }
    ?>
</body>

</html>