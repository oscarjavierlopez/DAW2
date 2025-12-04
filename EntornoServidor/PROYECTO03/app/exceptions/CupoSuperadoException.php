<?php

namespace Dwes\ProyectoVideoclub\Util;
include_once('VideoclubException.php');
use Dwes\ProyectoVideoclub\Util\VideoclubException;

class CupoSuperadoException extends VideoclubException
{
    public function __construct(string $message = "Cupo superado", int $code = 0, \Throwable $previous = null)
    {
        parent::__construct($message, $code, $previous);
    }
}
