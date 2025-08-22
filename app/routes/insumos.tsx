import React, { useState } from "react";

const insumosIniciales = [
  { nombre: "Leche entera", tipo: "Perecedero", stock: 20, unidad: "L" },
  { nombre: "Azúcar", tipo: "No perecedero", stock: 50, unidad: "kg" },
  { nombre: "Frutilla fresca", tipo: "Perecedero", stock: 10, unidad: "kg" },
  { nombre: "Cacao en polvo", tipo: "No perecedero", stock: 15, unidad: "kg" },
];

export default function Insumos() {
  const [insumos, setInsumos] = useState(insumosIniciales);
  const [nuevo, setNuevo] = useState({ nombre: "", tipo: "Perecedero", stock: 0, unidad: "kg" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNuevo({ ...nuevo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nuevo.nombre && nuevo.unidad && nuevo.stock) {
      setInsumos([...insumos, { ...nuevo, stock: Number(nuevo.stock) }]);
      setNuevo({ nombre: "", tipo: "Perecedero", stock: 0, unidad: "kg" });
    }
  };

  return (
    <div>
      <h2 style={{ color: "#232946", marginBottom: 24 }}>Insumos</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        <input name="nombre" placeholder="Nombre" value={nuevo.nombre} onChange={handleChange} style={{ flex: 2, padding: 8, borderRadius: 6, border: "1px solid #b8c1ec" }} />
        <select name="tipo" value={nuevo.tipo} onChange={handleChange} style={{ flex: 1, padding: 8, borderRadius: 6, border: "1px solid #b8c1ec" }}>
          <option value="Perecedero">Perecedero</option>
          <option value="No perecedero">No perecedero</option>
        </select>
        <input name="stock" type="number" min={0} placeholder="Stock" value={nuevo.stock} onChange={handleChange} style={{ width: 80, padding: 8, borderRadius: 6, border: "1px solid #b8c1ec" }} />
        <input name="unidad" placeholder="Unidad" value={nuevo.unidad} onChange={handleChange} style={{ width: 60, padding: 8, borderRadius: 6, border: "1px solid #b8c1ec" }} />
        <button type="submit" style={{ background: '#232946', color: 'white', border: 'none', borderRadius: 4, padding: '8px 16px', fontWeight: 600 }}>Agregar</button>
      </form>
      <table style={{ width: "100%", borderCollapse: "collapse", background: "#f4f6fb" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #b8c1ec", padding: 8 }}>Nombre</th>
            <th style={{ border: "1px solid #b8c1ec", padding: 8 }}>Tipo</th>
            <th style={{ border: "1px solid #b8c1ec", padding: 8 }}>Stock</th>
            <th style={{ border: "1px solid #b8c1ec", padding: 8 }}>Unidad</th>
          </tr>
        </thead>
        <tbody>
          {insumos.map((ins, idx) => (
            <tr key={idx}>
              <td style={{ border: "1px solid #b8c1ec", padding: 8 }}>{ins.nombre}</td>
              <td style={{ border: "1px solid #b8c1ec", padding: 8 }}>{ins.tipo}</td>
              <td style={{ border: "1px solid #b8c1ec", padding: 8 }}>{ins.stock}</td>
              <td style={{ border: "1px solid #b8c1ec", padding: 8 }}>{ins.unidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
