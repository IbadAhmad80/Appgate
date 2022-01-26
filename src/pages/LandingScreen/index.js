import React from "react";
import landing_gif from "../../assets/landing_gif.mp4";
import HeroSection from "../../components/HeroSection";
import SideDrawer from "../../components/Sidebar/index";

const LandingScreen = () => {
  return (
    <div>
      <video muted autoPlay loop style={backgroundGif}>
        <source src={landing_gif} type="video/mp4" />
      </video>
      <SideDrawer />
      <HeroSection />
    </div>
  );
};

const backgroundGif = {
  position: "relative",
  zIndex: "-1",
  height: "100vh",
  width: "100%",
  objectFit: "cover",
  objectPosition: "center",
};

export default LandingScreen;
