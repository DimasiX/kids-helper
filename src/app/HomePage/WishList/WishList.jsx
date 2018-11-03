import React, { Component } from "react";
import connect from "react-redux/es/connect/connect";
import WishContainer from "../Wish/WishContainer";

class WishList extends Component {
  render() {
    const { wishes } = this.props;
    return (
      <div className="wishes" id="wishes">
        {Object.keys(wishes).map(wishID => {
          return (
            <WishContainer key={wishID} wish={wishes[wishID]} wishID={wishID} />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ wishes }) => {
  return { wishes };
};

export default connect(
  mapStateToProps,
  null
)(WishList);
