<?php
$errores = [];
if (isset($_POST['enviar'])) {
    if (isset($_POST['dividendo'])) {
        if ($_POST['dividendo'] === " ") {
            array_push($errores, "<p>No hay dividendo</p>");
        } else {
            if ($_POST['dividendo'] >= 1000 or $_POST['dividendo'] < 0) {
                array_push($errores, "<p>El dividendo insertado ha de ser mayor o igual a 0 e inferior a 1000</p>");
            }
        }
    } else {
        array_push($errores, "<p>No hay dividendo</p>");
    }

    if (isset($_POST['divisor'])) {
        if ($_POST['divisor'] === " ") {
            array_push($errores, "<p>No hay divisor</p>");
        } else {
            if ($_POST['divisor'] >= 1000 or $_POST['divisor'] <= 0) {
                array_push($errores, "<p>El divisor insertado ha de ser mayor que 0 e inferior a 1000</p>");
            }
        }
    } else {
        array_push($errores, "<p>No hay divisor</p>");
    }
} else {
    include('calculadora.html');
}

if(count($errores) === 0){
    $cociente = $_POST['dividendo'] / $_POST['divisor'];
    $resto = $_POST['dividendo'] % $_POST['divisor'];
    if($resto === 0){
        echo "<p>La división es exacta y el cociente es:" . $cociente . "</p>";
    }else{
        echo "<p>La división no es exacta. El cociente es: " . $cociente .  " y el resto es: " . $resto . "</p>";
    }
}else{
    echo "<p>ERRORES:</p>";
    for($i = 0; $i < count($errores); $i++){
       echo $errores[$i];
    }
}
