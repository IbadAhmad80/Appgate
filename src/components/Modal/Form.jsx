import React, { useState } from "react";

import "./styles.scss";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import checkbox from "../../assets/icons/media/checkbox-1.png";

toast.configure();

export default function InformationForm({ isCloseModal }) {
  const [values, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [remoteAccessChecked, isRemoteAccessChecked] = useState(false);
  const [enterpriseChecked, isEnterpriseChecked] = useState(false);
  const [cloudChecked, iscloudChecked] = useState(false);
  const [subsChecked, isSubsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      values.email.includes("gmail") ||
      values.email.includes("yahoo") ||
      values.email.includes("email")
    ) {
      toast.error("Please enter a email with business domain only", {
        position: "top-center",
        theme: "colored",
      });
    } else {
      fetch("https://ww3.appgate.com/l/863411/2022-01-28/5t1z89", {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams({
          ["first-name"]: values.firstName,
          ["last-name"]: values.lastName,
          ["email"]: values.email,
        }),
      }).then((res) => {
        console.log(res);
        toast.success(
          "Please see a booth attendent to reedom your Appgate Swag!",
          {
            position: "bottom-center",
            width: "500px",
            theme: "colored",
            autoClose: 5000,
            hideProgressBar: false,
            pauseOnHover: true,
            draggable: true,
          }
        );
        isCloseModal();
      });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={values.firstName}
        onChange={(e) =>
          setFormValues({ ...values, firstName: e.target.value })
        }
        placeholder="Enter your first name"
        required
      />
      <input
        type="text"
        value={values.lastName}
        onChange={(e) => setFormValues({ ...values, lastName: e.target.value })}
        placeholder="Enter your last name"
        required
      />
      <input
        type="email"
        value={values.email}
        onChange={(e) => setFormValues({ ...values, email: e.target.value })}
        placeholder="Enter your business email address"
        required
      />
      <div className="hr" />
      <p>Recieve addition content packs?</p>
      <div className="content-packs">
        <div>
          {" "}
          {remoteAccessChecked ? (
            <img
              src={checkbox}
              alt="checkbox img"
              className="checkbox-image"
              onClick={() => isRemoteAccessChecked(!remoteAccessChecked)}
            />
          ) : (
            <input
              type="checkbox"
              checked={remoteAccessChecked}
              onChange={() => isRemoteAccessChecked(!remoteAccessChecked)}
            />
          )}
          <span>Remote Access</span>
        </div>

        <div>
          {" "}
          {enterpriseChecked ? (
            <img
              src={checkbox}
              alt="checkbox img"
              className="checkbox-image"
              onClick={() => isEnterpriseChecked(!enterpriseChecked)}
            />
          ) : (
            <input
              type="checkbox"
              checked={enterpriseChecked}
              onChange={() => isEnterpriseChecked(!enterpriseChecked)}
            />
          )}
          <span>Hybrid Enterprise</span>
        </div>

        <div>
          {" "}
          {cloudChecked ? (
            <img
              src={checkbox}
              alt="checkbox img"
              className="checkbox-image"
              onClick={() => iscloudChecked(!cloudChecked)}
            />
          ) : (
            <input
              type="checkbox"
              checked={cloudChecked}
              onChange={() => iscloudChecked(!cloudChecked)}
            />
          )}
          <span>Hybrid Cloud</span>
        </div>
      </div>
      <div className="hr" />
      <div className="susbcription-text">
        {subsChecked ? (
          <img
            src={checkbox}
            alt="checkbox img"
            className="checkbox-image"
            onClick={() => isSubsChecked(!subsChecked)}
          />
        ) : (
          <input
            type="checkbox"
            checked={subsChecked}
            onChange={() => isSubsChecked(!subsChecked)}
          />
        )}

        <span>
          I’d like to sign up for the latest news, events and resources <br />
          from Appgate
        </span>
      </div>
      <div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </div>
    </form>
  );
}
