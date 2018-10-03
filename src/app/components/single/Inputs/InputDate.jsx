import React, { Component } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";

class InputDate extends Component {
  render() {
    const {
      label,
      value,
      name = "dayinput",
      showOverlay,
      color = "elegant_white",
      onChange,
      id = "day",
      required = true
    } = this.props;
    return (
      <div className={`daypicker ${color}`}>
        {label && (
          <label className="daypicker__label" htmlFor={id}>
            {label}
          </label>
        )}
        <DayPickerInput
          keepFocus={false}
          inputProps={{ value, id, name, required, readOnly: true }}
          onDayChange={onChange}
          value={value}
          showOverlay={showOverlay}
          placeholder={""}
        />
      </div>
    );
  }
}

export default InputDate;
