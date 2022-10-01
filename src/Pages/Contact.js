import React from "react";
import "../Sass/styles/contact.scss";

const Contact = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact">
      <h4>Send your text i'll read it!</h4>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Title" />
        <input type="email" placeholder="Your email" />
        <textarea cols="30" rows="5" placeholder="Your text..."></textarea>
        <button>send</button>
      </form>
    </div>
  );
};

export default Contact;
