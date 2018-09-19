import React, { Component } from "react";

class InputText extends Component {
  render() {
    const { value, required } = this.props;
    return <input className="input input__text input--rounded" required={required} value={value} type="text" />;
  }
}

export default InputText;
