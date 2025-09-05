import "./KpiSection.css";
import "./Global.css";
import { calcularKPIs } from "../utils/kpiUtils";

const renderKpiObject = (obj) => {
  return (
    <div className="kpi-section__content">
      {Object.entries(obj).map(([key, value]) => (
        <div key={key} className="kpi-section__row">
          <strong>{key}:</strong> {value}
        </div>
      ))}
    </div>
  );
};

const KpiSection = ({ data }) => {
  const { trabajadoresPorEmpresa, trabajadoresPorArea, gastosPorEmpresa, gastosPorArea } = calcularKPIs(data);

  return (
    <div className="section-container kpi-section">
      <h2 className="kpi-section__title">KPIs</h2>
      <div className="kpi-section__item">
        <h3 className="kpi-section__title">Trabajadores por empresa</h3>
        {renderKpiObject(trabajadoresPorEmpresa)}
      </div>
      <div className="kpi-section__item">
        <h3 className="kpi-section__title">Trabajadores por área</h3>
        {renderKpiObject(trabajadoresPorArea)}
      </div>
      <div className="kpi-section__item">
        <h3 className="kpi-section__title">Gastos por empresa</h3>
        {renderKpiObject(gastosPorEmpresa)}
      </div>
      <div className="kpi-section__item">
        <h3 className="kpi-section__title">Gastos por área</h3>
        {renderKpiObject(gastosPorArea)}
      </div>
    </div>
  );
};

export default KpiSection;


