import React, { Component } from "react";

class InputText extends Component {
  render() {
    const {
      onChange,
      color,
      value,
      name,
      label,
      id,
      required = false
    } = this.props;
    return (
      <div className="input-text">
        <label className="input-text__label" htmlFor={id}>{label}</label>
        <input
          className={`input input__text input--rounded input--${color}`}
          required={required}
          value={value}
          name={name}
          onChange={onChange}
          type="text"
        />
      </div>
    );
  }
}

export default InputText;
