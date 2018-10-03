import React, { Component, Fragment } from "react";
import InputText from "../../single/Inputs/InputText";
import InputDate from "../../single/Inputs/InputDate";

class Form extends Component {
  render() {
    return (
      <div className="add-wish__form">
        <div className="add-wish__form__name">New Wish</div>
        <div className="text-input">
          <InputText label="What Wish You Have?" />
        </div>
        <div className="date-input">
          <InputDate showOverlay={true} label="Date To Achieve:" />
        </div>
        <div className="save-btn">SAVE</div>
      </div>
    );
  }
}

export default Form;
