<?php
/*checkdate(month, day, year) => nos permite comprobar si una fecha, que se
pone como argumento, es válida. Si lo es, la función devuelve el valor True
(verdadero). En el caso contrario, devuelve False (falso) */
checkdate(0,25,2000); //False.
checkdate(7,25,2000); //True.

/*date(format, [timestamp]) => devuelve una cadena de texto que refleja una fecha y una hora
formateadas como se indique en el primer parámetro. En el segundo argumento puede
indicarse la fecha que se quiere mostrar utilizando un valor de tipo timestamp(ms desde 1970).
Si no se indica segundo paramero toma la fecha actual.
format puede ser:
• j: El dia del mes (1 to 31)
• n: El número del mes (1 al 12)
• Y: año con cuatro dígitos
• H: horas de 0 a 23
• i: minutos de 00 a 59 */
$fecha = date ("j/n/Y H:i");
print ("$fecha"); //Resultado: 26/9/2005 17:36

/*strtotime(fecha) => devuelve el timestamp(ms desde 1970) de la CADENA pasada */
$timestamp = strtotime("2023-10-26 15:30:00"); //dvevuelve 1698334200

/*mktime(horas,minutos,segundos,mes,día,año) => devuelve el timestamp de un comjunto 
de NUMEROS*/
$timestamp = mktime(15, 30, 0, 10, 26, 2023);

/*getdate() => se usa para extraer información de una fecha dada. Si no se pone
nada, el timestamp es la fecha actual*/
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