<?php
setcookie('nombre', 'Óscar Javuer', strtotime('+30 days'));
setcookie('apellido', 'López', strtotime('+2 years'));
setcookie('apellido', 'López', time() + 3600);
echo 'cookies creadas';
?>