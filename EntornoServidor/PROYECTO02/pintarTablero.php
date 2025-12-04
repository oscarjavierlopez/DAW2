<?php
function pintarTablero()
{
    for ($i = 0; $i < 10; $i++) {
        echo '<tr>';
        for ($j = 0; $j < 10; $j++) {
            if ($_SESSION['estado'][$i][$j] === 0) {
                echo '<td><input type="submit" name="' . $i . $j . '" value="?"></td>';
            } else {
                if ($_SESSION['board'][$i][$j] === "") {
                    echo '<td class="agua"></td>';
                } else {
                    echo '<td class="barco">X</td>';
                }
            }
        }
        echo '</tr>';
    }
}
