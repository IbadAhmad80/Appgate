import React, { useState } from "react";
import "./styles.scss";

import { useNavigate } from "react-router-dom";

const ScreenSaver = () => {
  const [removeScreenSaver, setRemoveScreenSaver] = useState(false);
  const navigate = useNavigate();

  const handleTransition = () => {
    setRemoveScreenSaver(true);
    setTimeout(() => navigate("/"), 600);
  };

  return (
    <div
      className={`screensaver-text ${removeScreenSaver && "fade-out-text"}`}
      onClick={handleTransition}
    >
      <p>ScreenSaver</p>
    </div>
  );
};

export default ScreenSaver;
