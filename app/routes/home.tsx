import React from "react";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#e3f2fd", minHeight: "100vh", padding: "2rem" }}>
      <h1 style={{ color: "#1976d2" }}>¡Bienvenido a la Heladería!</h1>
      <p>Explora las diferentes secciones usando la barra de navegación.</p>
      <ul>
        <li>Empleados: conoce a nuestro equipo</li>
        <li>Productos: descubre nuestra variedad</li>
        <li>Reportes: visualiza los datos clave</li>
      </ul>
    </div>
  );
}
