import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import WishList from "./WishList/WishList";
import AddWishButton from "./WishList/AddWishButton";
import HomeIntro from "./HomeIntro";

class Home extends Component {
  render = () => {
    return (
      <div className="home">
        <HomeIntro />

        <WishList />

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
