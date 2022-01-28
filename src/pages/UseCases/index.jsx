import React, { useState } from "react";

import "./styles.scss";

import ani_background from "../../assets/ani_background.mp4";

import UseCases from "../../components/SingleUseCase/index";
import SideDrawer from "../../components/Sidebar/index";
import SecureRemoteAccess from "../../components/UseCasesDetails/RemoteAccess";
import HybridEnterprise from "../../components/UseCasesDetails/HybridEnterprise";
import HybridCloud from "../../components/UseCasesDetails/HybridCloud";

const UseCasesWrapper = () => {
  const [useCaseID, setUseCaseID] = useState(null);

  return (
    <div>
      <video muted autoPlay loop className="use-cases-video">
        <source src={ani_background} type="video/mp4" />
      </video>
      <SideDrawer />
      <div className="use-cases-wrapper">
        <UseCases setUseCaseID={setUseCaseID} useCaseID={useCaseID} />
        {useCaseID === 1 && (
          <SecureRemoteAccess
            setUseCaseID={setUseCaseID}
            useCaseID={useCaseID}
          />
        )}
        {useCaseID === 2 && (
          <HybridEnterprise setUseCaseID={setUseCaseID} useCaseID={useCaseID} />
        )}
        {useCaseID === 3 && (
          <HybridCloud setUseCaseID={setUseCaseID} useCaseID={useCaseID} />
        )}
      </div>
    </div>
  );
};

export default UseCasesWrapper;
