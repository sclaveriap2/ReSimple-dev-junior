import { readExcelData } from "./readExcel";
import { readJsonData } from "./readJson";

export const getCombinedData = async () => {
  const workers = await readExcelData();
  const empresas = await readJsonData();

  console.log("Workers:", workers); // <--- revisa que traiga datos
  console.log("Empresas:", empresas); // <--- revisa que traiga datos

  return workers.map(worker => {
    const empresa = empresas.EMPRESAS.find(e => e.ID_EMPRESA == worker.ID_EMPRESA);
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

