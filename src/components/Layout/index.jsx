import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FileText,
  Presentation,
  Mic,
  Trophy,
  Home,
  Menu,
  X,
} from "lucide-react";

const Layout = ({ children }) => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const menuItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Ementa", path: "/ementa", icon: FileText },
    { name: "Apresentações", path: "/apresentacoes", icon: Presentation },
    { name: "Podcasts", path: "/podcasts", icon: Mic },
    { name: "Cases", path: "/cases", icon: Trophy },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mainContainer">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          {isMobile ? (
            // Mobile Navigation
            <div className="mobile-nav">
              <div className="mobile-nav-header">
                <h1 className="mobile-nav-title">Base de Conhecimento</h1>
                <button
                  onClick={toggleMenu}
                  className="mobile-menu-toggle"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <X style={{ width: "1.5rem", height: "1.5rem" }} />
                  ) : (
                    <Menu style={{ width: "1.5rem", height: "1.5rem" }} />
                  )}
                </button>
              </div>

              {isMenuOpen && (
                <div className="mobile-menu-overlay" onClick={toggleMenu}>
                  <div
                    className="mobile-menu-content"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {menuItems.map((item) => {
                      const IconComponent = item.icon;
                      const isActive = location.pathname === item.path;
                      return (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={`mobile-menu-item ${
                            isActive ? "mobile-menu-item-active" : ""
                          }`}
                          onClick={toggleMenu}
                        >
                          <IconComponent
                            style={{ width: "1.25rem", height: "1.25rem" }}
                          />
                          <span>{item.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : (
            // Desktop Navigation
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
          )}
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

      {/* Mobile Navigation Styles */}
      <style jsx>{`
        .mobile-nav {
          width: 100%;
          padding: 1rem;
        }

        .mobile-nav-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .mobile-nav-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: rgb(31, 41, 55);
          margin: 0;
        }

        .mobile-menu-toggle {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 0.375rem;
          transition: background-color 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-menu-toggle:hover {
          background-color: rgb(243, 244, 246);
        }

        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1000;
          display: flex;
          justify-content: flex-end;
        }

        .mobile-menu-content {
          background-color: white;
          width: 280px;
          height: 100vh;
          box-shadow: -4px 0 6px -1px rgba(0, 0, 0, 0.1);
          padding: 2rem 1rem;
          overflow-y: auto;
        }

        .mobile-menu-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          margin-bottom: 0.5rem;
          border-radius: 0.5rem;
          text-decoration: none;
          color: rgb(75, 85, 99);
          transition: all 0.2s ease;
          font-weight: 500;
        }

        .mobile-menu-item:hover {
          background-color: rgb(239, 246, 255);
          color: rgb(37, 99, 235);
        }

        .mobile-menu-item-active {
          background-color: rgb(37, 99, 235);
          color: white;
        }

        .mobile-menu-item-active:hover {
          background-color: rgb(29, 78, 216);
          color: white;
        }

        @media (min-width: 769px) {
          .mobile-nav {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
