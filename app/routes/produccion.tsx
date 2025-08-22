import React, { useState } from "react";

const recetas = [
  { sabor: "Vainilla", ingredientes: ["Leche entera", "Azúcar", "Vainilla"] },
  { sabor: "Chocolate", ingredientes: ["Leche entera", "Azúcar", "Cacao en polvo"] },
  { sabor: "Frutilla", ingredientes: ["Leche entera", "Azúcar", "Frutilla fresca"] },
];

export default function Produccion() {
  const [ordenes, setOrdenes] = useState([
    { sabor: "Vainilla", cantidad: 10, fecha: "2025-08-21" },
    { sabor: "Chocolate", cantidad: 8, fecha: "2025-08-21" },
  ]);
  const [nueva, setNueva] = useState({ sabor: "Vainilla", cantidad: 0, fecha: "2025-08-21" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNueva({ ...nueva, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nueva.sabor && nueva.cantidad && nueva.fecha) {
      setOrdenes([...ordenes, { ...nueva, cantidad: Number(nueva.cantidad) }]);
      setNueva({ sabor: "Vainilla", cantidad: 0, fecha: nueva.fecha });
    }
  };

  return (
    <div>
      <h2 style={{ color: "#232946", marginBottom: 24 }}>Órdenes de Producción</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        <select name="sabor" value={nueva.sabor} onChange={handleChange} style={{ flex: 2, padding: 8, borderRadius: 6, border: "1px solid #b8c1ec" }}>
          {recetas.map(r => <option key={r.sabor} value={r.sabor}>{r.sabor}</option>)}
        </select>
        <input name="cantidad" type="number" min={0} placeholder="Cantidad (kg)" value={nueva.cantidad} onChange={handleChange} style={{ width: 120, padding: 8, borderRadius: 6, border: "1px solid #b8c1ec" }} />
        <input name="fecha" type="date" value={nueva.fecha} onChange={handleChange} style={{ width: 160, padding: 8, borderRadius: 6, border: "1px solid #b8c1ec" }} />
        <button type="submit" style={{ background: '#232946', color: 'white', border: 'none', borderRadius: 4, padding: '8px 16px', fontWeight: 600 }}>Agregar</button>
      </form>
      <table style={{ width: "100%", borderCollapse: "collapse", background: "#f4f6fb" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #b8c1ec", padding: 8 }}>Sabor</th>
            <th style={{ border: "1px solid #b8c1ec", padding: 8 }}>Ingredientes</th>
            <th style={{ border: "1px solid #b8c1ec", padding: 8 }}>Cantidad (kg)</th>
            <th style={{ border: "1px solid #b8c1ec", padding: 8 }}>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {ordenes.map((ord, idx) => (
            <tr key={idx}>
              <td style={{ border: "1px solid #b8c1ec", padding: 8 }}>{ord.sabor}</td>
              <td style={{ border: "1px solid #b8c1ec", padding: 8 }}>{recetas.find(r => r.sabor === ord.sabor)?.ingredientes.join(", ")}</td>
              <td style={{ border: "1px solid #b8c1ec", padding: 8 }}>{ord.cantidad}</td>
              <td style={{ border: "1px solid #b8c1ec", padding: 8 }}>{ord.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
