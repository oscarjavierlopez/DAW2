<?php

namespace Dwes\ProyectoVideoclub\Util;
include_once('VideoclubException.php');
use Dwes\ProyectoVideoclub\Util\VideoclubException;

class SoporteNoEncontradoException extends VideoclubException
{
    public function __construct(string $message = "Soporte no encontrado", int $code = 0, \Throwable $previous = null)
    {
        parent::__construct($message, $code, $previous);
    }
}
