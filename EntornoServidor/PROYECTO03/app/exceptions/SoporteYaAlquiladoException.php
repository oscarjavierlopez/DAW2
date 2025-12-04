<?php

namespace Dwes\ProyectoVideoclub\Util;
include_once('VideoclubException.php');
use Dwes\ProyectoVideoclub\Util\VideoclubException;

class SoporteYaAlquiladoException extends VideoclubException
{
    public function __construct(string $message = "Soporte ya alquilado", int $code = 0, \Throwable $previous = null)
    {
        parent::__construct($message, $code, $previous);
    }
}
