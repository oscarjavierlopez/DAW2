<?php
namespace Dwes\ProyectoVideoclub;

include_once('Soporte.php');
use Dwes\ProyectoVideoclub\Soporte;

class CintaVideo extends Soporte
{
    private float $duracion;
    public function __construct($titulo, $numero, $precio, $duracion)
    {
        parent::__construct($titulo, $numero, $precio);
        $this->duracion = $duracion;
    }

    public function muestraResumen()
    {
        echo '<p>' . $this->titulo . '</p>';
        echo '<p>' . $this->numero . '</p>';
        echo '<p>' . $this->getPrecio() . '</p>';
        echo '<p>' . $this->duracion . '</p>';
    }
}


