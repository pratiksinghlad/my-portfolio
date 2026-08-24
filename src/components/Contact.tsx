import { useTranslation } from "react-i18next";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";
import SectionTitle from "./SectionTitle";
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
        <SectionTitle translationKey="contact.title" />
        <p>{t("contact.description1")}</p>

        <div className="contact-actions">
          <button type="button" className="btn-primary" onClick={handleContactClick}>
            <EmailIcon /> {t("contact.startConversation")}
          </button>

          <button type="button" className="btn-secondary" onClick={handleDownload}>
            <DownloadIcon /> {t("contact.viewResume")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
