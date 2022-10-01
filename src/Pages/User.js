import { useDispatch } from "react-redux";
import { showCartToggle } from "../Redux/cart/CartReducer";
import "../Sass/styles/user.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const user = <FontAwesomeIcon icon={faUser} size="2x" />;

const User = () => {
  const dispatch = useDispatch();

  return (
    <div className="user-page">
      <div className="user-img">{user}</div>
      <div className="user-info">
        <h3>username</h3>
        <h5>user email</h5>
        <div className="user-btn">
          <button onClick={() => dispatch(showCartToggle())}>Cart</button>
          <button>Log out</button>
        </div>
      </div>
    </div>
  );
};

export default User;
