import React, { Component } from "react";

class WishMenu extends Component {
  render() {
    return (
      <div className="menu ">
        <div className="close" onClick />
        <div className="menu-choice change-descr" onClick>
          Save Description
        </div>
        <div className="divide" />
        <div className="menu-choice delete" onClick>
          Remove
        </div>
      </div>
    );
  }
}

export default WishMenu;
