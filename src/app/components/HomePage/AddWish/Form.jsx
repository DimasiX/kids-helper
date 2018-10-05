import React, { Component } from "react";
import InputText from "../../single/Inputs/InputText";
import InputDate from "../../single/Inputs/InputDate";
import { DATEFORMAT } from "../../../../constants/constants";

class Form extends Component {
  render() {
    const {
      onInputChange,
      onDateChange,
      onSave,
      wishText,
      dateToAchieve
    } = this.props;
    return (
      <div className="add-wish__form">
        <div className="add-wish__form__name">New Wish</div>
        <div className="text-input">
          <InputText
            onChange={onInputChange}
            value={wishText}
            name="wishText"
            label="What Wish You Have?"
          />
        </div>
        <div className="date-input">
          <InputDate
            value={dateToAchieve.format(DATEFORMAT)}
            onChange={onDateChange}
            name="date"
            showOverlay={true}
            label="Date To Achieve:"
          />
        </div>
        <button className="save-btn" onClick={onSave}>
          SAVE
        </button>
      </div>
    );
  }
}

export default Form;
