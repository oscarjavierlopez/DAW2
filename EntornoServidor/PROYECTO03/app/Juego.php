<?php

namespace Dwes\ProyectoVideoclub;

include_once('Soporte.php');
use Dwes\ProyectoVideoclub\Soporte;

class Juego extends Soporte
{
    public string $consola;
    private int $minNumJugadores;
    private int $maxNumJugadores;


    public function __construct($titulo, $numero, $precio, $consola, $minNumJugadores, $maxNumJugadores)
    {
        parent::__construct($titulo, $numero, $precio);
        $this->consola = $consola;
        $this->minNumJugadores = $minNumJugadores;
        $this->maxNumJugadores = $maxNumJugadores;
    }

    public function muestraJugadoresPosibles(){
        echo '<p>Mínimo de jugadores: '. $this->minNumJugadores . '</p>';
        echo '<p>Máximo de jugadores: '. $this->maxNumJugadores . '</p>';
    }

    public function muestraResumen() {
        echo '<p>' . $this->titulo . '</p>';
        echo '<p>' . $this->numero . '</p>';
        echo '<p>' . $this->getPrecio() . '</p>';
        echo '<p>' . $this->consola . '</p>';
        echo '<p>' . $this->minNumJugadores . '</p>';
        echo '<p>' . $this->maxNumJugadores . '</p>';
    }
}



