import React, { useState } from "react";

import "./styles.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

toast.configure();

export default function Form({ isCloseModal }) {
  const [values, setFormValues] = useState({
    firstName: null,
    lastName: null,
    email: null,
  });

  const [remoteAccessChecked, isRemoteAccessChecked] = useState(false);
  const [enterpriseChecked, isEnterpriseChecked] = useState(false);
  const [cloudChecked, iscloudChecked] = useState(false);
  const [subsChecked, isSubsChecked] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    toast.success("Please see a booth attendent to reedom your Appgate Swag!", {
      position: "bottom-center",
      width: "500px",
      theme: "colored",
      autoClose: 5000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
    });

    const el = document.getElementsByClassName("form");
    const form = JSON.stringify(el[0]);

    axios
      .post("https://ww3.appgate.com/l/863411/2022-01-28/5t1z89", { form })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    isCloseModal();
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <label for="firstname">First Name</label>

        <input
          type="text"
          value={values.firstName}
          name="firstname"
          onChange={(e) =>
            setFormValues({ ...values, firstName: e.target.value })
          }
          placeholder="Enter your first name"
          required
        />

        <label for="lastname">Last Name</label>
        <input
          type="text"
          name="lastname"
          value={values.lastName}
          onChange={(e) =>
            setFormValues({ ...values, lastName: e.target.value })
          }
          placeholder="Enter your last name"
          required
        />

        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={(e) => setFormValues({ ...values, email: e.target.value })}
          placeholder="Enter your business email address"
          required
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
              I’d like to sign up for the latest news, events and resources{" "}
              <br />
              from Appgate
            </span>
          </label>
        </div>

        <button
          className="submit-btn"
          onClick={(e) => onSubmit(e)}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
