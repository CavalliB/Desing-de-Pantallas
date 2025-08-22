import React, { useState } from "react";



export default function Proveedores() {
    const proveedoresIniciales = [
  { nombre: "Lácteos Trenque Lauquen", tipo: "Mensual", localidad: "Trenque Lauquen" },
  { nombre: "Frutas del Oeste", tipo: "Semanal", localidad: "Trenque Lauquen" },
  { nombre: "Azucarera Pampeana", tipo: "Mensual", localidad: "Santa Rosa" },
  { nombre: "Verdulería El Mercado", tipo: "Semanal", localidad: "Trenque Lauquen" },
];
  const [proveedores, setProveedores] = useState(proveedoresIniciales);
  const [nuevo, setNuevo] = useState({ nombre: "", tipo: "Mensual", localidad: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNuevo({ ...nuevo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nuevo.nombre && nuevo.localidad) {
      setProveedores([...proveedores, nuevo]);
      setNuevo({ nombre: "", tipo: "Mensual", localidad: "" });
    }
  };

  return (
    <div>
      <h2 style={{ color: "#232946", marginBottom: 24 }}>Proveedores</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        <input name="nombre" placeholder="Nombre" value={nuevo.nombre} onChange={handleChange} style={{ flex: 2, padding: 8, borderRadius: 6, border: "1px solid #b8c1ec" }} />
        <select name="tipo" value={nuevo.tipo} onChange={handleChange} style={{ flex: 1, padding: 8, borderRadius: 6, border: "1px solid #b8c1ec" }}>
          <option value="Mensual">Mensual</option>
          <option value="Semanal">Semanal</option>
        </select>
        <input name="localidad" placeholder="Localidad" value={nuevo.localidad} onChange={handleChange} style={{ flex: 1, padding: 8, borderRadius: 6, border: "1px solid #b8c1ec" }} />
        <button type="submit" style={{ background: '#232946', color: 'white', border: 'none', borderRadius: 4, padding: '8px 16px', fontWeight: 600 }}>Agregar</button>
      </form>
      <table style={{ width: "100%", borderCollapse: "collapse", background: "#f4f6fb" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #b8c1ec", padding: 8 }}>Nombre</th>
            <th style={{ border: "1px solid #b8c1ec", padding: 8 }}>Tipo</th>
            <th style={{ border: "1px solid #b8c1ec", padding: 8 }}>Localidad</th>
          </tr>
        </thead>
        <tbody>
          {proveedores.map((prov, idx) => (
            <tr key={idx}>
              <td style={{ border: "1px solid #b8c1ec", padding: 8 }}>{prov.nombre}</td>
              <td style={{ border: "1px solid #b8c1ec", padding: 8 }}>{prov.tipo}</td>
              <td style={{ border: "1px solid #b8c1ec", padding: 8 }}>{prov.localidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
