import React, { useState } from "react";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import checkbox from "../../assets/icons/media/checkbox.png";

import "./styles.scss";

export default function DemoForm({ isFormSubmit }) {
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    companyName: "",
    businessName: "",
    comment: "",
    employeesDropdown: null,
    headquartersDropdown: "",
  });

  const [checked, isChecked] = useState(false);
  const EmployeesCount = ["one", "two", "three"];
  const headquartersCountry = ["America", "England", "Russia"];

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formValues);
    isFormSubmit(true);
  };

  const selectEmployeesCount = (e) => {
    setFormValues({ ...formValues, employeesDropdown: e?.label });
  };

  const selectHeadQuarters = (e) => {
    setFormValues({ ...formValues, headquartersDropdown: e?.label });
  };

  return (
    <form className="demo-form-wrapper" onSubmit={submitHandler}>
      <input
        placeholder="Enter your first name"
        type="text"
        required
        className="demo-input"
        value={formValues.firstname}
        onChange={(e) =>
          setFormValues({ ...formValues, firstname: e.target.value })
        }
      />
      <input
        placeholder="Enter your last name"
        type="text"
        required
        className="demo-input"
        value={formValues.lastname}
        onChange={(e) =>
          setFormValues({ ...formValues, lastname: e.target.value })
        }
      />
      <input
        placeholder="Enter your company name"
        type="text"
        required
        className="demo-input"
        value={formValues.companyName}
        onChange={(e) =>
          setFormValues({ ...formValues, companyName: e.target.value })
        }
      />
      <input
        placeholder="Enter your business name"
        type="text"
        required
        className="demo-input"
        value={formValues.businessName}
        onChange={(e) =>
          setFormValues({ ...formValues, businessName: e.target.value })
        }
      />
      <Dropdown
        className="dropdown"
        controlClassName="dropdown-control"
        options={EmployeesCount}
        onChange={selectEmployeesCount}
        placeholderClassName="dropdown-placeholder"
        placeholder="Number of Employees"
        menuClassName="dropdown-menu"
      />
      <Dropdown
        className="dropdown"
        controlClassName="dropdown-control"
        options={headquartersCountry}
        onChange={selectHeadQuarters}
        placeholderClassName="dropdown-placeholder"
        placeholder="Company headquarters country"
        menuClassName="dropdown-menu"
      />
      <textarea
        placeholder="Write your questions(s) and/or comments(s) here (Optional)"
        rows={4}
        value={formValues.comment}
        onChange={(e) =>
          setFormValues({ ...formValues, comment: e.target.value })
        }
        required
      ></textarea>

      <div className="subscription-box">
        {checked ? (
          <img
            src={checkbox}
            alt="checkbox img"
            className="checkbox-img"
            onClick={() => isChecked(!checked)}
          />
        ) : (
          <input
            type="checkbox"
            className="subscription-checkbox"
            checked={checked}
            onChange={() => isChecked(!checked)}
          />
        )}

        <p>
          I'd like to sign up for latest news, events and recources from Appgate
        </p>
      </div>

      <div className="button-wrapper">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
