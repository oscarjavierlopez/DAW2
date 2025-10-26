<!DOCTYPE html>
<html lang="en">
<?php
$errores = 0;
?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .campo {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .error {
            color: red;
        }

        .bar-container {
            width: 100%;
            background-color: #f1f1f1;
            margin: 10px 0;
        }

        .bar {
            height: 30px;
            background-color: #4CAF50;
            text-align: right;
            padding-right: 10px;
            color: white;
        }
    </style>
</head>

<body>
    <form action="" method="post">
        <h1>Alumnos:</h1>
        <p>Ingrese las calificaciones de los siguientes alumnos:</p>

        <label for="Alicia">Alicia:</label><br>
        <div class="campo">
            <input type="text" id="Alicia" name="Alicia1ev" placeholder="nota 1ev"><br>
            <?php
            if (isset($_POST['enviar']) && isset($_POST['Alicia1ev'])) { //convendria hacer esto en todas
                if ($_POST['Alicia1ev'] === "") {
                    echo '<span class = "error">Error-nota no insertada</span>';
                    $errores++;
                } else if ($_POST['Alicia1ev'] < 0 or $_POST['Alicia1ev'] > 10) {
                    echo '<span class = "error">Error-nota no válida</span>';
                    $errores++;
                }
            }
            ?>
        </div>
        <div class="campo">
            <input type="text" id="Alicia" name="Alicia2ev" placeholder="nota 2ev"><br>
            <?php
            if (isset($_POST['enviar'])) {
                if ($_POST['Alicia2ev'] === "") {
                    echo '<span class = "error">Error-nota no insertada</span>';
                    $errores++;
                } else if ($_POST['Alicia2ev'] < 0 or $_POST['Alicia2ev'] > 10) {
                    echo '<span class = "error">Error-nota no válida</span>';
                    $errores++;
                }
            }
            ?>
        </div>

        <label for="Juan">Juan:</label><br>
        <div class="campo">
            <input type="text" id="Juan" name="Juan1ev" placeholder="nota 1ev"><br>
            <?php
            if (isset($_POST['enviar'])) {
                if ($_POST['Juan1ev'] === "") {
                    echo '<span class = "error">Error-nota no insertada</span>';
                    $errores++;
                } else if ($_POST['Juan1ev'] < 0 or $_POST['Juan1ev'] > 10) {
                    echo '<span class = "error">Error-nota no válida</span>';
                    $errores++;
                }
            }
            ?>
        </div>
        <div class="campo">
            <input type="text" id="Juan" name="Juan2ev" placeholder="nota 2ev"><br>
            <?php
            if (isset($_POST['enviar'])) {
                if ($_POST['Juan2ev'] === "") {
                    echo '<span class = "error">Error-nota no insertada</span>';
                    $errores++;
                } else if ($_POST['Juan2ev'] < 0 or $_POST['Juan2ev'] > 10) {
                    echo '<span class = "error">Error-nota no válida</span>';
                    $errores++;
                }
            }
            ?>
        </div>

        <label for="Miguel">Miguel:</label><br>
        <div class="campo">
            <input type="text" id="Miguel" name="Miguel1ev" placeholder="nota 1ev"><br>
            <?php
            if (isset($_POST['enviar'])) {
                if ($_POST['Miguel1ev'] === "") {
                    echo '<span class = "error">Error-nota no insertada</span>';
                    $errores++;
                } else if ($_POST['Miguel1ev'] < 0 or $_POST['Miguel1ev'] > 10) {
                    echo '<span class = "error">Error-nota no válida</span>';
                    $errores++;
                }
            }
            ?>
        </div>
        <div class="campo">
            <input type="text" id="Miguel" name="Miguel2ev" placeholder="nota 2ev"><br>
            <?php
            if (isset($_POST['enviar'])) {
                if ($_POST['Miguel2ev'] === "") {
                    echo '<span class = "error">Error-nota no insertada</span>';
                    $errores++;
                } else if ($_POST['Miguel2ev'] < 0 or $_POST['Miguel2ev'] > 10) {
                    echo '<span class = "error">Error-nota no válida</span>';
                    $errores++;
                }
            }
            ?>
        </div>

        <label for="Ana">Ana:</label><br>
        <div class="campo">
            <input type="text" id="Ana" name="Ana1ev" placeholder="nota 1ev"><br>
            <?php
            if (isset($_POST['enviar'])) {
                if ($_POST['Ana1ev'] === "") {
                    echo '<span class = "error">Error-nota no insertada</span>';
                    $errores++;
                } else if ($_POST['Ana1ev'] < 0 or $_POST['Ana1ev'] > 10) {
                    echo '<span class = "error">Error-nota no válida</span>';
                    $errores++;
                }
            }
            ?>
        </div>
        <div class="campo">
            <input type="text" id="Ana" name="Ana2ev" placeholder="nota 2ev"><br>
            <?php
            if (isset($_POST['enviar'])) {
                if ($_POST['Ana2ev'] === "") {
                    echo '<span class = "error">Error-nota no insertada</span>';
                    $errores++;
                } else if ($_POST['Ana2ev'] < 0 or $_POST['Ana2ev'] > 10) {
                    echo '<span class = "error">Error-nota no válida</span>';
                    $errores++;
                }
            }
            ?>
        </div>
        <input type="submit" name="enviar" value="Enviar">
    </form>

    <?php
    if (isset($_POST['enviar']) and $errores === 0) {
        echo "<h2>Grafico:</h2>";

        $notaAlicia = ($_POST['Alicia1ev'] + $_POST['Alicia2ev']) / 2 * 10;
        echo "<span>Alicia:</span>";
        echo '<div class = "bar-container">';
        echo '<div class="bar" style="width:' . $notaAlicia . '%;"></div>';
        echo '</div>';

        $notaJuan = ($_POST['Juan1ev'] + $_POST['Juan2ev']) / 2 * 10;
        echo "<span>Juan:</span>";
        echo '<div class = "bar-container">';
        echo '<div class="bar" style="width:' . $notaJuan . '%;"></div>';
        echo '</div>';

        $notaMiguel = ($_POST['Miguel1ev'] + $_POST['Miguel2ev']) / 2 * 10;
        echo "<span>Miguel:</span>";
        echo '<div class = "bar-container">';
        echo '<div class="bar" style="width:' . $notaMiguel . '%;"></div>';
        echo '</div>';

        $notaAna = ($_POST['Ana1ev'] + $_POST['Ana2ev']) / 2 * 10;
        echo "<span>Ana:</span>";
        echo '<div class = "bar-container">';
        echo '<div class="bar" style="width:' . $notaAna . '%;"></div>';
        echo '</div>';
    }
    ?>

</body>

</html>