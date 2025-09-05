import * as XLSX from "xlsx";

// Función para leer los datos del archivo Excel
export const readExcelData = async () => {
  try {
    // Hacer fetch del archivo Excel desde la ruta pública
    const response = await fetch("/origen-datos-junior.xlsx");
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    // Convertir la respuesta a ArrayBuffer
    const arrayBuffer = await response.arrayBuffer();

    // Leer el libro de Excel
    const workbook = XLSX.read(arrayBuffer, { type: "array" });

    // Tomar la primera hoja del Excel
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Convertir la hoja a JSON
    const data = XLSX.utils.sheet_to_json(sheet);

    // Mapear los datos a un formato uniforme
    return data.map(worker => ({
      ID_EMPRESA: worker.ID_EMPRESA,
      ID_AREA: worker.ID_AREA,
      RUT_TRABAJADOR: worker.RUT_TRABAJADOR,
      NOMBRE_TRABAJADOR: worker.NOMBRE_TRABAJADOR,
      EDAD: worker.EDAD,
      PROFESION: worker.PROFESION,
      CARGO: worker.CARGO
    }));
  } catch (error) {
    console.error("Error leyendo Excel:", error);// Mostrar errores en consola
    return [];// Retornar array vacío en caso de error
  }
};
