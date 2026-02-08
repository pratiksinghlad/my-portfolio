import { useTranslation } from "react-i18next";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import "../assets/styles/Projects.scss";

const projects = [
  {
    id: "pdfOnline",
    technologies: ["React", "TypeScript", "Vite", "pdf-lib", "Web Workers", "Chakra UI"],
    github: "https://github.com/pratiksinghlad/pdf-online",
    link: "https://pratiksinghlad.github.io/pdf-online/",
  },
  {
    id: "jsonToAnything",
    technologies: ["TypeScript", "SCSS", "HTML", "JavaScript"],
    github: "https://github.com/pratiksinghlad/json-to-anything",
    link: "https://pratiksinghlad.github.io/json-to-anything/",
  },
  {
    id: "cqrsPattern",
    technologies: ["C#", ".NET 9", "MySQL", "Docker"],
    github: "https://github.com/pratiksinghlad/CQRSPatternApi",
  },
];

function Projects() {
  const { t } = useTranslation();

  return (
    <div id="projects">
      <div className="container fade-in">
        <h1 className="section-title">
          {t("projects.title") &&
            t("projects.title")
              .split(" ")
              .map((word: string, i: number, arr: string[]) => (
                <span key={i} className={i === arr.length - 1 ? "text-accent" : ""}>
                  {word}{" "}
                </span>
              ))}
        </h1>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-content">
                <div className="project-header">
                  <h3>{t(`projects.items.${project.id}.title`)}</h3>
                </div>

                <span className="project-role">{t(`projects.items.${project.id}.role`)}</span>
                <p>{t(`projects.items.${project.id}.description`)}</p>

                <div className="project-footer">
                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Repository"
                    >
                      <GitHubIcon />
                    </a>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Live Demo"
                      >
                        <LaunchIcon />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
