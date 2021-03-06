import React, { useState } from "react";

import LandingScreen from "./pages/LandingScreen";
import SDPVideo from "./pages/SDPVideo";

import IdleTimer from "react-idle-timer";
import { Route, Routes, useNavigate } from "react-router-dom";
import ScreenSaver from "./pages/ScreenSaver/index";
import UseCasesWrapper from "./pages/UseCases";
import BSChallenge from "./pages/ChallengeScreen/index";
import Demo from "./pages/DemoScreen/index";
import ScheduleDemo from "./pages/ScheduleDemo/index";

function App() {
  const navigate = useNavigate();
  let [idleTimer, _] = useState(null);
  let [timedOut, setIsTimedOut] = useState(false);

  const _onActive = (e) => {
    setIsTimedOut(false);
  };

  const _onIdle = (e) => {
    if (timedOut) {
    } else {
      idleTimer.reset();
      setIsTimedOut(true);
      navigate("/screen-saver");
    }
  };

  return (
    <>
      <IdleTimer
        ref={(ref) => {
          idleTimer = ref;
        }}
        timeout={1000 * 600 * 1}
        onActive={_onActive}
        onIdle={_onIdle}
        onAction={_onActive}
        debounce={250}
      />
      <Routes>
        <Route path="/" element={<LandingScreen />} exact />
        <Route path="/screen-saver" element={<ScreenSaver />} exact />
        <Route path="/sdp-video" element={<SDPVideo />} exact />
        <Route path="/use-cases" element={<UseCasesWrapper />} exact />
        <Route path="/challenge" element={<BSChallenge />} exact />
        <Route path="/demo" element={<Demo />} exact />
        <Route path="/schedule-demo" element={<ScheduleDemo />} exact />
      </Routes>
    </>
  );
}

export default App;
