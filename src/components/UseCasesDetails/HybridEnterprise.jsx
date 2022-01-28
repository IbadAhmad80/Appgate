import React from "react";
import "./details.scss";
import "./info.scss";

import topBorder from "../../assets/icons/media/Vector2.png";
import bottomBorder from "../../assets/icons/media/Vector3.png";
import document from "../../assets/icons/media/document.png";
import vector1 from "../../assets/icons/media/Vector1.png";
import leftChevron from "../../assets/icons/media/left-chevron.png";

const HybridEnterprise = ({ setUseCaseID }) => {
  return (
    <>
      <div className="details-section-wrapper">
        <div className="details-container">
          <img src={vector1} className="border_image" alt="left border img" />
          <div className="detailsTextContainer">
            <h3 className="case-type">Hybrid Enterprise</h3>
            <p className="primary-text-1">
              Remote workforces are often isolated from the assets they need to
              work. Today, around{" "}
              <strong>
                82% of organizations have some form of a hybrid workforce, while
                78% have a hybrid cloud strategy.
              </strong>
            </p>
            <p className="primary-text-2">
              When you combine scattered workers and workloads, you get an
              overly complex, large, and potentially vulnerable attack surface.
              Disparate access controls can create a tangle of policies and
              over-privileged users—factors that can exacerbate existing
              vulnerabilities.
              <br /> Legacy systems and old remote access solutions, like
              Internet-exposed VPNs, are complicated to administer; don’t
              adequately verify people; and increase your organization's
              scannable attack surface—potentially leading to wide-open
              networks.
            </p>
            <h6>Secure hybrid everything with Appgate SDP</h6>
            <p className="primary-text-2">
              Customers rated Appgate SDP 8.8 on a scale of 10 as technology
              most strategic to hybrid workplaces. It provides consistent,
              least-privileged access to resources, regardless of
              location—including on-premise, cloud and hybrid. Legacy security
              tech can’t.
            </p>
            <p className="hr-1" />
            <p className="secondary-text-1">
              Is a unified policy engine for all users and devices accessing
              multi-cloud, hybrid cloud, microservices, on-premises and legacy
              resources.
            </p>
            <p className="hr-2" />
            <p className="secondary-text-2">
              Applies Zero Trust access for users and services
            </p>
            <p className="hr-3" />
            <p className="secondary-text-3">
              Cloaks open ports to stop attackers from moving laterally.
            </p>
            <p className="hr-4" />
            <p className="secondary-text-4">
              Continuously authenticates users based on contextual risk and
              device posture
            </p>
            <p className="hr-5" />
            <p className="secondary-text-5">
              Enables detailed segmentation policies across your entire IT
              footprint
            </p>
            <p className="hr-6" />
            <p className="secondary-text-6">
              Delivers fast, secure and concurrent connections from any user to
              multiple resources simultaneously
            </p>
            <p className="hr-7" />
            <p className="secondary-text-7">
              Scales as needed, without bandwidth constraints
            </p>
            <p className="hr-8" />
            <p className="secondary-text-8">
              Integrates with existing security tools via programmable APIs
            </p>
          </div>
        </div>
        <MoreInformation />
      </div>
      <div className="back-cta" onClick={() => setUseCaseID(null)}>
        <img
          src={leftChevron}
          alt="left chevron img"
          className="left-chevron-image"
        />
        <p>USE CASES</p>
      </div>
    </>
  );
};

export default HybridEnterprise;

const MoreInformation = () => {
  return (
    <div className="info-wrapper">
      <img src={topBorder} alt="top border img" className="top-border" />
      <div className="text-container">
        <h4>Want More Info</h4>
        <p>
          We will send more detailed <br /> info about Appgate SDP , <br />
          including :
        </p>

        <div className="bullet-1">
          <img src={document} alt="document img" />
          <p>Hybrid Enterprise eBook </p>
        </div>
        <div className="bullet-2">
          <img src={document} alt="document img" />
          <a
            href="https://www.google.com/url?q=https://d3aafpijpsak2t.cloudfront.net/docs/Infographics/451_Research_ZTNA_Hybrid-Infographic.pdf?mtime%3D20210726085555%26focal%3Dnone%26utm_source%3Dwebsite%26utm_campaign%3D451ztnainfographic&sa=D&source=docs&ust=1643372123682611&usg=AOvVaw0liAOndcUVxPPNjcG2P0MI"
            target="_blank"
            rel="noreferrer"
          >
            451 Research Infographic{" "}
          </a>
        </div>
        <div className="bullet-3">
          <img src={document} alt="document img" />
          <p>Forrester 2021 Zero Trust Network Access New Wave</p>
        </div>

        <div className="bullet-4">
          <img src={document} alt="document img" />
          <p> Nemertes Real Economic Value Report</p>
        </div>
      </div>

      <button className="email-button">Get it Emailed To You</button>
      <img src={bottomBorder} alt="bottom border" className="bottom-border" />
    </div>
  );
};
