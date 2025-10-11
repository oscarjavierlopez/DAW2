<?php
$fecha = getdate();

echo "Hoy es: " . $fecha['mday'] . "/" . $fecha['mon'] . "/" . $fecha['year'] . "<br>";
echo "Hora actual: " . $fecha['hours'] . ":" . $fecha['minutes'] . ":" . $fecha['seconds'];
/* $fecha es un array asociativo q contiene lo siguiente
(
    [seconds] => 0
    [minutes] => 25
    [hours] => 10
    [mday] => 11
    [wday] => 6       // Día de la semana (0 = domingo)
    [mon] => 10
    [year] => 2025
    [yday] => 283     // Día del año
    [weekday] => Saturday
    [month] => October
    [0] => 1768143900 // Timestamp Unix
)
*/
?>