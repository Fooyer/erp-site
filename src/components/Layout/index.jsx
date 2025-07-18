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
import styles from "./layout.module.css";

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
    <div className={styles.mainContainer}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          {isMobile ? (
            // Mobile Navigation
            <div className={styles.mobileNav}>
              <div className={styles.mobileNavHeader}>
                <h1 className={styles.mobileNavTitle}>Base de Conhecimento</h1>
                <button
                  onClick={toggleMenu}
                  className={styles.mobileMenuToggle}
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
                <div className={styles.mobileMenuOverlay} onClick={toggleMenu}>
                  <div
                    className={styles.mobileMenuContent}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {menuItems.map((item) => {
                      const IconComponent = item.icon;
                      const isActive = location.pathname === item.path;
                      return (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={`${styles.mobileMenuItem} ${
                            isActive ? styles.mobileMenuItemActive : ""
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
            <div className={styles.menuContainer}>
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`${styles.menuButton} ${
                      isActive
                        ? styles.menuButtonActive
                        : styles.menuButtonInactive
                    }`}
                  >
                    <IconComponent
                      style={{ width: "1.25rem", height: "1.25rem" }}
                    />
                    <span>{item.name}</span>
                    {isActive && (
                      <div
                        className={`${styles.pulseBg} ${styles.pulseBackground}`}
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
      <main className={styles.main}>
        <div className={styles.contentContainer}>{children}</div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <p className={styles.footerText}>
            © 2025 Base de Conhecimento - Sistemas Integrados de Gestão
          </p>
          <p className={styles.footerSubText}>
            Desenvolvido pelos alunos da disciplina
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
