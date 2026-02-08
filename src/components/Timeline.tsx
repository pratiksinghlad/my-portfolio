// import { useTranslation } from "react-i18next";
import "../assets/styles/Timeline.scss";

const experienceData = [
  {
    id: 1,
    period: "2022 - Present",
    title: "Senior Full Stack Engineer",
    company: "Tech Company Inc.", // Replace with real company if known or generic
    description: "Leading development of scalable web applications, mentoring junior developers, and optimizing cloud infrastructure."
  },
  {
    id: 2,
    period: "2019 - 2022",
    title: "Software Engineer",
    company: "Startup X",
    description: "Developed and maintained multiple React-based projects, integrated RESTful APIs, and improved site performance by 40%."
  },
  {
    id: 3,
    period: "2017 - 2019",
    title: "Junior Developer",
    company: "Digital Agency",
    description: "Collaborated with designers to implement responsive UI/UX, built CRUD applications using Node.js and MongoDB."
  }
];

function Timeline() {
  // const { t } = useTranslation();

  return (
    <div id="experience">
      <div className="container fade-in">
        <h1 className="section-title">Professional <span className="text-accent">Experience</span></h1>
        
        <div className="timeline-container">
          {experienceData.map((item) => (
            <div className="timeline-item" key={item.id}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <span className="timeline-date">{item.period}</span>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;

