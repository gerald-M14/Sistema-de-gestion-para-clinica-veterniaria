<?php
session_start(); // Inicia la sesión

// Destruye la sesión y borra la cookie de sesión
session_unset(); // Elimina todas las variables de sesión
session_destroy(); // Destruye la sesión
setcookie(session_name(), '', time() - 3600, '/'); // Borra la cookie de sesión

// Evitar que la página se guarde en la caché
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Pragma: no-cache");
header("Expires: 0");

// Redirige al usuario a la página de inicio
header("Location: http://localhost/proyecto%20programado/veterinariacliente/index.html");
exit();
?>
