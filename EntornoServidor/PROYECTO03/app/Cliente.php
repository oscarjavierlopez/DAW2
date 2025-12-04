<?php

namespace Dwes\ProyectoVideoclub;

use ArrayObject;

include_once('exceptions\CupoSuperadoException.php');
include_once('exceptions\SoporteNoEncontradoException.php');

use Dwes\ProyectoVideoclub\Util\CupoSuperadoException;
use Dwes\ProyectoVideoclub\Util\SoporteNoEncontradoException;

class Cliente
{
    public string $nombre;
    private int $numero;
    private array $soportesAlquilados = [];
    private int $numSoportesAlquilados;
    private int $maxAlquilerConcurrente;

    public function __construct($nombre, $numero, $maxAlquilerConcurrente)
    {
        $this->nombre = $nombre;
        $this->numero = $numero;
        $this->maxAlquilerConcurrente = $maxAlquilerConcurrente;
        $this->numSoportesAlquilados = 0;
    }

    public function alquilar($soporte)
    {
        if (count($this->soportesAlquilados) + 1 <= $this->maxAlquilerConcurrente) {
            array_push($this->soportesAlquilados, $soporte);
            $this->numSoportesAlquilados = count($this->soportesAlquilados);
        } else {
            throw new CupoSuperadoException();
        }
    }

    public function tieneAlquilado($soporte)
    {
        for ($i = 0; $i < $this->numSoportesAlquilados; $i++) {
            if ($this->soportesAlquilados[$i]->getNumero() === $soporte->getNumero()) {
                return true;
            }
        }
        return false;
    }

    public function devolver($numSoporte)
    {
        $existsSoporte = false;
        for ($i = 0; $i < count($this->soportesAlquilados); $i++) {
            if ($this->soportesAlquilados[$i]->getNumero() === $numSoporte) {
                $existsSoporte = true;
                unset($this->soportesAlquilados[$i]);
                $this->soportesAlquilados = array_values($this->soportesAlquilados);
                $this->numSoportesAlquilados = count($this->soportesAlquilados);
            }
        }

        if (!$existsSoporte) {
            throw new SoporteNoEncontradoException();
        }
    }

    public function listaAlquileres()
    {
        echo '<ul>';
        for ($i = 0; $i < count($this->soportesAlquilados); $i++) {
            echo '<li> Titulo: ' . $this->soportesAlquilados[$i]->titulo . '</li>';
        }
        echo '</ul>';
    }

    public function muestraResumen()
    {
        echo '<p>Nombre: ' . $this->nombre . '</p>';
        echo '<p>Numero: ' . $this->numero . '</p>';
        print_r($this->soportesAlquilados);
        echo '<p>Soportes alquilados: ' . $this->numSoportesAlquilados . '</p>';
        echo '<p>Max alquiler: ' . $this->maxAlquilerConcurrente . '</p>';
    }

    public function getNumero()
    {
        return $this->numero;
    }
}
