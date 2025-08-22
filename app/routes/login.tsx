import React, { useState } from "react";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulación de login
    if (user === "empleado" && pass === "helado2025") {
      window.location.href = "/";
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#232946" }}>
      <form onSubmit={handleSubmit} style={{ background: "#fff", padding: 32, borderRadius: 12, boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)", minWidth: 320 }}>
        <h2 style={{ color: "#232946", marginBottom: 24, textAlign: "center" }}>Acceso empleados</h2>
        <input
          type="text"
          placeholder="Usuario"
          value={user}
          onChange={e => setUser(e.target.value)}
          style={{ width: "100%", marginBottom: 16, padding: 10, borderRadius: 6, border: "1px solid #b8c1ec" }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={pass}
          onChange={e => setPass(e.target.value)}
          style={{ width: "100%", marginBottom: 16, padding: 10, borderRadius: 6, border: "1px solid #b8c1ec" }}
        />
        {error && <div style={{ color: "#d32f2f", marginBottom: 12, textAlign: "center" }}>{error}</div>}
        <button type="submit" style={{ width: "100%", background: "#232946", color: "#fff", border: "none", borderRadius: 6, padding: 12, fontWeight: 600, fontSize: 16, cursor: "pointer" }}>
          Ingresar
        </button>
      </form>
    </div>
  );
}
