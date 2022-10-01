import React from "react";
import foods from "../Components/foods/foodData";
import SingleFood from "../Components/foods/SingleFood";
import "../Sass/styles/allFoods.scss";
const AllFoods = () => {
  return (
    <div className="all-foods">
      <ul className="foods">
        {foods.map((food) => (
          <SingleFood
            key={food.id}
            name={food.name}
            price={food.price}
            img={food.img}
            id={food.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default AllFoods;
