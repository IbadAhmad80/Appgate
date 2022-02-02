import React from "react";
import ReactDom from "react-dom";

import close from "../../assets/icons/media/close-remove.png";

import "./styles.scss";
import Form from "./Form";

export default function Modal({ isCloseModal, closeModal }) {
  if (closeModal) return <></>;

  return (
    //    ReactDom.createPortal(
    <div className="modal-container">
      <div onClick={isCloseModal}>
        <img src={close} alt="close img" className="close-icon" />
      </div>
      <h1>Request for Materials</h1>
      <h6>All fields are required unless marked optional</h6>
      <Form isCloseModal={isCloseModal} />
    </div>
    //     document.getElementById("modal")
  );
}