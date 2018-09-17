import React, { Component, Fragment } from "react";
import Wish from "./Wish";

class WishList extends Component {
  render() {
    const { wishes } = this.props;
    return (
      <div className="wishes" id="wishes">
        {wishes.map(wish => {
          return <Wish wish={wish}/>;
        })}
      </div>
    );
  }
}

export default WishList;
