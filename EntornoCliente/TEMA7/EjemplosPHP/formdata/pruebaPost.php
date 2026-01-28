<?php
echo json_encode([
    ['nombre' => $_POST['nombre'], 'edad' => $_POST['edad']],
    ['nombre' => 'Abelino', 'edad' => 80]
]);
