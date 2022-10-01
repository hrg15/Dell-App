import { replaceCart } from "./CartReducer";

export const sendCartData = (data) => {
  return (dispatch) => {
    const sendData = async () => {
      await fetch(
        "https://del-food-hrg-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json/",
        {
          method: "PUT",
          body: JSON.stringify(data),
        }
      );
    };
    try {
      sendData();
    } catch (err) {
      console.log("sending has error", err);
    }
  };
};

export const reciveCartData = () => {
  return async (dispatch) => {
    const reciveData = async () => {
      const req = await fetch(
        "https://del-food-hrg-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json/"
      );
      const data = await req.json();
      return data;
    };
    try {
      const cartData = await reciveData();
      dispatch(
        replaceCart({
          cart: cartData.cart || [],
          totalPrice: cartData.totalPrice,
        })
      );
    } catch (err) {
      console.log("recive data has error", err);
    }
  };
};
