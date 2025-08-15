import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
// @ts-ignore
import { MenuUnfoldOutlined, MenuFoldOutlined, HomeOutlined, UserOutlined, ShopOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import './navbar.css';

const { Header, Sider, Content } = Layout;

const Navbar: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: '#2e4053' }}>
        <div className="logo" style={{ color: '#fff', textAlign: 'center', padding: '16px 0', fontWeight: 'bold', fontSize: 22 }}>
          Heladería
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{ background: '#2e4053' }}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Inicio
          </Menu.Item>
          <Menu.Item key="2" icon={<ShopOutlined />}>
            Productos
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            Empleados
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#34495e', padding: 0, display: 'flex', alignItems: 'center' }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggleCollapsed}
            style={{ color: '#fff', fontSize: '20px', marginLeft: 16 }}
          />
          <div style={{ color: '#fff', marginLeft: 24, fontSize: 18 }}>Panel de Gestión</div>
        </Header>
        <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280, background: '#f4f6f7' }}>
          {/* Aquí va el contenido principal */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Navbar;
