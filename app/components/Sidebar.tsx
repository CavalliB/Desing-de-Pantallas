import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";

const navItems = [
  { to: "/empleados", label: "Empleados" },
  { to: "/productos", label: "Productos" },
  { to: "/reportes", label: "Reportes" },
  { to: "/insumos", label: "Insumos" },
  { to: "/proveedores", label: "Proveedores" },
  { to: "/produccion", label: "Producción" },
  { to: "/ventas", label: "Ventas" },
  { to: "/delivery", label: "Delivery" },
];

const Sidebar = ({ children }: { children?: React.ReactNode }) => {
  const location = useLocation();
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>La Heladería</h1>
        <span className="sidebar-sub">Panel de empleados</span>
      </div>
      <nav className="sidebar-nav">
        {navItems.map(item => (
          <Link
            key={item.to}
            to={item.to}
            className={location.pathname === item.to ? "active" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      {children}
    </aside>
  );
};

export default Sidebar;
