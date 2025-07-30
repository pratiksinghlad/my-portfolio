import { useTranslation } from "react-i18next";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import "../assets/styles/Footer.scss";
import { LINKEDIN_PROFILE_ID, GITHUB_PROFILE_ID, X_PROFILE_ID, MY_NAME } from "../utils/constants";

const currentYear: number = new Date().getFullYear();

function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div>
        <a href={`https://github.com/${GITHUB_PROFILE_ID}`} target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a
          href={`https://www.linkedin.com/in/${LINKEDIN_PROFILE_ID}`}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a href={`https://x.com/${X_PROFILE_ID}`} target="_blank" rel="noreferrer">
          <XIcon />
        </a>
      </div>
      <p>
        {t("footer.portfolioText")}{" "}
        <a
          href={`https://github.com/${GITHUB_PROFILE_ID}/my-portfolio`}
          target="_blank"
          rel="noreferrer"
        >
          {MY_NAME}
        </a>{" "}
        {t("footer.copyright", { year: currentYear })}
      </p>
    </footer>
  );
}

export default Footer;
