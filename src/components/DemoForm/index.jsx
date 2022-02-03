import React from "react";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import "./styles.scss";

export default function DemoForm() {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];

  const onSelect = () => {};

  return (
    <form className="demo-form-wrapper">
      <input
        placeholder="Enter your first name"
        type="text"
        required
        className="demo-input"
      />
      <input
        placeholder="Enter your last name"
        type="text"
        required
        className="demo-input"
      />
      <input
        placeholder="Enter your company name"
        type="text"
        required
        className="demo-input"
      />
      <input
        placeholder="Enter your business name"
        type="text"
        required
        className="demo-input"
      />
      <Dropdown
        className="dropdown"
        controlClassName="dropdown-control"
        options={options}
        onChange={onSelect}
        placeholderClassName="dropdown-placeholder"
        placeholder="Number of Employees"
      />
      <Dropdown
        className="dropdown"
        controlClassName="dropdown-control"
        options={options}
        onChange={onSelect}
        placeholderClassName="dropdown-placeholder"
        placeholder="Company headquarters ountry"
      />
      <textarea
        placeholder="Write your questions(s) and/or comments(s) here (Optional)"
        rows={5}
      ></textarea>
    </form>
  );
}
