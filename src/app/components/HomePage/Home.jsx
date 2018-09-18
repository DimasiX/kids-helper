import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import WishList from "./WishList/WishList";
import AddWishButton from "./WishList/AddWishButton";

class Home extends Component {
  static propTypes = {};

  render = () => {
    const { wishes, onToggleEditMenu } = this.props;

    return (
      <div className="home">
        <div className="intro">
          <h1>I WISH!</h1>
          <i className="arrow down" />
        </div>
        <WishList wishes={wishes} onToggleEditMenu={onToggleEditMenu} />
        <AddWishButton />
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
