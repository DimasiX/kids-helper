import React, {Component} from "react";
import {WISH_DATE, WISH_NAME} from "./WishInfo";
import InputText from "../../../Independent Components/Inputs/InputText";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import {DATEFORMAT} from "../../../../../services/api.values";

class WishInfoEdit extends Component {
  renderEditElement = elName => {
    let { wishText, dateToAchieve, onTextChange, onDateChange } = this.props;
    dateToAchieve = dateToAchieve.format(DATEFORMAT);

    switch (elName) {
      case WISH_NAME:
        return (
          <div className="wish__info__text wish__info__text--edit">
            <p>Your Wish:</p>
            <InputText onChange={onTextChange} value={wishText} />
          </div>
        );
      case WISH_DATE:
        return (
          <div className="wish__info__date wish__info__date--edit">
            <p>Date to achieve:</p>
            <DayPickerInput
              onDayChange={onDateChange}
              value={dateToAchieve}
              showOverlay={false}
              placeholder="Select Date"
            />
          </div>
        );
      default:
        return null;
    }
  };
  render() {
    const { elName } = this.props;
    return this.renderEditElement(elName);
  }
}

export default WishInfoEdit;
