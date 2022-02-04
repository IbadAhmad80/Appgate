import React from "react";
import leftBorder from "../../assets/icons/media/Vector 1@3x.png";

import "../HeroSection/heroSection.scss";
import "./styles.scss";

const ThankYou = () => {
  return (
    <div className="hero_section_wrapper">
      <img
        src={leftBorder}
        className="thankyou_border_image"
        alt="left border img"
      />
      <div className="textContainer">
        <h3 className="mainText">
          Thank <br />
          you!
        </h3>
        <p className="thanksNote">We've got your demo scheduled!</p>
      </div>
    </div>
  );
};

export default ThankYou;
