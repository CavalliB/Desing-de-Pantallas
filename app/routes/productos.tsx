// ...existing code...
import React, { useState } from "react";

export default function Productos() {
  const [productos, setProductos] = useState([
    { nombre: "Helado de Vainilla", tipo: "Cremoso" },
    { nombre: "Helado de Chocolate", tipo: "Cremoso" },
    { nombre: "Helado de Frutilla", tipo: "Frutal" },
    { nombre: "Paletas artesanales", tipo: "Paleta" },
    { nombre: "Postres congelados", tipo: "Postre" },
  ]);
  const [nuevo, setNuevo] = useState({ nombre: "", tipo: "" });
  const [editIdx, setEditIdx] = useState<number | null>(null);
  const [editProducto, setEditProducto] = useState({ nombre: "", tipo: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevo({ ...nuevo, [e.target.name]: e.target.value });
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditProducto({ ...editProducto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nuevo.nombre && nuevo.tipo) {
      setProductos([...productos, nuevo]);
      setNuevo({ nombre: "", tipo: "" });
    }
  };

  const handleDelete = (idx: number) => {
    setProductos(productos.filter((_, i) => i !== idx));
  };

  const handleEdit = (idx: number) => {
    setEditIdx(idx);
    setEditProducto(productos[idx]);
  };

  const handleEditSave = (idx: number) => {
    const updated = productos.map((prod, i) => (i === idx ? editProducto : prod));
    setProductos(updated);
    setEditIdx(null);
  };

  const handleEditCancel = () => {
    setEditIdx(null);
  };

  return (
    <div style={{ backgroundColor: "#e8f5e9", minHeight: "100vh", padding: "2rem" }}>
      <h2 style={{ color: "#388e3c" }}>Productos</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input
          name="nombre"
          placeholder="Nombre del producto"
          value={nuevo.nombre}
          onChange={handleChange}
          style={{ marginRight: 8 }}
        />
        <input
          name="tipo"
          placeholder="Tipo"
          value={nuevo.tipo}
          onChange={handleChange}
          style={{ marginRight: 8 }}
        />
        <button type="submit" style={{
          background: '#388e3c', color: 'white', border: 'none', borderRadius: 4, padding: '6px 16px', cursor: 'pointer', fontWeight: 600
        }}>Agregar</button>
      </form>
      <table style={{ width: "100%", borderCollapse: "collapse", background: "#f1f8e9" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #388e3c", padding: "8px" }}>Producto</th>
            <th style={{ border: "1px solid #388e3c", padding: "8px" }}>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((prod, idx) => (
            <tr key={idx}>
              {editIdx === idx ? (
                <>
                  <td style={{ border: "1px solid #388e3c", padding: "8px" }}>
                    <input
                      name="nombre"
                      value={editProducto.nombre}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td style={{ border: "1px solid #388e3c", padding: "8px" }}>
                    <input
                      name="tipo"
                      value={editProducto.tipo}
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
                  <td style={{ border: "1px solid #388e3c", padding: "8px" }}>{prod.nombre}</td>
                  <td style={{ border: "1px solid #388e3c", padding: "8px" }}>{prod.tipo}</td>
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
      <p style={{ marginTop: "1rem" }}>¡Descubre nuestra variedad de productos frescos y deliciosos!</p>
    </div>
  );
}
