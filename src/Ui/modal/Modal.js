import React from "react";
import ReactDOM from "react-dom";
import "../../Sass/styles/modal.scss";
import { useDispatch } from "react-redux";
import { showCartToggle } from "../../Redux/cart/CartReducer";

const Backdrop = (props) => {
  return <div className="modal-backdrop" onClick={props.closeModal}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <h2>
        {props.title}
        <button className="modal-btn" onClick={props.onClose}>
          close
        </button>
      </h2>
      <div className="modal-text">{props.children}</div>
    </div>
  );
};

const overLays = document.getElementById("overlays");

const Modal = (props) => {
  const dispatch = useDispatch();
  const closeCartHandler = () => {
    dispatch(showCartToggle());
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop closeModal={closeCartHandler} />,
        overLays
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={closeCartHandler} title={props.title}>
          {props.children}
        </ModalOverlay>,
        overLays
      )}
    </React.Fragment>
  );
};

export default Modal;
