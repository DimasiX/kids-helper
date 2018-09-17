import React, { Component } from "react";
import WishMenu from "./WishMenu";

class Wish extends Component {
  render() {
    const { wish } = this.props;
    return (
      <div className="wish">
        <div className="more-options" onClick />

        {wish.isEdit ? <WishMenu /> : null}

        <input
          type="text"
          placeholder={wish.name}
          value={wish.name}
          onChange
        />

        <input type="date" onChange />
        <button onClick>SAVE</button>
      </div>
    );
  }
}

export default Wish;
