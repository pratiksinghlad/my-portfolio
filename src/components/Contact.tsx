import { useTranslation } from "react-i18next";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";
import "../assets/styles/Contact.scss";

function Contact() {
  const { t } = useTranslation();

  const handleContactClick = () => {
    window.location.href = "mailto:pratiklad96@gmail.com";
  };

  const handleDownload = () => {
    const fileId = "11_KgYRSWK7HNRj2MFWpi37PfDZjYv9wW";
    const resumeUrl = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
    window.open(resumeUrl, "_blank");
  };

  return (
    <div id="contact" className="container fade-in">
      <div className="contact-wrapper">
        <h1 className="section-title">
          {t("contact.title")
            .split(" ")
            .map((word: string, i: number, arr: string[]) => (
              <span key={i} className={i === arr.length - 1 ? "text-accent" : ""}>
                {word}{" "}
              </span>
            ))}
        </h1>
        <p>{t("contact.description1")}</p>

        <div className="contact-actions">
          <button className="btn-primary" onClick={handleContactClick}>
            <EmailIcon /> {t("contact.startConversation")}
          </button>

          <button className="btn-secondary" onClick={handleDownload}>
            <DownloadIcon /> {t("contact.viewResume")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
