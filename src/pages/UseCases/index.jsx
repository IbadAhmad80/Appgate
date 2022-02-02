import React, { useState } from "react";

import "./styles.scss";

import ani_background from "../../assets/ani_background.mp4";

import UseCases from "../../components/SingleUseCase/index";
import SideDrawer from "../../components/Sidebar/index";
import RemoteAccess from "../../components/UseCasesDetails/RemoteAccess";
import HybridEnterprise from "../../components/UseCasesDetails/HybridEnterprise";
import HybridCloud from "../../components/UseCasesDetails/HybridCloud";

const UseCasesWrapper = () => {
  const [useCaseID, setUseCaseID] = useState(null);
  const [fadeOutUseCases, isFadeOutUseCases] = useState(false);

  return (
    <div>
      <div
        className={`layout-flex ${
          fadeOutUseCases ? "fade-out-screen" : "fade-in-use-cases"
        } `}
      >
        <div className="sidebar-flex">
          <SideDrawer isFadeOutUseCases={isFadeOutUseCases} />
        </div>
        <div className="content-flex">
          <video muted autoPlay loop className="use-cases-video">
            <source src={ani_background} type="video/mp4" />
          </video>
          <div className="use-cases-wrapper">
            <UseCases setUseCaseID={setUseCaseID} useCaseID={useCaseID} />
            {useCaseID === 1 && (
              <RemoteAccess setUseCaseID={setUseCaseID} useCaseID={useCaseID} />
            )}
            {useCaseID === 2 && (
              <HybridEnterprise
                setUseCaseID={setUseCaseID}
                useCaseID={useCaseID}
              />
            )}
            {useCaseID === 3 && (
              <HybridCloud setUseCaseID={setUseCaseID} useCaseID={useCaseID} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCasesWrapper;
