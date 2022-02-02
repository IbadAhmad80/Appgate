import React from "react";
import play_icon from "../../assets/icons/media/play.png";
import styles from "./button.module.scss";

const Button = (props) => {
  return (
    <div className={styles.button_container}>
      <h4>{props.text}</h4>
      <img src={play_icon} alt="play icon " />
    </div>
  );
};

export default Button;
