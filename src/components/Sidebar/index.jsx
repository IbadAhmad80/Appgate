import React, { useState, useEffect } from "react";
import "./drawer.scss";

import bull from "../../assets/icons/media/bull.png";
import small from "../../assets/icons/media/small.png";
import frame from "../../assets/icons/media/frame.png";
import play from "../../assets/icons/media/play2.png";
import right from "../../assets/icons/media/right.png";
import event from "../../assets/icons/media/event.png";
import left from "../../assets/icons/media/left.png";
import bullGreen from "../../assets/icons/media/bull-green.png";
import smallGreen from "../../assets/icons/media/small-green.png";
import frameGreen from "../../assets/icons/media/frame-green.png";
import playGreen from "../../assets/icons/media/play-green.png";
import eventGreen from "../../assets/icons/media/event-green.png";

import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const SideDrawer = ({ isFadeOutUseCases }) => {
  const navigate = useNavigate();
  const [toggleArrowIcon, setToggleArrowIcon] = useState(true);
  const [toggleBullIcon, setToggleBullIcon] = useState(true);
  const [toggleSmallIcon, setToggleSmallIcon] = useState(true);
  const [toggleFrameIcon, setToggleFrameIcon] = useState(true);
  const [togglePlayIcon, setTogglePlayIcon] = useState(true);
  const [toggleEventIcon, setToggleEventIcon] = useState(true);

  const [menuClasses, setMenuClasses] = useState(
    classNames({
      sidebar_wrapper: true,
    })
  );

  useEffect(() => {
    if (window.location.href.split("/")[3] === "sdp-video")
      toggleFocusElements("play");
    else if (window.location.href.split("/")[3] === "use-cases")
      toggleFocusElements("frame");
    else if (window.location.href.split("/")[3] === "challenge")
      toggleFocusElements("bull");
    else if (window.location.href.split("/")[3] === "demo")
      toggleFocusElements("small");
    else if (window.location.href.split("/")[3] === "schedule-demo")
      toggleFocusElements("event");
  }, []);

  const toggleMenuClasses = () => {
    if (menuClasses.indexOf("sidebar_items_expand") === -1) {
      setMenuClasses(
        classNames({
          sidebar_wrapper: true,
          sidebar_items_expand: true,
        })
      );
      setToggleArrowIcon(false);
    } else {
      setMenuClasses(
        classNames({
          sidebar_wrapper: true,
          sidebar_items_collapse: true,
        })
      );
      setToggleArrowIcon(true);
    }
  };

  const toggleFocusElements = (toggleIcon) => {
    switch (toggleIcon) {
      case "play":
        setToggleEventIcon(true);
        setToggleFrameIcon(true);
        setToggleSmallIcon(true);
        setTogglePlayIcon(!togglePlayIcon);
        setToggleBullIcon(true);
        break;

      case "event":
        setToggleEventIcon(!toggleEventIcon);
        setToggleFrameIcon(true);
        setToggleSmallIcon(true);
        setTogglePlayIcon(true);
        setToggleBullIcon(true);
        break;

      case "frame":
        setToggleEventIcon(true);
        setToggleFrameIcon(!toggleFrameIcon);
        setToggleSmallIcon(true);
        setTogglePlayIcon(true);
        setToggleBullIcon(true);
        break;

      case "small":
        setToggleEventIcon(true);
        setToggleFrameIcon(true);
        setToggleSmallIcon(!toggleSmallIcon);
        setTogglePlayIcon(true);
        setToggleBullIcon(true);
        break;

      case "bull":
        setToggleEventIcon(true);
        setToggleFrameIcon(true);
        setToggleSmallIcon(true);
        setTogglePlayIcon(true);
        setToggleBullIcon(!toggleBullIcon);
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <div className={menuClasses}>
        <div className="sidebar_items_wrapper">
          <div className="sidebar_item" onClick={() => navigate("/")}>
            <p>appgate</p>
            <span onClick={toggleMenuClasses}>
              <img
                src={toggleArrowIcon ? right : left}
                alt="menu element img"
              />
            </span>
          </div>
          <div
            className="sidebar_item"
            onClick={() => {
              toggleFocusElements("play");
              navigate("/sdp-video");
            }}
          >
            <p className={`${!togglePlayIcon && "green_text"}`}>
              WATCH SDP VIDEO
            </p>
            <span>
              <img
                src={togglePlayIcon ? play : playGreen}
                alt="menu element img"
              />
            </span>
          </div>
          <div
            className="sidebar_item"
            onClick={() => {
              toggleFocusElements("frame");
              navigate("/use-cases");
            }}
          >
            <p className={`${!toggleFrameIcon && "green_text"}`}>MORE ON SDP</p>
            <span onClick={() => toggleFocusElements("frame")}>
              <img
                src={toggleFrameIcon ? frame : frameGreen}
                alt="menu element img"
              />
            </span>
          </div>
          <div className="sidebar_item">
            <p className={`${!toggleBullIcon && "green_text"}`}>
              ZERO BS CHALLENGE
            </p>
            <span onClick={() => toggleFocusElements("bull")}>
              <img
                src={toggleBullIcon ? bull : bullGreen}
                alt="menu element img"
              />
            </span>
          </div>
          <div className="sidebar_item">
            <p className={`${!toggleSmallIcon && "green_text"}`}>
              SEE DEMO NOW
            </p>
            <span onClick={() => toggleFocusElements("small")}>
              <img
                src={toggleSmallIcon ? small : smallGreen}
                alt="menu element img"
              />
            </span>
          </div>
          <div className="sidebar_item">
            <p className={`${!toggleEventIcon && "green_text"}`}>
              SCHEDULE DEMO
            </p>
            <span onClick={() => toggleFocusElements("event")}>
              <img
                src={toggleEventIcon ? event : eventGreen}
                alt="menu element img"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
