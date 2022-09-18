import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const plus = <FontAwesomeIcon icon={faPlus} size="xl" />;

const singleFood = ({ img, name, price }) => {
  return (
    <li className="singlefood">
      <div className="food-img">
        <img src={img} alt={name} />
      </div>
      <div className="meta">
        <h1>
          <a href="/foodname"> {name} </a>
        </h1>
        <div className="food-data">
          <p className="price">
            {price} <span>$</span>
          </p>
          <button>{plus}</button>
        </div>
      </div>
    </li>
  );
};

export default singleFood;
