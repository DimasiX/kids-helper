import React, {Component} from "react";
import Wish from "./Wish";

class WishList extends Component {
  render() {
    const { wishes, onToggleEditMenu } = this.props;
    return (
      <div className="wishes" id="wishes">
        {wishes.map((wish, index) => {
          return <Wish wish={wish} onToggleEditMenu={onToggleEditMenu} key={index}/>;
        })}
      </div>
    );
  }
}

export default WishList;
