import React, { Component, Fragment } from "react";
import { WISH_DATE, WISH_NAME } from "./WishInfo";
import InputText from "../../Inputs/InputText";

class WishInfoEdit extends Component {
  renderEditElement = elName => {
    switch (elName) {
      case WISH_NAME:
        return (
          <div className="wish__info__text">
            <p>Your Wish:</p>
            <InputText />
          </div>
        );
      case WISH_DATE:
        return (
          <div className="wish__info__date">
            <p>Date to achieve:</p>
            <input className="" type="text" name="date" />
          </div>
        );
    }
  };
  render() {
    const { elName } = this.props;
    return this.renderEditElement(elName);
  }
}

export default WishInfoEdit;
