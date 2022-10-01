import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showCartToggle } from "../../Redux/cart/CartReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faBagShopping,
  faHeadset,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const foods = <FontAwesomeIcon icon={faUtensils} size="xl" />;
const bag = <FontAwesomeIcon icon={faBagShopping} size="xl" />;
const contact = <FontAwesomeIcon icon={faHeadset} size="xl" />;
const user = <FontAwesomeIcon icon={faUser} size="2x" />;

const MenuItems = () => {
  const quantity = useSelector((state) => state.cart.totalCartQuantity);
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(showCartToggle());
  };
  return (
    <div className="menu">
      <ul>
        <li>
          <span>{foods}</span> <Link to="/foods">Foods</Link>
        </li>
        <li onClick={showCart}>
          {" "}
          <span>{bag}</span> Cart{" "}
          {quantity > 0 && <p className="menu-quantity">{quantity}</p>}
        </li>
        <li>
          {" "}
          <span>{contact}</span>
          <Link to="/contact">Contact</Link>
        </li>
        <li className="user">
          <Link to="/user">{user}</Link>
          <span>user</span>
        </li>
      </ul>
    </div>
  );
};
export default MenuItems;
