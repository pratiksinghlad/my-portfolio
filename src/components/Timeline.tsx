import { useTranslation } from "react-i18next";
import SectionTitle from "./SectionTitle";
import "../assets/styles/Timeline.scss";

const experienceData = [
  { id: 1, key: "senior" },
  { id: 2, key: "executive" },
  { id: 3, key: "developer" },
];

function Timeline() {
  const { t } = useTranslation();

  return (
    <div id="experience">
      <div className="fade-in">
        <SectionTitle translationKey="timeline.professionalExperience" />
      </div>

      <div className="timeline-container">
        {experienceData.map((item) => (
          <div className="timeline-item" key={item.id}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{t(`timeline.${item.key}.title`)}</h3>
              <span className="timeline-date">{t(`timeline.${item.key}.period`)}</span>
              <p>{t(`timeline.${item.key}.description`)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
