import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDocker } from "@fortawesome/free-brands-svg-icons";
import { faCode, faServer } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Expertise.scss";

const skillsData = [
  {
    key: "fullstack",
    icon: faCode,
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "HTML5/CSS3"],
  },
  {
    key: "backend",
    icon: faServer,
    techStack: ["Node.js", "Express", ".NET Core", "GraphQL", "PostgreSQL", "MongoDB"],
  },
  {
    key: "devops",
    icon: faDocker,
    techStack: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform"],
  },
];

function Expertise() {
  const { t } = useTranslation();

  return (
    <div className="container" id="skills">
      <div className="skills-container fade-in">
        <h1 className="section-title">
          {t("expertise.title")
            .split(" ")
            .map((word: string, i: number, arr: string[]) => (
              <span key={i} className={i === arr.length - 1 ? "text-accent" : ""}>
                {word}{" "}
              </span>
            ))}
        </h1>

        <div className="skills-grid">
          {skillsData.map((skill) => (
            <div className="skill-card" key={skill.key}>
              <div className="skill-header">
                <div className="skill-icon">
                  <FontAwesomeIcon icon={skill.icon} />
                </div>
                <h3>{t(`expertise.${skill.key}.title`)}</h3>
              </div>
              <p>{t(`expertise.${skill.key}.description`, { years: 5 })}</p>
              <div className="skill-tags">
                {skill.techStack.map((tech) => (
                  <span className="tech-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
