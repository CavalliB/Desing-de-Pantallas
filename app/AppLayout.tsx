import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu, Button } from "antd";
// @ts-ignore
import { MenuUnfoldOutlined, MenuFoldOutlined, HomeOutlined, UserOutlined, ShopOutlined, BarChartOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";

const { Header, Sider, Content } = Layout;

const sidebarItems = [
  {
    key: "1",
    icon: <HomeOutlined />, 
    label: "Inicio",
    path: "/"
  },
  {
    key: "2",
    icon: <ShopOutlined />, 
    label: "Productos",
    path: "/productos"
  },
  {
    key: "3",
    icon: <UserOutlined />, 
    label: "Empleados",
    path: "/empleados"
  },
  {
    key: "4",
    icon: <BarChartOutlined />, 
    label: "Reportes",
    path: "/reportes"
  },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Determinar la pestaña seleccionada según la ruta actual
  const selectedKey = sidebarItems.find(item => item.path === location.pathname)?.key || "1";

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ background: "#f7b801" }} // color amarillo heladería
      >
        <div
          style={{
            height: 64,
            margin: 16,
            background: "rgba(255,255,255,0.3)",
            borderRadius: 8,
            textAlign: "center",
            lineHeight: "64px",
            fontWeight: "bold",
            color: "#fff",
            fontSize: 24,
            transition: "width 0.2s",
            overflow: "hidden",
            whiteSpace: "nowrap"
          }}
        >
          🍦 {!collapsed && "Heladería"}
        </div>
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[selectedKey]}
          items={sidebarItems.map(({ key, icon, label }) => ({ key, icon, label }))}
          style={{ background: "#f7b801", border: "none" }}
          onClick={({ key }) => {
            const item = sidebarItems.find(i => i.key === key);
            if (item) navigate(item.path);
          }}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#fff",
            display: "flex",
            alignItems: "center",
            boxShadow: "0 2px 8px #f0f1f2",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "20px", width: 64, height: 64 }}
          />
          <span style={{ fontWeight: 600, fontSize: 20, marginLeft: 16 }}>
            Panel de Gestión
          </span>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "linear-gradient(135deg, #f7b801 0%, #fff6e0 100%)",
            borderRadius: 16,
            boxShadow: "0 4px 24px 0 rgba(0,0,0,0.07)"
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
