import React from "react";

export default function Empleados() {
  return (
    <div style={{ backgroundColor: "#fff3e0", minHeight: "100vh", padding: "2rem" }}>
      <h2 style={{ color: "#ef6c00" }}>Empleados</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff8e1" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ef6c00", padding: "8px" }}>Nombre</th>
            <th style={{ border: "1px solid #ef6c00", padding: "8px" }}>Puesto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ef6c00", padding: "8px" }}>Juan Pérez</td>
            <td style={{ border: "1px solid #ef6c00", padding: "8px" }}>Gerente</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ef6c00", padding: "8px" }}>María López</td>
            <td style={{ border: "1px solid #ef6c00", padding: "8px" }}>Atención al cliente</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ef6c00", padding: "8px" }}>Carlos Gómez</td>
            <td style={{ border: "1px solid #ef6c00", padding: "8px" }}>Maestro heladero</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ef6c00", padding: "8px" }}>Lucía Fernández</td>
            <td style={{ border: "1px solid #ef6c00", padding: "8px" }}>Cajera</td>
          </tr>
        </tbody>
      </table>
      <p style={{ marginTop: "1rem" }}>Conoce a nuestro equipo, siempre listo para atenderte con una sonrisa.</p>
    </div>
  );
}
