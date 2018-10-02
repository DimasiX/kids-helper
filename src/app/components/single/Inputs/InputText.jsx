import React, { Component } from "react";

class InputText extends Component {
  render() {
    const { onChange, color, value, name, required = false } = this.props;
    return (
      <input
        className={`input input__text input--rounded input--${color}`}
        required={required}
        value={value}
        name={name}
        onChange={onChange}
        type="text"
      />
    );
  }
}

export default InputText;
