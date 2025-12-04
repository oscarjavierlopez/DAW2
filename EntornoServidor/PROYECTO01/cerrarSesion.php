<?php
require __DIR__ ."/vendor/autoload.php";
use Monolog\Logger;
use Monolog\Handler\StreamHandler;

session_start();
$log = new Logger('MiLogger');
$log->pushHandler(new StreamHandler('logs/proyecto01.log', Logger::DEBUG));
$log->info($_SESSION['email'] . " Cerró sesión");
session_destroy();
header("Location: iniciarSesion.php");
exit;
