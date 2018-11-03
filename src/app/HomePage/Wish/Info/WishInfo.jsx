import React, { Component } from "react";
import { DATEFORMAT } from "../../../../constants/constants";

export const WISH_NAME = "WISH_NAME";
export const WISH_DATE = "WISH_DATE";

class WishInfo extends Component {
  returnElement = (elName, wishText, dateToAchieve) => {
    switch (elName) {
      case WISH_NAME:
        return (
          <div className="wish__info__text">
            <p className="">{wishText}</p>
          </div>
        );
      case WISH_DATE:
        return (
          <div className="wish__info__date">
            <p className="">Date: {dateToAchieve.format(DATEFORMAT)}</p>
          </div>
        );
      default:
        return null;
    }
  };

  render() {
    const { elName, wishText, dateToAchieve } = this.props;
    return this.returnElement(elName, wishText, dateToAchieve);
  }
}

export default WishInfo;
