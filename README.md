# Proyecto de Gestión de Trabajadores

Este proyecto permite visualizar, filtrar y analizar información de trabajadores de distintas empresas y áreas. Incluye tabla paginada, KPIs y gráficos tipo PieChart. Además permite exportar los datos a Excel y se despliega en Firebase mediante GitHub Actions.

---

## Estructura del proyecto

/src
/components
Filter.jsx
PaginatedTable.jsx
KpiSection.jsx
/data
combineData.js
readExcel.js
readJson.js
/utils
filterUtils.js
exportToExcel.js
kpiUtils.js
paginationUtils.js
App.jsx
main.jsx
index.css
/public
origen-datos-junior.xlsx
dicionario-de-datos.json
README.md
package.json
vite.config.js

---

## Tecnologías utilizadas

- **Node.js** - Runtime de JavaScript
- **Vite** - Herramienta de build y bundling para React
- **React** - Librería para construir interfaces de usuario
- **JavaScript (JS / JSX)** - Lenguaje principal
- **CSS** - Estilos
- **Recharts** - Librería para gráficos PieChart
- **XLSX** - Leer y exportar archivos Excel
- **Firebase** - Hosting y despliegue con GitHub Actions

---

## Versiones utilizadas

- Node.js: v22.19.0
- npm: 10.9.3

- React: ├─┬ react-dom@19.1.1
  │ └── react@19.1.1 deduped
  ├── react@19.1.1
  └─┬ recharts@3.1.2
  ├─┬ @reduxjs/toolkit@2.9.0
  │ └── react@19.1.1 deduped
  ├─┬ react-redux@9.2.0
  │ └── react@19.1.1 deduped
  ├── react@19.1.1 deduped
  └─┬ use-sync-external-store@1.5.0
  └── react@19.1.1 deduped

- Vite: ├─┬ @vitejs/plugin-react@5.0.2
  │ └── vite@7.1.4 deduped
  └── vite@7.1.4

- Recharts: recharts@3.1.2
- XLSX: xlsx@0.18.5
- Firebase CLI: 14.15.1

---

## Características principales

- Filtrado por empresa, área, nombre, RUT y rango de sueldos
- Tabla paginada con opción de seleccionar cantidad de filas por página
- KPIs por empresa y área con gráficos PieChart
- Mostrar porcentaje de cada sección en los gráficos
- Exportar tabla a Excel
- Diseño responsivo y adaptativo para pantallas pequeñas
- Despliegue automático en Firebase mediante GitHub Actions

---

## Cómo ejecutar el proyecto

1. Clonar el repositorio:

git clone (https://github.com/sclaveriap2/ReSimple-dev-junior.git)

2. Instalar dependencias

npm install

3. Iniciar la aplicación en modo desarrollador

npm run dev

4. Abrir en el navegador

http://localhost:5173
