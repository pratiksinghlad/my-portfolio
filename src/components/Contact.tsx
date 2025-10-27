import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";
import Box from "@mui/material/Box";
import "../assets/styles/Contact.scss";

function Contact() {
  const { t } = useTranslation();
  const handleContactClick = () => {
    window.location.href = "mailto:pratiklad96@gmail.com";
  };

  const handleDownload = () => {
    const fileId = "11_KgYRSWK7HNRj2MFWpi37PfDZjYv9wW";
    const resumeUrl = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;

    const link = document.createElement("a");
    link.href = resumeUrl;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>{t("contact.title")}</h1>
          <p>{t("contact.description1")}</p>
          <p>{t("contact.description2")}</p>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<EmailIcon />}
              onClick={handleContactClick}
            >
              {t("contact.startConversation")}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<DownloadIcon />}
              onClick={handleDownload}
            >
              {t("contact.viewResume")}
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
