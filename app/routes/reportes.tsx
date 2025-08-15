import React from "react";

export default function Reportes() {
  return (
    <div style={{ backgroundColor: "#fce4ec", minHeight: "100vh", padding: "2rem" }}>
      <h2 style={{ color: "#c2185b" }}>Reportes</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", background: "#f8bbd0" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #c2185b", padding: "8px" }}>Reporte</th>
            <th style={{ border: "1px solid #c2185b", padding: "8px" }}>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #c2185b", padding: "8px" }}>Ventas diarias</td>
            <td style={{ border: "1px solid #c2185b", padding: "8px" }}>Resumen de ventas por día</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #c2185b", padding: "8px" }}>Productos más vendidos</td>
            <td style={{ border: "1px solid #c2185b", padding: "8px" }}>Ranking de productos</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #c2185b", padding: "8px" }}>Rendimiento de empleados</td>
            <td style={{ border: "1px solid #c2185b", padding: "8px" }}>Evaluación de desempeño</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #c2185b", padding: "8px" }}>Inventario actual</td>
            <td style={{ border: "1px solid #c2185b", padding: "8px" }}>Stock disponible</td>
          </tr>
        </tbody>
      </table>
      <p style={{ marginTop: "1rem" }}>Visualiza y analiza los datos clave de tu heladería para tomar mejores decisiones.</p>
    </div>
  );
}
