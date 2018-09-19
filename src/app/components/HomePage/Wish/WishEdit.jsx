import React, { Component } from "react";

export const WISH_NAME = "WISH_NAME";
export const WISH_DATE = "WISH_DATE";

class WishEdit extends Component {
  returnElement = (elName, isEdit) => {
    switch (elName) {
      case WISH_NAME:
        return isEdit ? (
          <input type="text" placeholder />
        ) : (
          <h1>{}</h1>
        );
      case WISH_DATE:
        return isEdit ? (
          <input type="date" onChange />
        ) : (
          <h2>Date: {}</h2>
        );
      default:
        return null
    }
  };

  render() {
    const { elName, isEditing} = this.props;
    return this.returnElement(elName, isEditing);
  }
}

export default WishEdit;
