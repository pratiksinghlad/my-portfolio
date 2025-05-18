import "@fortawesome/free-regular-svg-icons";
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
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faMicrosoft} size="3x" style={{ padding: "3px" }} />
            <FontAwesomeIcon icon={faReact} size="3x" style={{ padding: "3px" }} />
            <h3>Full Stack Web Development</h3>
            <p>
              {exprienceYear} years in Full Stack Web Dev: I craft enterprise-grade apps using .NET,
              JS/TS, Angular, React, SQL Server & T-SQL. Azure Certified expert in cloud solutions,
              microservices, Docker & Kubernetes.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSkill.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps & Automation</h3>
            <p>
              Once the application is built, I help clients set up DevOps testing, CI/CD pipelines,
              and deployment automation to support the successful Go-Live.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
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
