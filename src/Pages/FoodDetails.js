import { useParams } from "react-router-dom";
import foods from "../Components/foods/foodData";
import "../Sass/styles/foodDetail.scss";

const FoodDetails = () => {
  const { foodId } = useParams();
  const food = foods.find((el) => el.id === Number(foodId));
  return (
    <div className="food-detail">
      {/* Food id ={">"} {foodId} */}
      <div className="detail-img">
        <img src={food.img} alt={food.name} />
      </div>
      <div className="info">
        <h2>{food.name}</h2>
        <p>{food.description}</p>
        <div className="add-food">
          <input placeholder="1" type="number" min={1} max={100} />
          <button>add</button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
