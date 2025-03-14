import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import { LINKEDIN_PROFILE_ID, GITHUB_PROFILE_ID } from '../utils/constants';

function Footer() {
  return (
    <footer>
      <div>
        <a href={`https://github.com/${GITHUB_PROFILE_ID}`} target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href={`https://www.linkedin.com/in/${LINKEDIN_PROFILE_ID}`} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
    </footer>
  );
}

export default Footer;