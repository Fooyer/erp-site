import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FileText, Presentation, Mic, Trophy, Home } from "lucide-react";

const Layout = ({ children }) => {
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Ementa", path: "/ementa", icon: FileText },
    { name: "Apresentações", path: "/apresentacoes", icon: Presentation },
    { name: "Podcasts", path: "/podcasts", icon: Mic },
    { name: "Cases", path: "/cases", icon: Trophy },
  ];

  return (
    <div className="mainContainer">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="menu-container">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`menu-button ${
                    isActive ? "menu-button-active" : "menu-button-inactive"
                  }`}
                >
                  <IconComponent
                    style={{ width: "1.25rem", height: "1.25rem" }}
                  />
                  <span>{item.name}</span>
                  {isActive && (
                    <div
                      className="pulse-bg"
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "rgb(37, 99, 235)",
                        borderRadius: "9999px",
                        zIndex: -1,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main">
        <div className="content-container">{children}</div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p style={{ color: "rgb(209, 213, 219)" }}>
            © 2025 Base de Conhecimento - Sistemas Integrados de Gestão
          </p>
          <p
            style={{
              color: "rgb(156, 163, 175)",
              fontSize: "0.875rem",
              marginTop: "0.5rem",
            }}
          >
            Desenvolvido pelos alunos da disciplina
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
