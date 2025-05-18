import Button from "@mui/material/Button";
import "../assets/styles/Contact.scss";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";
import Box from "@mui/material/Box";

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
          <h1>Contact Me</h1>
          <p>
            Have a project ready to come to life? Let’s collaborate—from backend to front, .NET to
            SQL, React to Azure - and make it happen!
          </p>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<EmailIcon />}
              onClick={handleContactClick}
            >
              Contact Me
            </Button>

            <Button
              variant="contained"
              color="secondary"
              startIcon={<DownloadIcon />}
              onClick={handleDownload}
            >
              Resume
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
