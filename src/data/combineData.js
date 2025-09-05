import { readExcelData } from "./readExcel";
import { readJsonData } from "./readJson";

// Función principal que combina los datos de Excel y JSON
export const getCombinedData = async () => {
  const workers = await readExcelData(); // Leer trabajadores desde Excel
  const empresas = await readJsonData();// Leer información de empresas desde JSON

  console.log("Workers:", workers); // Verificar datos de trabajadores en consola
  console.log("Empresas:", empresas); // Verificar datos de empresas en consola

  // Combinar la información de trabajadores y empresas
  return workers.map(worker => {
    // Buscar la empresa correspondiente del trabajador
    const empresa = empresas.EMPRESAS.find(e => e.ID_EMPRESA == worker.ID_EMPRESA);
    // Buscar el área correspondiente dentro de la empresa
    const area = empresa?.AREAS.find(a => a.ID_AREA == worker.ID_AREA);

    return {
      empresa: empresa ? empresa.NOMBRE_EMPRESA : "Desconocida",
      area: area ? area.NOMBRE_AREA : "Desconocida",
      sueldo: area ? area.SUELDO : 0, // <- agregado
      rut: worker.RUT_TRABAJADOR,
      nombre: worker.NOMBRE_TRABAJADOR,
      edad: worker.EDAD,
      profesion: worker.PROFESION,
      cargo: worker.CARGO
    };
  });
};

