// ...existing code...
import React, { useState } from "react";

export default function Reportes() {
  const [reportes, setReportes] = useState([
    { nombre: "Ventas diarias", descripcion: "Resumen de ventas por día" },
    { nombre: "Productos más vendidos", descripcion: "Ranking de productos" },
    { nombre: "Rendimiento de empleados", descripcion: "Evaluación de desempeño" },
    { nombre: "Inventario actual", descripcion: "Stock disponible" },
  ]);
  const [nuevo, setNuevo] = useState({ nombre: "", descripcion: "" });
  const [editIdx, setEditIdx] = useState<number | null>(null);
  const [editReporte, setEditReporte] = useState({ nombre: "", descripcion: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevo({ ...nuevo, [e.target.name]: e.target.value });
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditReporte({ ...editReporte, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nuevo.nombre && nuevo.descripcion) {
      setReportes([...reportes, nuevo]);
      setNuevo({ nombre: "", descripcion: "" });
    }
  };

  const handleDelete = (idx: number) => {
    setReportes(reportes.filter((_, i) => i !== idx));
  };

  const handleEdit = (idx: number) => {
    setEditIdx(idx);
    setEditReporte(reportes[idx]);
  };

  const handleEditSave = (idx: number) => {
    const updated = reportes.map((rep, i) => (i === idx ? editReporte : rep));
    setReportes(updated);
    setEditIdx(null);
  };

  const handleEditCancel = () => {
    setEditIdx(null);
  };

  return (
    <div style={{ backgroundColor: "#fce4ec", minHeight: "100vh", padding: "2rem" }}>
      <h2 style={{ color: "#c2185b" }}>Reportes</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input
          name="nombre"
          placeholder="Nombre del reporte"
          value={nuevo.nombre}
          onChange={handleChange}
          style={{ marginRight: 8 }}
        />
        <input
          name="descripcion"
          placeholder="Descripción"
          value={nuevo.descripcion}
          onChange={handleChange}
          style={{ marginRight: 8 }}
        />
        <button type="submit" style={{
          background: '#c2185b', color: 'white', border: 'none', borderRadius: 4, padding: '6px 16px', cursor: 'pointer', fontWeight: 600
        }}>Agregar</button>
      </form>
      <table style={{ width: "100%", borderCollapse: "collapse", background: "#f8bbd0" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #c2185b", padding: "8px" }}>Reporte</th>
            <th style={{ border: "1px solid #c2185b", padding: "8px" }}>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {reportes.map((rep, idx) => (
            <tr key={idx}>
              {editIdx === idx ? (
                <>
                  <td style={{ border: "1px solid #c2185b", padding: "8px" }}>
                    <input
                      name="nombre"
                      value={editReporte.nombre}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td style={{ border: "1px solid #c2185b", padding: "8px" }}>
                    <input
                      name="descripcion"
                      value={editReporte.descripcion}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <button onClick={() => handleEditSave(idx)} style={{
                      background: '#388e3c', color: 'white', border: 'none', borderRadius: 4, padding: '4px 12px', marginRight: 4, cursor: 'pointer', fontWeight: 600
                    }}>Guardar</button>
                    <button onClick={handleEditCancel} style={{
                      background: '#bdbdbd', color: 'white', border: 'none', borderRadius: 4, padding: '4px 12px', cursor: 'pointer', fontWeight: 600
                    }}>Cancelar</button>
                  </td>
                </>
              ) : (
                <>
                  <td style={{ border: "1px solid #c2185b", padding: "8px" }}>{rep.nombre}</td>
                  <td style={{ border: "1px solid #c2185b", padding: "8px" }}>{rep.descripcion}</td>
                  <td>
                    <button onClick={() => handleEdit(idx)} style={{
                      background: '#1976d2', color: 'white', border: 'none', borderRadius: 4, padding: '4px 12px', marginRight: 4, cursor: 'pointer', fontWeight: 600
                    }}>Editar</button>
                    <button onClick={() => handleDelete(idx)} style={{
                      background: '#d32f2f', color: 'white', border: 'none', borderRadius: 4, padding: '4px 12px', cursor: 'pointer', fontWeight: 600
                    }}>Eliminar</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ marginTop: "1rem" }}>Visualiza y analiza los datos clave de tu heladería para tomar mejores decisiones.</p>
    </div>
  );
}
