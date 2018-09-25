import React, { Component } from "react";

class SaveWishButton extends Component {
  render() {
    const { onClick, wish, type} = this.props;

    return wish.isEditing ? <button type={type} className="wish__info__save" onClick={onClick}>SAVE</button> : null;
  }
}

export default SaveWishButton;
