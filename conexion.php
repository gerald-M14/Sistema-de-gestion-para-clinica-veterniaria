<?php
// Configuración de la conexión a la base de datos
$host = 'localhost';
$dbname = 'veterinaria'; // Nombre de tu base de datos
$username = 'tu_usuario'; // Cambia por tu usuario
$password = 'tu_contraseña'; // Cambia por tu contraseña

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error al conectar con la base de datos: " . $e->getMessage());
}
?>
