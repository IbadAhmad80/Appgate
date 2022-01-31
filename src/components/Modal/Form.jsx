import React, { useState } from "react";

import "./styles.scss";

import { toast } from "react-toastify";

toast.configure();

export default function Form({ isCloseModal }) {
  const [values, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [remoteAccessChecked, isRemoteAccessChecked] = useState(false);
  const [enterpriseChecked, isEnterpriseChecked] = useState(false);
  const [cloudChecked, iscloudChecked] = useState(false);
  const [subsChecked, isSubsChecked] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    toast.success("🦄 Wow so easy!", {
      position: "bottom-center",
      theme: "coloured",
      autoClose: 5000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
    });
    isCloseModal();
  };

  return (
    <div>
      <input
        type="text"
        required
        value={values.firstName}
        onChange={(e) =>
          setFormValues({ ...values, firstName: e.target.value })
        }
        placeholder="Enter your first name"
        className="input"
      />

      <input
        type="text"
        required
        value={values.lastName}
        onChange={(e) => setFormValues({ ...values, lastName: e.target.value })}
        placeholder="Enter your last name"
        className="input"
      />

      <input
        type="email"
        required
        value={values.email}
        onChange={(e) => setFormValues({ ...values, email: e.target.value })}
        placeholder="Enter your business email address"
        className="input"
      />

      <div className="hr" />

      <p>Recieve addition content packs?</p>

      <div className="content-packs">
        <label>
          <input
            type="checkbox"
            checked={remoteAccessChecked}
            onChange={() => isRemoteAccessChecked(!remoteAccessChecked)}
          />
          <span>Remote Access</span>
        </label>

        <label>
          <input
            type="checkbox"
            checked={enterpriseChecked}
            onChange={() => isEnterpriseChecked(!enterpriseChecked)}
          />
          <span>Hybrid Enterprise</span>
        </label>

        <label>
          <input
            type="checkbox"
            checked={cloudChecked}
            onChange={() => iscloudChecked(!cloudChecked)}
          />
          <span>Hybrid Cloud</span>
        </label>
      </div>

      <div className="hr" />

      <div className="susbcription-text">
        <label>
          <input
            type="checkbox"
            checked={subsChecked}
            onChange={() => isSubsChecked(!subsChecked)}
          />
          <span>
            I’d like to sign up for the latest news, events and resources <br />
            from Appgate
          </span>
        </label>
      </div>

      <button className="submit-btn" onClick={(e) => onSubmit(e)}>
        Submit
      </button>
    </div>
  );
}
