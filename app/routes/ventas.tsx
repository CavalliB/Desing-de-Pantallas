import React, { useState } from "react";

const ventasIniciales = [
  { cliente: "Juan Pérez", monto: 3500, metodo: "Efectivo", fecha: "2025-08-21" },
  { cliente: "María López", monto: 4200, metodo: "Tarjeta", fecha: "2025-08-21" },
];

export default function Ventas() {
  const [ventas, setVentas] = useState(ventasIniciales);
  const [nueva, setNueva] = useState({ cliente: "", monto: 0, metodo: "Efectivo", fecha: "2025-08-21" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNueva({ ...nueva, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nueva.cliente && nueva.monto && nueva.fecha) {
      setVentas([...ventas, { ...nueva, monto: Number(nueva.monto) }]);
      setNueva({ cliente: "", monto: 0, metodo: "Efectivo", fecha: nueva.fecha });
    }
  };

  return (
    <div>
      <h2 style={{ color: "#232946", marginBottom: 24 }}>Ventas</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        <input name="cliente" placeholder="Cliente" value={nueva.cliente} onChange={handleChange} style={{ flex: 2, padding: 8, borderRadius: 6, border: "1px solid #b8c1ec" }} />
        <input name="monto" type="number" min={0} placeholder="Monto" value={nueva.monto} onChange={handleChange} style={{ width: 100, padding: 8, borderRadius: 6, border: "1px solid #b8c1ec" }} />
        <select name="metodo" value={nueva.metodo} onChange={handleChange} style={{ flex: 1, padding: 8, borderRadius: 6, border: "1px solid #b8c1ec" }}>
          <option value="Efectivo">Efectivo</option>
          <option value="Tarjeta">Tarjeta</option>
        </select>
        <input name="fecha" type="date" value={nueva.fecha} onChange={handleChange} style={{ width: 160, padding: 8, borderRadius: 6, border: "1px solid #b8c1ec" }} />
        <button type="submit" style={{ background: '#232946', color: 'white', border: 'none', borderRadius: 4, padding: '8px 16px', fontWeight: 600 }}>Agregar</button>
      </form>
      <table style={{ width: "100%", borderCollapse: "collapse", background: "#f4f6fb" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #b8c1ec", padding: 8 }}>Cliente</th>
            <th style={{ border: "1px solid #b8c1ec", padding: 8 }}>Monto</th>
            <th style={{ border: "1px solid #b8c1ec", padding: 8 }}>Método</th>
            <th style={{ border: "1px solid #b8c1ec", padding: 8 }}>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map((v, idx) => (
            <tr key={idx}>
              <td style={{ border: "1px solid #b8c1ec", padding: 8 }}>{v.cliente}</td>
              <td style={{ border: "1px solid #b8c1ec", padding: 8 }}>{v.monto}</td>
              <td style={{ border: "1px solid #b8c1ec", padding: 8 }}>{v.metodo}</td>
              <td style={{ border: "1px solid #b8c1ec", padding: 8 }}>{v.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
