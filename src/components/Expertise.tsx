import "@fortawesome/free-regular-svg-icons";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faDocker, faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsSkill = [
  ".Net",
  "Angular",
  "Azure",
  "AWS",
  "Docker",
  "React",
  "TypeScript",
  "JavaScript",
  "SQL",
  "MSSQL",
];

const labelsDevops = ["Git", "Docker", "AWS", "Azure", "Linux"];

const exprienceYear = new Date().getFullYear() - 2017;

function Expertise() {
  const { t } = useTranslation();
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>{t("expertise.title")}</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faMicrosoft} size="3x" style={{ padding: "3px" }} />
            <FontAwesomeIcon icon={faReact} size="3x" style={{ padding: "3px" }} />
            <h3>{t("expertise.fullstack.title")}</h3>
            <p>{t("expertise.fullstack.description", { years: exprienceYear })}</p>
            <div className="flex-chips">
              <span className="chip-title">{t("expertise.fullstack.techStack")}</span>
              {labelsSkill.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>{t("expertise.devops.title")}</h3>
            <p>{t("expertise.devops.description")}</p>
            <div className="flex-chips">
              <span className="chip-title">{t("expertise.devops.techStack")}</span>
              {labelsDevops.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
