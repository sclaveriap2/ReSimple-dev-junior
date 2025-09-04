// src/components/KpiSection.jsx
//import React from "react";
import { calcularKPIs } from "../utils/kpiUtils";

const KpiSection = ({ data }) => {
  const { trabajadoresPorEmpresa, trabajadoresPorArea, gastosPorEmpresa, gastosPorArea } = calcularKPIs(data);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>KPIs</h2>
      <div>
        <h3>Trabajadores por empresa</h3>
        <pre>{JSON.stringify(trabajadoresPorEmpresa, null, 2)}</pre>
      </div>
      <div>
        <h3>Trabajadores por área</h3>
        <pre>{JSON.stringify(trabajadoresPorArea, null, 2)}</pre>
      </div>
      <div>
        <h3>Gastos por empresa</h3>
        <pre>{JSON.stringify(gastosPorEmpresa, null, 2)}</pre>
      </div>
      <div>
        <h3>Gastos por área</h3>
        <pre>{JSON.stringify(gastosPorArea, null, 2)}</pre>
      </div>
    </div>
  );
};

export default KpiSection;

