import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
const Social = (props) => {
  return (
    <ul>
      <li>
        <a href="/tell">
          <FontAwesomeIcon icon={faPhone} size="xl" />
        </a>
      </li>
      <li>
        <a href="/instagram">
          <FontAwesomeIcon icon={faInstagram} size="xl" />
        </a>
      </li>
      <li>
        <a href="/whatsup">
          <FontAwesomeIcon icon={faWhatsapp} size="xl" />
        </a>
      </li>
      <li>
        <a href="https://github.com/hrg15">
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </a>
      </li>
    </ul>
  );
};
export default Social;
