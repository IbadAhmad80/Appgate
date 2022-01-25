import React from "react";
import leftBorder from "../../assets/icons/media/Vector 1@3x.png";

import Button from "../ButtonContainer";
import styles from "./hero-section.module.scss";

const HeroSection = () => {
  return (
    <div className={styles.hero_section_wrapper}>
      <img
        src={leftBorder}
        className={styles.border_image}
        alt="left border img"
      />
      <div className={styles.textContainer}>
        <h3 className={styles.mainText}>Welcome to the Zero BS Zone</h3>
        <p className={styles.thanksNote}>
          Thankyou for taking the time to explore our Zero Trust Tablet
          Experience! After watching short video, you can :
        </p>
        <p className={styles.upperHr} />
        <p className={styles.upperSecondaryText}>
          Explore real-world Business and technology applications for Zero
          Trust-based security solutions
        </p>
        <p className={styles.lowerHr} />
        <p className={styles.lowerSecondaryText}>
          Separate facts from fiction and earn some swag with our Zero-Trust
          based Zero BS challenge.
        </p>
        <Button text={"Get Started"} />
      </div>
    </div>
  );
};

export default HeroSection;
