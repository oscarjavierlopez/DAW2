<?php

namespace Dwes\ProyectoVideoclub;

use BcMath\Number;
use PhpParser\Node\Scalar\Float_;


class Soporte
{
    public string $titulo;
    protected int $numero;
    private float $precio;
    public bool $alquilado;

    public function __construct($titulo, $numero, $precio)
    {
        $this->titulo = $titulo;
        $this->numero = $numero;
        $this->precio = $precio;
        $this->alquilado = false;
    }

    public function getPrecio()
    {
        return $this->precio;
    }

    public function getPrecioConIVA()
    {
        return $this->precio * 1.21;
    }

    public function getNumero(){
        return $this->numero;
    }

    public function muetraResumen(){
        echo '<p>' . $this->titulo . '</p>';        
        echo '<p>' . $this->numero . '</p>';        
        echo '<p>' . $this->precio . '</p>';        
    }
}

