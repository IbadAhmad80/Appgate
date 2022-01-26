import React from "react";
import leftBorder from "../../assets/icons/media/Vector 1@3x.png";

import Button from "../ButtonContainer";
import "./heroSection.scss";

const HeroSection = () => {
  return (
    <div className="hero_section_wrapper">
      <img src={leftBorder} className="border_image" alt="left border img" />
      <div className="textContainer">
        <h3 className="mainText">Welcome to the Zero BS Zone</h3>
        <p className="thanksNote">
          Thankyou for taking the time to explore our Zero Trust Tablet
          Experience! After watching short video, you can :
        </p>
        <p className="upperHr" />
        <p className="upperSecondaryText">
          Explore real-world Business and technology applications for Zero
          Trust-based security solutions
        </p>
        <p className="lowerHr" />
        <p className="lowerSecondaryText">
          Separate facts from fiction and earn some swag with our Zero-Trust
          based Zero BS challenge.
        </p>
        <Button text={"Get Started"} />
      </div>
    </div>
  );
};

export default HeroSection;
