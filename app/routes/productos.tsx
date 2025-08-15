import React from "react";

export default function Productos() {
  return (
    <div style={{ backgroundColor: "#e8f5e9", minHeight: "100vh", padding: "2rem" }}>
      <h2 style={{ color: "#388e3c" }}>Productos</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", background: "#f1f8e9" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #388e3c", padding: "8px" }}>Producto</th>
            <th style={{ border: "1px solid #388e3c", padding: "8px" }}>Tipo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #388e3c", padding: "8px" }}>Helado de Vainilla</td>
            <td style={{ border: "1px solid #388e3c", padding: "8px" }}>Cremoso</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #388e3c", padding: "8px" }}>Helado de Chocolate</td>
            <td style={{ border: "1px solid #388e3c", padding: "8px" }}>Cremoso</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #388e3c", padding: "8px" }}>Helado de Frutilla</td>
            <td style={{ border: "1px solid #388e3c", padding: "8px" }}>Frutal</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #388e3c", padding: "8px" }}>Paletas artesanales</td>
            <td style={{ border: "1px solid #388e3c", padding: "8px" }}>Paleta</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #388e3c", padding: "8px" }}>Postres congelados</td>
            <td style={{ border: "1px solid #388e3c", padding: "8px" }}>Postre</td>
          </tr>
        </tbody>
      </table>
      <p style={{ marginTop: "1rem" }}>¡Descubre nuestra variedad de productos frescos y deliciosos!</p>
    </div>
  );
}
