import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cart/CartReducer";
const plus = <FontAwesomeIcon icon={faPlus} size="xl" />;

const SingleFood = ({ img, name, price, id }) => {
  const dispatch = useDispatch();
  const addItemToCart = () => {
    dispatch(addToCart({ name, price, id }));
  };
  return (
    <li className="singlefood">
      <div className="food-img">
        <img src={img} alt={name} />
      </div>
      <div className="meta">
        <h1>
          <Link to={`/foods/${id}`}> {name} </Link>
        </h1>
        <div className="food-data">
          <p className="price">
            {price} <span>$</span>
          </p>
          <button onClick={addItemToCart}>{plus}</button>
        </div>
      </div>
    </li>
  );
};

export default SingleFood;
