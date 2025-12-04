<?php

namespace Dwes\ProyectoVideoclub;

include_once('Soporte.php');

use Dwes\ProyectoVideoclub\Soporte;

class Dvd extends Soporte
{
    public array $idiomas;
    private string $formatPantalla;

    public function __construct($titulo, $numero, $precio, $idiomas, $formatPantalla)
    {
        parent::__construct($titulo, $numero, $precio);
        $this->idiomas = $idiomas;
        $this->formatPantalla = $formatPantalla;
    }

    public function muestraResumen()
    {
        echo '<p>' . $this->titulo . '</p>';
        echo '<p>' . $this->numero . '</p>';
        echo '<p>' . $this->getPrecio() . '</p>';
        print_r($this->idiomas);
        echo '<p>' . $this->formatPantalla . '</p>';
    }
}
