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
  { name: "navigation.home", href: "#home", id: "home" },
  { name: "navigation.expertise", href: "#skills", id: "skills" },
  { name: "navigation.history", href: "#experience", id: "experience" },
  { name: "navigation.projects", href: "#projects", id: "projects" },
  { name: "navigation.contact", href: "#contact", id: "contact" },
];

function Navigation() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [activeSegment, setActiveSegment] = useState("home");

  // Handle scroll and dynamic active section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sectionIds = ["home", "skills", "experience", "projects", "contact"];

      // Check if user has scrolled near the bottom of the page
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;

      if (isAtBottom) {
        setActiveSegment("contact");
        return;
      }

      // Find the current section in view based on bounding client rect
      const offset = 160; // Offset for fixed navbar height and visual buffer
      let currentSection = "home";

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= offset) {
            currentSection = id;
          }
        }
      }

      setActiveSegment(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    window.addEventListener("hashchange", handleScroll);

    // Initial check on mount
    handleScroll();

    // Check again after dynamic lazy components load
    const timer = setTimeout(handleScroll, 300);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("hashchange", handleScroll);
      clearTimeout(timer);
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

  const handleLinkClick = (sectionId: string) => {
    setActiveSegment(sectionId);
    setMobileOpen(false);
  };

  // Close the mobile menu with the Escape key for keyboard users
  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container container">
          <div className="nav-left">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </button>
            <div className="nav-brand">
              <a href={import.meta.env.BASE_URL} onClick={() => setActiveSegment("home")}>
                <img
                  src={`${import.meta.env.BASE_URL}favicon.ico`}
                  alt="Pratik Lad logo"
                  className="brand-icon"
                />
              </a>
            </div>
          </div>

          <div className="nav-center desktop-only">
            <div className="nav-divider"></div>
            <div className="nav-links">
              {navLinks.map((link) => {
                const isActive = activeSegment === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleLinkClick(link.id)}
                    className={`nav-link ${isActive ? "active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {t(link.name)}
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
            <div className="nav-mobile-toggle">
              <button
                type="button"
                className="mobile-toggle-btn"
                onClick={toggleMobileMenu}
                aria-label={t("navigation.menu")}
                aria-expanded={mobileOpen}
              >
                <MenuIcon fontSize="large" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`overlay ${mobileOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}
        aria-hidden="true"
      ></div>
      <div
        className={`mobile-menu ${mobileOpen ? "open" : ""}`}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen ? true : undefined}
      >
        <button
          type="button"
          className="close-icon"
          onClick={toggleMobileMenu}
          aria-label={t("navigation.close")}
          tabIndex={mobileOpen ? 0 : -1}
        >
          <CloseIcon fontSize="large" />
        </button>
        <div className="mobile-links">
          {navLinks.map((link) => {
            const isActive = activeSegment === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.id)}
                className={isActive ? "active" : ""}
                aria-current={isActive ? "page" : undefined}
                tabIndex={mobileOpen ? 0 : -1}
              >
                {t(link.name)}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Navigation;
