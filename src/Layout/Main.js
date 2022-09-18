import React from "react";
import Foods from "../Components/foods/Foods";
import LeftMenu from "../Components/leftMenu/LeftMenu";
import Navbar from "../Components/navbar/Navbar";
import Modal from "../Ui/modal/Modal";

const Main = () => {
  return (
    <React.Fragment>
      <Navbar />
      {/* <Modal /> */}
      <LeftMenu />
      <Foods />
    </React.Fragment>
  );
};

export default Main;
