import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";
import Box from "@mui/material/Box";
import "../assets/styles/Contact.scss";

function Contact() {
  const handleContactClick = () => {
    window.location.href = "mailto:pratiklad96@gmail.com";
  };

  const handleDownload = () => {
    const fileId = "1lPWbnOhRc4LCah6EHNKr9rQrGif3nJ6z/view?usp=sharing";
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
          <h1>Lets Create Something Amazing</h1>
          <p>
            Ready to bring your vision to life? With expertise in full-stack development and cloud
            architecture, I transform complex ideas into elegant, scalable solutions. Specializing
            in modern web technologies, microservices, and cloud-native applications, I can help you
            build robust and future-proof applications.
          </p>
          <p className="availability">
            🟢 Available for freelance projects and technical consultations
          </p>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<EmailIcon />}
              onClick={handleContactClick}
            >
              Start a Conversation
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<DownloadIcon />}
              onClick={handleDownload}
            >
              View Resume
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
