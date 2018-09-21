import React, { Component } from "react";

class AddWish extends Component {
  state = {
    popUp: false
  };
  render = () => {
    return (
      <div className="add">
        <div className="add__intro">Add Wish</div>
        <div className="add__info">
          <div className="info__text">{/**/}</div>
          <div className="info__date">{/**/}</div>
        </div>

        <div className="add__btn">ADD</div>
      </div>
    );
  };
}

export default AddWish;
