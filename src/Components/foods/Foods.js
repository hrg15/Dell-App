import "../../Sass/styles/foods.scss";
import SingleFood from "./SingleFood";
import foods from "./foodData";
import Posts from "../posts/Posts";

const Foods = () => {
  return (
    <ul className="foods">
      {foods.map((food) => (
        <SingleFood
          key={food.id}
          name={food.name}
          price={food.price}
          img={food.img}
        />
      ))}
      <Posts />
    </ul>
  );
};

export default Foods;
