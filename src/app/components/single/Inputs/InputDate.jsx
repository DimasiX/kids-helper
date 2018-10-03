import React, { Component } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";

class InputDate extends Component {
  render() {
    const {
      placeholder = "YYYY-MM-DD",
      value,
      name = "dayinput",
      showOverlay,
      color = "elegant_white",
      onChange,
      id = "day"
    } = this.props;
    return (
      <div className={`daypicker ${color}`}>
        <label className="daypicker__label" htmlFor={id}>
          {placeholder}
        </label>
        <DayPickerInput
          inputProps={{ value, id, name }}
          onDayChange={onChange}
          value={value}
          showOverlay={showOverlay}
          placeholder={"YYYY-MM-DD"}
        />
      </div>
    );
  }
}

export default InputDate;
