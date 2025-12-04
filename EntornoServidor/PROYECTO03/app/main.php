<?php
include_once('Videoclub.php');
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
use Dwes\ProyectoVideoclub\Videoclub;
use Dwes\ProyectoVideoclub\Util\ClienteNoEncontradoException;
use Dwes\ProyectoVideoclub\Util\SoporteNoEncontradoException;
use Dwes\ProyectoVideoclub\Util\SoporteYaAlquiladoException;

$elReyLeon = new CintaVideo('el rey leon', 1, 12.99, 3);
$elReyLeon->muestraResumen();
$videoClub = new Videoclub('Videoclub paco');
$videoClub->incluirProducto($elReyLeon);
$videoClub->incluirDVD('Barbie en la nieve', 2, 12.99, ['ES', 'EN'], 'movil');
$videoClub->incluirSocio('Oscar', 1);
$videoClub->alquilarSocioProductos(1, [1, 2]);
$videoClub->incluirSocio('Pepe', 2);
$videoClub->devolverSocioProducto(1, 1);
$videoClub->alquilarSocioProducto(2, 1);
$videoClub->listarProductos();
$videoClub->listarSocios();
echo '<p>Num productos alquilados ahora:' . $videoClub->getNumProductosAlquilados() . '<p>';
echo '<p>Num productos alquilados desde que abrió el videoclub:' . $videoClub->getNumTotalAlquileres() . '</p>';


/*
//Prueba de SoporteNoEncontrado
$elReyLeon = new CintaVideo('el rey leon', 1, 12.99, 3);
$videoClub = new Videoclub('Videoclub paco');
$videoClub->incluirProducto($elReyLeon);
$videoClub->incluirDVD('Barbie en la nieve', 2, 12.99, ['ES', 'EN'], 'movil');
$videoClub->incluirSocio('Oscar', 1);
$videoClub->alquilarSocioProductos(1, [1, 2, 3]);
echo '<p>Num productos alquilados ahora:' . $videoClub->getNumProductosAlquilados() . '<p>';
echo '<p>Num productos alquilados desde que abrió el videoclub:' . $videoClub->getNumTotalAlquileres() . '</p>';
*/

/*
//Prueba de SoporteYaAlquilado
$elReyLeon = new CintaVideo('el rey leon', 1, 12.99, 3);
$videoClub = new Videoclub('Videoclub paco');
$videoClub->incluirProducto($elReyLeon);
$videoClub->incluirDVD('Barbie en la nieve', 2, 12.99, ['ES', 'EN'], 'movil');
$videoClub->incluirSocio('Oscar', 1);
$videoClub->alquilarSocioProductos(1, [1, 2]);
$videoClub->incluirSocio('Pepe', 2);
$videoClub->alquilarSocioProducto(2, 1);
echo '<p>Num productos alquilados ahora:' . $videoClub->getNumProductosAlquilados() . '<p>';
echo '<p>Num productos alquilados desde que abrió el videoclub:' . $videoClub->getNumTotalAlquileres() . '</p>';
*/

/*
//Prueba de CupoSuperado
$elReyLeon = new CintaVideo('el rey leon', 1, 12.99, 3);
$videoClub = new Videoclub('Videoclub paco');
$videoClub->incluirProducto($elReyLeon);
$videoClub->incluirDVD('Barbie en la nieve', 2, 12.99, ['ES', 'EN'], 'movil');
$videoClub->incluirSocio('Oscar', 1, 1);
$videoClub->alquilarSocioProductos(1, [1, 2]);
echo '<p>Num productos alquilados ahora:' . $videoClub->getNumProductosAlquilados() . '<p>';
echo '<p>Num productos alquilados desde que abrió el videoclub:' . $videoClub->getNumTotalAlquileres() . '</p>';
*/

/*
//prueba de ClienteNoEncontrado
$elReyLeon = new CintaVideo('el rey leon', 1, 12.99, 3);
$videoClub = new Videoclub('Videoclub paco');
$videoClub->incluirProducto($elReyLeon);
$videoClub->incluirDVD('Barbie en la nieve', 2, 12.99, ['ES', 'EN'], 'movil');
$videoClub->incluirSocio('Oscar', 1);
$videoClub->alquilarSocioProducto(1, 1);
$videoClub->devolverSocioProducto(2, 1);
echo '<p>Num productos alquilados ahora:' . $videoClub->getNumProductosAlquilados() . '<p>';
echo '<p>Num productos alquilados desde que abrió el videoclub:' . $videoClub->getNumTotalAlquileres() . '</p>';
*/



 

