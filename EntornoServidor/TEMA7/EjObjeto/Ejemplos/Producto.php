<?php

namespace EjObjeto\Ejemplos;

const IVA = 0.21;

class Producto
{
    private string $nombre;

    public function __construct($nombre)
    {
        $this->nombre = $nombre;
    }

    public function getNombre(): string
    {
        return $this->nombre;
    }
}
