import React from "react";

import SideDrawer from "../../components/Sidebar";

import background_video from "../../assets/ANI_Demo_Shirt.mp4";
import leftBorder from "../../assets/icons/media/Vector 1@3x.png";

import "./styles.scss";

export default function Demo() {
  return (
    <div className="demo-screen-wrapper fade-in-demo">
      <div className="layout-flex">
        <div className="sidebar-flex">
          <SideDrawer />
        </div>
        <div className="content-flex">
          <video muted autoPlay loop className="demo-screen-video">
            <source src={background_video} type="video/mp4" />
          </video>

          <div className="hero_section_wrapper">
            <img
              src={leftBorder}
              className="border_image"
              alt="left border img"
            />
            <div className="textContainer">
              <h3 className="mainText">We're Dying to Demo</h3>
              <p className="thanksNote">
                Get a truely Zero-BS demo of our security solutions --just flag
                one of our people in the Appgate-t-shirts, and they'll get you
                set up!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
