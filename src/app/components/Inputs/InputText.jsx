import React, { Component } from "react";

class InputText extends Component {
  render() {
    const { onChange, value, name, required = false } = this.props;
    return (
      <input
        className="input input__text input--rounded"
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
