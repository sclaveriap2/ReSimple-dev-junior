import * as XLSX from "xlsx";

export const readExcelData = async () => {
  try {
    const response = await fetch("/origen-datos-junior.xlsx");
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: "array" });

    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);

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
    console.error("Error leyendo Excel:", error);
    return [];
  }
};
