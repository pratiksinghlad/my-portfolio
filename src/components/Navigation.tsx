import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LanguageSwitcher from "./LanguageSwitcher";
import "../assets/styles/Navigation.scss";

// Simple navigation links config with translation keys
const navLinks = [
  { name: "navigation.expertise", href: "#expertise" },
  { name: "navigation.history", href: "#experience" },
  { name: "navigation.contact", href: "#contact" },
  { name: "navigation.projects", href: "#projects" },
];

function Navigation() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle theme effect
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container container">
          <div className="nav-left">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </button>
            <div className="nav-brand">
              <a href="/">
                <img src="./favicon.ico" alt="Pratik Lad logo" className="brand-icon" />
              </a>
            </div>
          </div>

          <div className="nav-center desktop-only">
            <div className="nav-links">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="nav-link">
                  {t(link.name)}
                </a>
              ))}
            </div>
          </div>

          <div className="nav-right">
            <div className="desktop-only">
              <LanguageSwitcher />
            </div>
            <div className="nav-mobile-toggle" onClick={toggleMobileMenu}>
              <MenuIcon fontSize="large" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`overlay ${mobileOpen ? "open" : ""}`} onClick={toggleMobileMenu}></div>
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <div className="close-icon" onClick={toggleMobileMenu}>
          <CloseIcon fontSize="large" />
        </div>
        <div className="mobile-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={handleLinkClick}>
              {t(link.name)}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navigation;
