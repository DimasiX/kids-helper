import React, { Component } from "react";

class SaveWishButton extends Component {
  render() {
    const { onClick, isEditing , type} = this.props;

    return isEditing ? <button type={type} className="wish__info__save" onClick={onClick}>SAVE</button> : null;
  }
}

export default SaveWishButton;
