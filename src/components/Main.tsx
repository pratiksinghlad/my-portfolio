import { useTranslation } from "react-i18next";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../assets/styles/Main.scss";
import { LINKEDIN_PROFILE_ID, GITHUB_PROFILE_ID, MY_NAME } from "../utils/constants";

function Main() {
  const { t } = useTranslation();

  return (
    <div className="container" id="home">
      <div className="hero-section">
        <div className="hero-content fade-in">
          <h1 className="hero-title">
            Hi, I&apos;m <span className="text-accent">{MY_NAME}</span>
          </h1>
          <h2 className="hero-subtitle">{t("main.role")}</h2>
          <p className="hero-description">
            {t("main.tagline1")} {t("main.tagline2")}
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              {t("navigation.contact")}
            </a>
            <a href="#projects" className="btn-secondary">
              {t("main.viewProjects")}
            </a>
          </div>

          <div className="social-icons">
            <a
              href={`https://github.com/${GITHUB_PROFILE_ID}`}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon fontSize="large" />
            </a>
            <a
              href={`https://www.linkedin.com/in/${LINKEDIN_PROFILE_ID}`}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="mailto:contact@example.com" aria-label="Email">
              {" "}
              {/* Update email with real one if available */}
              <EmailIcon fontSize="large" />
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper fade-in">
          <img src="./images/profile_picture_icon.jpg" alt={MY_NAME} className="hero-image" />
        </div>
      </div>
    </div>
  );
}

export default Main;
