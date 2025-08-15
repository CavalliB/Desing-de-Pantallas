// ...existing code...
import React, { useState } from "react";

export default function Empleados() {
  const [empleados, setEmpleados] = useState([
    { nombre: "Juan Pérez", puesto: "Gerente" },
    { nombre: "María López", puesto: "Atención al cliente" },
    { nombre: "Carlos Gómez", puesto: "Maestro heladero" },
    { nombre: "Lucía Fernández", puesto: "Cajera" },
  ]);
  const [nuevo, setNuevo] = useState({ nombre: "", puesto: "" });
  const [editIdx, setEditIdx] = useState<number | null>(null);
  const [editEmpleado, setEditEmpleado] = useState({ nombre: "", puesto: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevo({ ...nuevo, [e.target.name]: e.target.value });
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditEmpleado({ ...editEmpleado, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nuevo.nombre && nuevo.puesto) {
      setEmpleados([...empleados, nuevo]);
      setNuevo({ nombre: "", puesto: "" });
    }
  };

  const handleDelete = (idx: number) => {
    setEmpleados(empleados.filter((_, i) => i !== idx));
  };

  const handleEdit = (idx: number) => {
    setEditIdx(idx);
    setEditEmpleado(empleados[idx]);
  };

  const handleEditSave = (idx: number) => {
    const updated = empleados.map((emp, i) => (i === idx ? editEmpleado : emp));
    setEmpleados(updated);
    setEditIdx(null);
  };

  const handleEditCancel = () => {
    setEditIdx(null);
  };

  return (
    <div style={{ backgroundColor: "#fff3e0", minHeight: "100vh", padding: "2rem" }}>
      <h2 style={{ color: "#ef6c00" }}>Empleados</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input
          name="nombre"
          placeholder="Nombre"
          value={nuevo.nombre}
          onChange={handleChange}
          style={{ marginRight: 8 }}
        />
        <input
          name="puesto"
          placeholder="Puesto"
          value={nuevo.puesto}
          onChange={handleChange}
          style={{ marginRight: 8 }}
        />
        <button type="submit" style={{
          background: '#ef6c00', color: 'white', border: 'none', borderRadius: 4, padding: '6px 16px', cursor: 'pointer', fontWeight: 600
        }}>Agregar</button>
      </form>
      <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff8e1" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ef6c00", padding: "8px" }}>Nombre</th>
            <th style={{ border: "1px solid #ef6c00", padding: "8px" }}>Puesto</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((emp, idx) => (
            <tr key={idx}>
              {editIdx === idx ? (
                <>
                  <td style={{ border: "1px solid #ef6c00", padding: "8px" }}>
                    <input
                      name="nombre"
                      value={editEmpleado.nombre}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td style={{ border: "1px solid #ef6c00", padding: "8px" }}>
                    <input
                      name="puesto"
                      value={editEmpleado.puesto}
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
                  <td style={{ border: "1px solid #ef6c00", padding: "8px" }}>{emp.nombre}</td>
                  <td style={{ border: "1px solid #ef6c00", padding: "8px" }}>{emp.puesto}</td>
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
      <p style={{ marginTop: "1rem" }}>Conoce a nuestro equipo, siempre listo para atenderte con una sonrisa.</p>
    </div>
  );
}
