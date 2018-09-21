import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import WishList from "./WishList/WishList";
import PlusButton from "../Independent Components/PlusButton/PlusButton";
import HomeIntro from "./HomeIntro/HomeIntro";
import Footer from "../Independent Components/Footer/Footer";

class Home extends Component {
  render = () => {
    return (
      <div className="home">
        <HomeIntro />

        <WishList />

        <Footer className="black center">
          <PlusButton endpoint="add" styles="gold" />
        </Footer>
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
