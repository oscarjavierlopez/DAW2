<?php

namespace Dwes\ProyectoVideoclub\Util;
include_once('VideoclubException.php');
use Dwes\ProyectoVideoclub\Util\VideoclubException;

class ClienteNoEncontradoException extends VideoclubException
{
    public function __construct(string $message = "Cliente no encontrado", int $code = 0, \Throwable $previous = null)
    {
        parent::__construct($message, $code, $previous);
    }
}
