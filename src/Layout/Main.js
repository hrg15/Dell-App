import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Cart from "../Components/Cart/Cart";
import Foods from "../Components/foods/Foods";
import AllFoods from "../Pages/AllFoods";
import Contact from "../Pages/Contact";
import FoodDetails from "../Pages/FoodDetails";
import LeftMenu from "../Components/leftMenu/LeftMenu";
import Navbar from "../Components/navbar/Navbar";
import User from "../Pages/User";

const Main = () => {
  const showModal = useSelector((state) => state.cart.showCart);
  return (
    <Fragment>
      {showModal && <Cart />}
      <Navbar />
      <LeftMenu />
      <Routes>
        <Route path="/" element={<Foods />} />
        <Route path="/foods" element={<AllFoods />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<User />} />
        <Route path="/foods/:foodId" element={<FoodDetails />} />
      </Routes>
    </Fragment>
  );
};

export default Main;
