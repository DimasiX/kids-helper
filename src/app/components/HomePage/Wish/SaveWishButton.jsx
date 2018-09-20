import React, { Component } from "react";

class SaveWishButton extends Component {
  render() {
    const { onClick, wish } = this.props;

    return wish.isEditing ? <button onClick={onClick}>SAVE</button> : null;
  }
}

export default SaveWishButton;
