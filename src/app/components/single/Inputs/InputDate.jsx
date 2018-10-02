import React, { Component } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";

class InputDate extends Component {
  render() {
    const {
      placeholder = "YYYY-MM-DD",
      value,
      showOverlay,
      color = "elegant_white",
      onChange
    } = this.props;
    return (
      <div className={color}>
        <DayPickerInput
          onDayChange={onChange}
          value={value}
          showOverlay={showOverlay}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

export default InputDate;
