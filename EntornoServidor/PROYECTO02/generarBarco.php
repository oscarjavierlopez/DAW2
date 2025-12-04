<?php
function generarBarco()
{
    $posiciones = ['vertical', 'horizontal'];
    switch ($posiciones[rand(0, 1)]) {
        case 'vertical':
            $salir = false;
            do {
                $posY = rand(0, 9);
                $posXinicial = rand(0, 6);
                if (
                    $_SESSION['board'][$posXinicial][$posY] === ""
                    && $_SESSION['board'][$posXinicial + 1][$posY] === ""
                    && $_SESSION['board'][$posXinicial + 2][$posY] === ""
                    && $_SESSION['board'][$posXinicial + 3][$posY] === ""
                ) {
                    $salir = true;
                }
            } while (!$salir);
            $_SESSION['board'][$posXinicial][$posY] ="X";
            $_SESSION['board'][$posXinicial + 1][$posY] = "X";
            $_SESSION['board'][$posXinicial + 2][$posY] = "X";
            $_SESSION['board'][$posXinicial + 3][$posY] = "X";
            break;
        case 'horizontal':
            $salir = false;
            do {
                $posX = rand(0, 9);
                $posYinicial = rand(0, 6);
                if (
                    $_SESSION['board'][$posX][$posYinicial] === ""
                    && $_SESSION['board'][$posX][$posYinicial + 1] === ""
                    && $_SESSION['board'][$posX][$posYinicial + 2] === ""
                    && $_SESSION['board'][$posX][$posYinicial + 3] === ""
                ) {
                    $salir = true;
                }
            } while (!$salir);
            $_SESSION['board'][$posX][$posYinicial] = "X";
            $_SESSION['board'][$posX][$posYinicial + 1] = "X";
            $_SESSION['board'][$posX][$posYinicial + 2] = "X";
            $_SESSION['board'][$posX][$posYinicial + 3] = "X";
            break;
    }
}
