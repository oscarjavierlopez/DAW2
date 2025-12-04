<?php

namespace Dwes\ProyectoVideoclub;

include_once('CintaVideo.php');
include_once('Dvd.php');
include_once('Juego.php');
include_once('Cliente.php');

include_once('exceptions\CupoSuperadoException.php');
include_once('exceptions\SoporteNoEncontradoException.php');
include_once('exceptions\ClienteNoEncontradoException.php');
include_once('exceptions\SoporteYaAlquiladoException.php');


use Dwes\ProyectoVideoclub\CintaVideo;
use Dwes\ProyectoVideoclub\CintaVideo as PROYECTO03CintaVideo;
use Dwes\ProyectoVideoclub\Dvd;
use Dwes\ProyectoVideoclub\Dvd as PROYECTO03Dvd;
use Dwes\ProyectoVideoclub\Juego;
use Dwes\ProyectoVideoclub\Cliente;
use Dwes\ProyectoVideoclub\Cliente as PROYECTO03Cliente;
use Dwes\ProyectoVideoclub\Juego as PROYECTO03Juego;
use Dwes\ProyectoVideoclub\Util\ClienteNoEncontradoException;
use Dwes\ProyectoVideoclub\Util\SoporteNoEncontradoException;
use Dwes\ProyectoVideoclub\Util\SoporteYaAlquiladoException;
use Exception;

class Videoclub
{
    private string $nombre;
    private array $productos;
    private int  $numProductos;
    private array $socios;
    private int $numSocios;
    private $numProductosAlquilados;
    private $numTotalAlquileres;

    public function __construct($nombre)
    {
        $this->nombre = $nombre;
        $this->numProductos = 0;
        $this->numSocios = 0;
        $this->socios = [];
        $this->productos = [];
        $this->numProductosAlquilados = 0;
        $this->numTotalAlquileres = 0;
    }

    public function getNumProductosAlquilados()
    {
        return $this->numProductosAlquilados;
    }

    public function getNumTotalAlquileres()
    {
        return $this->numTotalAlquileres;
    }

    public function incluirProducto($producto)
    {
        array_push($this->productos, $producto);
        $this->numProductos++;
    }

    public function incluirCintaVideo($titulo, $numero, $precio, $duracion)
    {
        array_push($this->productos, new PROYECTO03CintaVideo($titulo, $numero,  $precio, $duracion));
        $this->numProductos++;
    }

    public function incluirDVD($titulo, $numero, $precio, $idiomas, $pantalla)
    {
        array_push($this->productos, new PROYECTO03Dvd($titulo, $numero,  $precio, $idiomas, $pantalla));
        $this->numProductos++;
    }

    public function incluirJuego($titulo, $numero, $precio, $consola, $minJ, $maxJ)
    {
        array_push($this->productos, new PROYECTO03Juego($titulo, $numero,  $precio, $consola, $minJ, $maxJ));
        $this->numProductos++;
    }

    public function incluirSocio($nombre, $numero, $maxAlqConcurrentes = 3)
    {
        array_push($this->socios, new PROYECTO03Cliente($nombre, $numero, $maxAlqConcurrentes));
        $this->numSocios++;
    }

    public function listarProductos()
    {
        echo '<strong>Productos:</strong>';
        echo '<ul>';
        for ($i = 0; $i < $this->numProductos; $i++) {
            echo '<li>' . $this->productos[$i]->titulo . '</li>';
        }
        echo '</ul>';
    }

    public function listarSocios()
    {
        echo '<strong>Clientes:</strong>';
        echo '<ul>';
        for ($i = 0; $i < $this->numSocios; $i++) {
            echo '<li>' . $this->socios[$i]->nombre . '</li>';
        }
        echo '</ul>';
    }

    public function alquilarSocioProducto($numCliente, $numSoporte)
    {
        try {
            $existSoporte = false;
            $existsCliente = false;
            for ($i = 0; $i < $this->numSocios; $i++) {
                if ($this->socios[$i]->getNumero() === $numCliente) {
                    $existsCliente = true;
                    for ($j = 0; $j < $this->numProductos; $j++) {
                        if ($this->productos[$j]->getNumero() === $numSoporte) {
                            $existSoporte = true;
                            if ($this->productos[$j]->alquilado === true) {
                                throw new SoporteYaAlquiladoException();
                            } else {
                                $this->socios[$i]->alquilar($this->productos[$j]);
                                $this->productos[$j]->alquilado = true;
                                $this->numProductosAlquilados++;
                                $this->numTotalAlquileres++;
                            }
                        }
                    }
                }
            }

            if (!$existsCliente) {
                throw new ClienteNoEncontradoException();
            }

            if (!$existSoporte) {
                throw new SoporteNoEncontradoException();
            }
        } catch (Exception $e) {
            echo '<p><strong>ERROR: </strong>' . strtoupper($e->getMessage()) . '</p>';
        }
    }

    public function alquilarSocioProductos($numCliente, $numerosProductos)
    {
        try {
            $existsCliente = false;
            for ($i = 0; $i < $this->numSocios; $i++) {
                if ($this->socios[$i]->getNumero() === $numCliente) {
                    $existsCliente = true;
                    //Comprobacion de que NINGUNO de los soportes esté ya alquilado
                    for ($j = 0; $j < $this->numProductos; $j++) {
                        for ($k = 0; $k < count($numerosProductos); $k++) {
                            if ($this->productos[$j]->getNumero() === $numerosProductos[$k]) {
                                if ($this->productos[$j]->alquilado === true) {
                                    throw new SoporteYaAlquiladoException();
                                }
                            }
                        }
                    }

                    //Comprobacion de que todos existen
                    for ($j = 0; $j < count($numerosProductos); $j++) {
                        $exist = false;
                        for ($k = 0; $k < $this->numProductos; $k++) {
                            if ($this->productos[$k]->getNumero() === $numerosProductos[$j]) {
                                $exist = true;
                                break;
                            }
                        }
                        if (!$exist) {
                            throw new SoporteNoEncontradoException();
                        }
                    }

                    //Alquiler si no se cumplen las 2 condiciones anteriores
                    for ($j = 0; $j < $this->numProductos; $j++) {
                        for ($k = 0; $k < count($numerosProductos); $k++) {
                            if ($this->productos[$j]->getNumero() === $numerosProductos[$k]) {
                                $this->socios[$i]->alquilar($this->productos[$j]);
                                $this->productos[$j]->alquilado = true;
                                $this->numProductosAlquilados++;
                                $this->numTotalAlquileres++;
                            }
                        }
                    }
                }
            }

            if (!$existsCliente) {
                throw new ClienteNoEncontradoException();
            }
        } catch (Exception $e) {
            echo '<p><strong>ERROR: </strong>' . strtoupper($e->getMessage()) . '</p>';
        }
    }

    public function devolverSocioProducto($numCliente, $numSoporte)
    {
        try {
            $existSoporte = false;
            $existsCliente = false;
            for ($i = 0; $i < $this->numSocios; $i++) {
                if ($this->socios[$i]->getNumero() === $numCliente) {
                    $existsCliente = true;
                    for ($j = 0; $j < $this->numProductos; $j++) {
                        if ($this->productos[$j]->getNumero() === $numSoporte) {
                            $existSoporte = true;
                            $this->productos[$j]->alquilado = false;
                            $this->socios[$i]->devolver($this->productos[$j]->getNumero());
                            $this->numProductosAlquilados--;
                        }
                    }
                }
            }

            if (!$existsCliente) {
                throw new ClienteNoEncontradoException();
            }

            if (!$existSoporte) {
                throw new SoporteNoEncontradoException();
            }
        } catch (Exception $e) {
            echo '<p><strong>ERROR: </strong>' . strtoupper($e->getMessage()) . '</p>';
        }
    }

    public function devolverSocioProductos($numCliente, $numsSoporte)
    {
        try {
            $existsCliente = false;
            for ($i = 0; $i < $this->numSocios; $i++) {
                if ($this->socios[$i]->getNumero() === $numCliente) {
                    $existsCliente = true;
                    for ($j = 0; $j < count($numsSoporte); $j++) {
                        for ($k = 0; $k < $this->numProductos; $k++) {
                            if ($this->productos[$k]->getNumero() === $numsSoporte[$j]) {
                                $this->socios[$i]->devolver($numsSoporte[$j]);
                                $this->productos[$k]->alquilado = false;
                                $this->numProductosAlquilados--;
                            }
                        }
                    }
                }
            }

            if (!$existsCliente) {
                throw new ClienteNoEncontradoException();
            }
        } catch (Exception $e) {
            echo '<p><strong>ERROR: </strong>' . strtoupper($e->getMessage()) . '</p>';
        }
    }
}
