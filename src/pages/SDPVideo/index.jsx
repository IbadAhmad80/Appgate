import React, { useEffect, useState, useRef } from "react";

import sdb_overview from "../../assets/sdb_overview.mp4";
import play from "../../assets/icons/media/play@3x.png";

import "./styles.scss";
import SideDrawer from "../../components/Sidebar/index";

const SDPVideo = () => {
  const vidRef = useRef(null);
  const [pauseVideo, setPauseVideo] = useState(false);

  useEffect(() => {
    document
      .getElementById("sdp-video")
      .addEventListener("ended", handlePlayPause, false);
  }, []);

  const handlePlayPause = () => {
    if (!pauseVideo) vidRef.current.pause();
    else vidRef.current.play();
    setPauseVideo(!pauseVideo);
  };

  return (
    <div className="sdp-video-container">
      <div onClick={handlePlayPause}>
        <video
          muted
          autoPlay
          id="sdp-video"
          ref={vidRef}
          className="background-video"
        >
          <source src={sdb_overview} type="video/mp4" />
        </video>
        {pauseVideo && (
          <div className="play-img-container">
            <img src={play} alt="pause img" className="play-img" />
          </div>
        )}
      </div>
      {pauseVideo && <SideDrawer />}
    </div>
  );
};

export default SDPVideo;
