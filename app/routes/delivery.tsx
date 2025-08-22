import React, { useState } from "react";

const pedidosIniciales = [
  { cliente: "Juan Pérez", direccion: "Calle 123", monto: 3500, estado: "Pendiente", fecha: "2025-08-21" },
  { cliente: "María López", direccion: "Av. Principal 456", monto: 4200, estado: "Entregado", fecha: "2025-08-21" },
];

export default function Delivery() {
  const [pedidos, setPedidos] = useState(pedidosIniciales);
  const [nuevo, setNuevo] = useState({ cliente: "", direccion: "", monto: 0, estado: "Pendiente", fecha: "2025-08-21" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNuevo({ ...nuevo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nuevo.cliente && nuevo.direccion && nuevo.monto && nuevo.fecha) {
      setPedidos([...pedidos, { ...nuevo, monto: Number(nuevo.monto) }]);
      setNuevo({ cliente: "", direccion: "", monto: 0, estado: "Pendiente", fecha: nuevo.fecha });
    }
  };

  return (
    <div>
      <h2 style={{ color: "#232946", marginBottom: 24 }}>Pedidos Delivery</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        <input name="cliente" placeholder="Cliente" value={nuevo.cliente} onChange={handleChange} style={{ flex: 2, padding: 8, borderRadius: 6, border: "1px solid #b8c1ec" }} />
        <input name="direccion" placeholder="Dirección" value={nuevo.direccion} onChange={handleChange} style={{ flex: 2, padding: 8, borderRadius: 6, border: "1px solid #b8c1ec" }} />
        <input name="monto" type="number" min={0} placeholder="Monto" value={nuevo.monto} onChange={handleChange} style={{ width: 100, padding: 8, borderRadius: 6, border: "1px solid #b8c1ec" }} />
        <select name="estado" value={nuevo.estado} onChange={handleChange} style={{ flex: 1, padding: 8, borderRadius: 6, border: "1px solid #b8c1ec" }}>
          <option value="Pendiente">Pendiente</option>
          <option value="Entregado">Entregado</option>
        </select>
        <input name="fecha" type="date" value={nuevo.fecha} onChange={handleChange} style={{ width: 160, padding: 8, borderRadius: 6, border: "1px solid #b8c1ec" }} />
        <button type="submit" style={{ background: '#232946', color: 'white', border: 'none', borderRadius: 4, padding: '8px 16px', fontWeight: 600 }}>Agregar</button>
      </form>
      <table style={{ width: "100%", borderCollapse: "collapse", background: "#f4f6fb" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #b8c1ec", padding: 8 }}>Cliente</th>
            <th style={{ border: "1px solid #b8c1ec", padding: 8 }}>Dirección</th>
            <th style={{ border: "1px solid #b8c1ec", padding: 8 }}>Monto</th>
            <th style={{ border: "1px solid #b8c1ec", padding: 8 }}>Estado</th>
            <th style={{ border: "1px solid #b8c1ec", padding: 8 }}>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((p, idx) => (
            <tr key={idx}>
              <td style={{ border: "1px solid #b8c1ec", padding: 8 }}>{p.cliente}</td>
              <td style={{ border: "1px solid #b8c1ec", padding: 8 }}>{p.direccion}</td>
              <td style={{ border: "1px solid #b8c1ec", padding: 8 }}>{p.monto}</td>
              <td style={{ border: "1px solid #b8c1ec", padding: 8 }}>{p.estado}</td>
              <td style={{ border: "1px solid #b8c1ec", padding: 8 }}>{p.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
