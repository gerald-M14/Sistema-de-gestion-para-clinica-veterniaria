<?php
// Incluir el archivo de conexión
require_once 'conexion.php';

try {
    // Consulta para obtener datos de la tabla VETERINARIA
    $sql = "SELECT * FROM VETERINARIA";
    $stmt = $pdo->query($sql);
    $veterinarias = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Mostrar los resultados (ejemplo básico)
    foreach ($veterinarias as $veterinaria) {
        echo "ID: " . $veterinaria['ID_VETERINARIA'] . "<br>";
        echo "Nombre: " . $veterinaria['NOMBRE'] . "<br>";
        echo "Correo: " . $veterinaria['CORREO'] . "<br>";
        echo "Teléfono: " . $veterinaria['TELEFONO'] . "<br>";
        echo "<hr>";
    }
} catch (PDOException $e) {
    die("Error al realizar la consulta: " . $e->getMessage());
}
?>
