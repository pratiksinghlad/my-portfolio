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
  { name: "navigation.home", href: "#home" },
  { name: "navigation.expertise", href: "#skills" },
  { name: "navigation.history", href: "#experience" },
  { name: "navigation.projects", href: "#projects" },
  { name: "navigation.contact", href: "#contact" },
];

function Navigation() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [activeSegment, setActiveSegment] = useState("home");

  // Handle scroll and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const options = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSegment(entry.target.id);
        }
      });
    }, options);

    const sections = ["home", "skills", "experience", "projects", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
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
              <a href={import.meta.env.BASE_URL}>
                <img src={`${import.meta.env.BASE_URL}favicon.ico`} alt="Pratik Lad logo" className="brand-icon" />
              </a>
            </div>
          </div>

          <div className="nav-center desktop-only">
            <div className="nav-divider"></div>
            <div className="nav-links">
              {navLinks.map((link) => {
                const isActive = activeSegment === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`nav-link ${isActive ? "active" : ""}`}
                  >
                    {link.name.includes(".") ? t(link.name) : link.name}
                  </a>
                );
              })}
            </div>
            <div className="nav-divider"></div>
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
          {navLinks.map((link) => {
            const isActive = activeSegment === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className={isActive ? "active" : ""}
              >
                {link.name.includes(".") ? t(link.name) : link.name}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Navigation;
