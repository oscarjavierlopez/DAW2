<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda online</title>
</head>

<body>
    <h1>Catálogo de productos:</h1>

    <form action="" method="post">
        <input type="checkbox" id="chaqueta" name="catalogo['chaqueta']" value="6.90"> <!-- El value es el valor que toma y la clave es la q va junto al nombre del array -->
        <label for="chaqueta">Chaqueta-6,90€</label><br>
        <input type="checkbox" id="pantalon" name="catalogo['pantalon']" value="12.99">
        <label for="pantalon">Pantalon-12,99€</label><br>
        <input type="checkbox" id="bufanda" name="catalogo['bufanda']" value="3">
        <label for="bufanda">Bufanda-3,00€</label><br>
        <input type="checkbox" id="falda" name="catalogo['falda']" value="10.50">
        <label for="falda">Falda-10,50€</label><br>
        <input type="submit" name="enviar" value="Enviar">
    </form>

    <?php
    if (isset($_POST['enviar'])) {
        if (isset($_POST['catalogo'])) {
            $total = 0;
            $productosSeleccionados = $_POST['catalogo'];
            foreach ($productosSeleccionados as $producto => $precio) {
                $total = $total + $precio;
            }
            echo "<p>Has seleccionado los siguientes productos</p> ";
            echo "<ul>";
            foreach ($productosSeleccionados as $producto => $precio) {
                echo "<li>" . $producto . "-" . $precio . "€</li>";
            }
            echo "</ul>";
            echo "TOTAL: " . $total . "€";
        } else {
            echo "<p>No se ha comprado ningún producto</p>";
            echo "<p>El precio a pagar son 0,00€</p>";
        }
    }
    ?>
</body>

</html>