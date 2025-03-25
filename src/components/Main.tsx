import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import "../assets/styles/Main.scss";
import { LINKEDIN_PROFILE_ID, GITHUB_PROFILE_ID, X_PROFILE_ID, MY_NAME } from "../utils/constants";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
           <img src="images/profile_picture_icon.jpg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href={`https://github.com/${GITHUB_PROFILE_ID}`} target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a
              href={`https://www.linkedin.com/in/${LINKEDIN_PROFILE_ID}`}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a href={`https://x.com/${X_PROFILE_ID}`} target="_blank" rel="noreferrer">
              <XIcon />
            </a>
          </div>

          <h2>{MY_NAME}</h2>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href={`https://github.com/${GITHUB_PROFILE_ID}`} target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a
              href={`https://www.linkedin.com/in/${LINKEDIN_PROFILE_ID}`}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a href={`https://x.com/${X_PROFILE_ID}`} target="_blank" rel="noreferrer">
              <XIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
