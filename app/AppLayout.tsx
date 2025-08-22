import React from "react";
import Sidebar from "./components/Sidebar";
import "./app.css";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f4f6fb" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "2.5rem 3rem", background: "#f4f6fb" }}>
        <header style={{
          marginBottom: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <h2 style={{ fontWeight: 700, fontSize: 28, color: "#232946", letterSpacing: 1 }}>Panel de empleados</h2>
          {/* Aquí puedes agregar usuario logueado, notificaciones, etc. */}
        </header>
        <section style={{
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 4px 24px 0 rgba(0,0,0,0.07)",
          padding: "2rem",
          minHeight: 400
        }}>
          {children}
        </section>
      </main>
    </div>
  );
}
