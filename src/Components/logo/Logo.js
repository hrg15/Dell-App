import logo from "../../Assets/images/mry.png";
import "../../Sass/styles/logo.scss";
const Logo = ({ classNames }) => {
  return <img className={classNames + " logo"} src={logo} alt="del-logo" />;
};
export default Logo;
