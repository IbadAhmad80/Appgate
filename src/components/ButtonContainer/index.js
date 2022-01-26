import React from "react";
import play_icon from "../../assets/icons/media/play.png";
import styles from "./button.module.scss";

import { useNavigate } from "react-router-dom";

const Button = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.button_container}
      onClick={() => navigate("sdp-video")}
    >
      <h4>{props.text}</h4>
      <img src={play_icon} alt="play icon" />
    </div>
  );
};

export default Button;
