import { useDispatch } from "react-redux";
import { addToCart, removeItem } from "../../Redux/cart/CartReducer";

const CartItem = ({ food }) => {
  const dispatch = useDispatch();
  const addItemToCart = (food) => {
    dispatch(addToCart(food));
  };
  const removeItemCart = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <li key={food.id}>
      <h3>{food.name}</h3>
      <div className="amount">
        <p>{food.totalPrice}$</p>
        <p>{food.totalQuantity}x</p>
      </div>
      <button onClick={() => addItemToCart(food)}>+</button>
      <button onClick={() => removeItemCart(food.id)}>-</button>
    </li>
  );
};

export default CartItem;
