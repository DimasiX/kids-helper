import React, { Component } from "react";

export const WISH_NAME = "WISH_NAME";
export const WISH_DATE = "WISH_DATE";

class WishInfo extends Component {
  returnElement = (elName, wish) => {
    switch (elName) {
      case WISH_NAME:
        return (
          <div className="wish__info__text">
            <p className="">{wish.wishText}</p>
          </div>
        );
      case WISH_DATE:
        return (
          <div className="wish__info__date">
            <p className="">Date: {wish.dateToAchieve}</p>
          </div>
        );
      default:
        return null;
    }
  };

  render() {
    const { elName, wish } = this.props;
    return this.returnElement(elName, wish);
  }
}

export default WishInfo;
