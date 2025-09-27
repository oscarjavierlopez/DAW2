<!DOCTYPE html>
<html>
<head>
<title>Resultado de la Selección de Colores</title>
</head>
<body>
<h2>Colores Favoritos Seleccionados:</h2>
<?php
if (isset($_POST['colores']) &&
!empty($_POST['colores'])){
$colores = $_POST['colores'];
echo "<ul>";
foreach($colores as $nombre => $valor){ {
echo "<li>$valor</li>";
}
echo "</ul>";
} else {
echo "No has seleccionado ningún color favorito.";
}
?>
</body>
</html>