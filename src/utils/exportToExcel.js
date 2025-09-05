import * as XLSX from "xlsx";

// Función para exportar un array de objetos a un archivo Excel
export const exportToExcel = (data, fileName = "tabla.xlsx") => {
  // Validar que haya datos para exportar
  if (!data || !data.length) {
    alert("No hay datos para exportar");
    return;
  }

  // Convertir array de objetos a hoja de Excel
  const worksheet = XLSX.utils.json_to_sheet(data);

  // Crear libro de Excel y agregar la hoja
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Datos");

  // Descargar el archivo Excel con el nombre especificado
  XLSX.writeFile(workbook, fileName);
};
