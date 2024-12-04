// exportarPDF.js
// exportarPDF.js
document.addEventListener('DOMContentLoaded', () => {
    const exportButton = document.getElementById('export-pdf');
    if (exportButton) {
        exportButton.addEventListener('click', function () {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            
            // Obtener el título de la página
            const pageTitle = document.title || "Exportación de Tablas";
            doc.text(pageTitle, 10, 10);

            let startY = 20; // Margen inicial

            // Seleccionar todas las tablas y sus títulos
            const tables = document.querySelectorAll('table');
            tables.forEach((table, index) => {
                // Buscar el título que precede la tabla (si lo hay)
                const tableTitle = table.previousElementSibling?.tagName.startsWith('H') 
                    ? table.previousElementSibling.textContent 
                    : `Tabla ${index + 1}`;
                
                // Agregar título de la tabla
                doc.text(tableTitle, 10, startY);
                startY += 10; // Espacio debajo del título

                const rows = [];
                table.querySelectorAll('tr').forEach(row => {
                    const cells = [];
                    row.querySelectorAll('th, td').forEach(cell => cells.push(cell.textContent));
                    rows.push(cells);
                });

                // Agregar la tabla al PDF
                doc.autoTable({
                    head: [rows[0]], // Encabezado
                    body: rows.slice(1), // Cuerpo
                    startY: startY,
                });

                // Actualizar posición para la próxima tabla
                startY = doc.lastAutoTable.finalY + 20;
            });

            // Guardar el archivo PDF
            doc.save(`${pageTitle.replace(/\s+/g, '_')}.pdf`);
        });
    }
});
