import React from "react";

import SideDrawer from "../../components/Sidebar";

import background_video from "../../assets/ANI_Demo_Shirt.mp4";

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
        </div>
      </div>
    </div>
  );
}
