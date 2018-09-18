import React, { Component } from "react";

export const WISH_NAME = "WISH_NAME";
export const WISH_DATE = "WISH_DATE";

class WishEdit extends Component {
  returnElement = wish => {
    let element = this.props.element;
    switch (element) {
      case WISH_NAME:
        return wish.isEdit ? (
          <input type="text" placeholder={wish.name} />
        ) : (
          <h1>{wish.name}</h1>
        );
      case WISH_DATE:
        return wish.isEdit ? (
          <input type="date" onChange />
        ) : (
          <h2>Date: {wish.date}</h2>
        );
    }
  };

  render() {
    const { isEdit, wish } = this.props;
    return this.returnElement(wish);
  }
}

export default WishEdit;
