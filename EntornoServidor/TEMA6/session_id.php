<?php
session_start();
if ($_POST["usuario"] = "admin" && $_POST["password"] == sha1($password)) {
    $_SESSION["autorizado"] = true;
    session_regenerate_id();//se regenera el id de la sesion permitiendo brindar mayor seguridad
}
