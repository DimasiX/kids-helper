import React, {Component} from "react";

class MenuDots extends Component {
  render() {
    const { wishID, onWishMenuOpen } = this.props;
    console.log(wishID);
    return (
      <div className="open-dots">
        <div className="dots" onClick={() => onWishMenuOpen(wishID)}>
          <div className="dots__dot" />
          <div className="dots__dot" />
          <div className="dots__dot" />
        </div>
      </div>
    );
  }
}

export default MenuDots;
