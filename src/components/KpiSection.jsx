const KpiSection = ({ data }) => {
  const trabajadoresPorEmpresa = {};
  const trabajadoresPorArea = {};
  const gastosPorEmpresa = {};
  const gastosPorArea = {};

  data.forEach(row => {
    // Por empresa
    trabajadoresPorEmpresa[row.empresa] = (trabajadoresPorEmpresa[row.empresa] || 0) + 1;
    gastosPorEmpresa[row.empresa] = (gastosPorEmpresa[row.empresa] || 0) + (row.sueldo || 0);

    // Por área
    trabajadoresPorArea[row.area] = (trabajadoresPorArea[row.area] || 0) + 1;
    gastosPorArea[row.area] = (gastosPorArea[row.area] || 0) + (row.sueldo || 0);
  });

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

