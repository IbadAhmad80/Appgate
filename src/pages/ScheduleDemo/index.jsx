import React from "react";

import SideDrawer from "../../components/Sidebar";

import background_video from "../../assets/ani_background.mp4";
import topBorder from "../../assets/icons/media/futuredemo1.png";
import bottomBorder from "../../assets/icons/media/futuredemo2.png";

import "./styles.scss";
import "../DemoScreen/styles.scss";
import DemoForm from "../../components/DemoForm";

export default function ScheduleDemo() {
  return (
    <div className="schedule-demo-wrapper fade-in-demo">
      <div className="layout-flex">
        <div className="sidebar-flex">
          <SideDrawer />
        </div>
        <div className="content-flex">
          <video muted autoPlay loop className="demo-screen-video">
            <source src={background_video} type="video/mp4" />
          </video>
          <div className="container">
            <div>
              <div className="header">
                <img
                  src={topBorder}
                  alt="top border img"
                  className="results-top-border"
                />
                <h2>Schedule a Future Demo</h2>
                <p>
                  Don't have a time for a Zero-BS demo this second? That's fine!
                  Fill out this form to schedule one for later.
                </p>
                <img
                  src={bottomBorder}
                  alt="bottom border img"
                  className="results-bottom-border"
                />
              </div>
            </div>
            <DemoForm />
          </div>
        </div>
      </div>
    </div>
  );
}
