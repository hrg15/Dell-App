import Modal from "../../Ui/modal/Modal";
import "../../Sass/styles/cartItem.scss";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const foods = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  return (
    <Modal title="Cart">
      <ul className="cart-items">
        {foods.map((food) => (
          <CartItem key={food.id} food={food} />
        ))}
      </ul>
      {!foods.length > 0 ? (
        <p className="text-center">Add Some foods to the cart!</p>
      ) : (
        <div className="cart-details">
          <p>Total: {totalPrice}$</p>
          <button>Check out</button>
        </div>
      )}
    </Modal>
  );
};

export default Cart;
