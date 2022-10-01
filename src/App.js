import { useEffect } from "react";
import Main from "./Layout/Main";
import { useDispatch, useSelector } from "react-redux";
import { sendCartData, reciveCartData } from "./Redux/cart/CartActions";
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const amount = useSelector((state) => state.cart.totalPrice);
  const quantity = useSelector((state) => state.cart.totalCartQuantity);
  const changed = useSelector((state) => state.cart.changed);

  useEffect(() => {
    dispatch(reciveCartData());
  }, [dispatch, changed]);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData({ cart, amount, quantity }));
  }, [dispatch, cart, amount, quantity]);
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
