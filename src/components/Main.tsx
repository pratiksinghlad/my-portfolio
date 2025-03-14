import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import { LINKEDIN_PROFILE_ID, GITHUB_PROFILE_ID } from '../utils/constants';
import profilePictureIcon from '../assets/images/profile_picture_icon.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilePictureIcon} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href={`https://github.com/${GITHUB_PROFILE_ID}`} target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href={`https://www.linkedin.com/in/${LINKEDIN_PROFILE_ID}`} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Pratik Singh Lad</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href={`https://github.com/${GITHUB_PROFILE_ID}`} target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href={`https://www.linkedin.com/in/${LINKEDIN_PROFILE_ID}`} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;