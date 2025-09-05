import "./KpiSection.css";
import { calcularKPIs } from "../utils/kpiUtils";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

// Colores utilizados para los segmentos de los gráficos de torta
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A569BD", "#FF6384"];

// Función para renderizar los datos de un KPI como filas con total
const renderKpiObject = (obj) => {
  const entries = Object.entries(obj);
  const total = entries.reduce((sum, [, value]) => sum + Number(value), 0);// Suma total de los valores

  return (
    <div className="kpi-section__content">
      {entries.map(([key, value]) => (
        <div key={key} className="kpi-section__row">
          <strong>{key}:</strong> {value}
        </div>
      ))}
      <div className="kpi-section__row" style={{ marginTop: "10px", fontWeight: "bold" }}>
        Total: {total}
      </div>
    </div>
  );
};

// Función para renderizar un gráfico de torta a partir de un objeto KPI
const renderPieChart = (obj) => {
  const data = Object.entries(obj).map(([name, value]) => ({ name, value }));
  const total = data.reduce((sum, d) => sum + d.value, 0);
  const dataWithPercent = data.map(d => ({ ...d, percent: ((d.value / total) * 100).toFixed(1) }));
  
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={dataWithPercent}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80} // radio del grafico
          label={(entry) => `${entry.name}: ${entry.percent}%`}
        >
          {dataWithPercent.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value, name, props) => [`${value} (${props.payload.percent}%)`, name]} />
      </PieChart>
    </ResponsiveContainer>
  );
};

// Componente principal que muestra la sección de KPIs con gráficos
const KpiSection = ({ data }) => {
  // Desestructurar KPIs calculados desde los datos
  const { trabajadoresPorEmpresa, trabajadoresPorArea, gastosPorEmpresa, gastosPorArea } = calcularKPIs(data);

  return (
    <div className="section-container kpi-section">
      <h2 className="kpi-section__title">KPIs</h2>

      <div className="kpi-section__dual">
        <div className="kpi-section__left">
          <h3 className="kpi-section__title">Trabajadores por empresa</h3>
          {renderKpiObject(trabajadoresPorEmpresa)}
        </div>
        <div className="kpi-section__right">
          {renderPieChart(trabajadoresPorEmpresa)}
        </div>
      </div>

      <div className="kpi-section__dual">
        <div className="kpi-section__left">
          <h3 className="kpi-section__title">Trabajadores por área</h3>
          {renderKpiObject(trabajadoresPorArea)}
        </div>
        <div className="kpi-section__right">
          {renderPieChart(trabajadoresPorArea)}
        </div>
      </div>

      <div className="kpi-section__dual">
        <div className="kpi-section__left">
          <h3 className="kpi-section__title">Gastos por empresa</h3>
          {renderKpiObject(gastosPorEmpresa)}
        </div>
        <div className="kpi-section__right">
          {renderPieChart(gastosPorEmpresa)}
        </div>
      </div>

      <div className="kpi-section__dual">
        <div className="kpi-section__left">
          <h3 className="kpi-section__title">Gastos por área</h3>
          {renderKpiObject(gastosPorArea)}
        </div>
        <div className="kpi-section__right">
          {renderPieChart(gastosPorArea)}
        </div>
      </div>
    </div>
  );
};

export default KpiSection;


