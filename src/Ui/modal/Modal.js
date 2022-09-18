import React from "react";
import ReactDOM from "react-dom";
import "../../Sass/styles/modal.scss";

const Backdrop = (props) => {
  return <div className="modal-backdrop" onClick={props.closeModal}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <h2>title</h2>
      <div className="modal-text">
        <p>this is a message</p>
      </div>
      <button onClick={props.closeModal}>close</button>
    </div>
  );
};

const overLays = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop closeModal={props.onClose} />, overLays)}
      {ReactDOM.createPortal(
        <ModalOverlay closeModal={props.onClose} />,
        overLays
      )}
    </React.Fragment>
  );
};

export default Modal;
