import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import WishList from "./WishList/WishList";
import HomeIntro from "./HomeIntro/HomeIntro";
import { CloseAllWishMenuAndAnimate } from "../../store/reducers/reducer.wishes";
import { WHO_CANNOT_CLOSE_WISH_MENU } from "../../constants/constants";
import AddWish from "./AddWish/AddWish";

class Home extends Component {
  checkClickedClass = clickedClass => {
    return WHO_CANNOT_CLOSE_WISH_MENU.filter(
      classWhoCantClose => classWhoCantClose === clickedClass
    ).length;
  };

  checkAndCloseWishMenu = e => {
    const { CloseAllWishMenuAndAnimate } = this.props;

    const clickedClass = e.target.className;

    let isClickedAnyOutside = this.checkClickedClass(clickedClass);

    if (isClickedAnyOutside === 0) {
      CloseAllWishMenuAndAnimate();
    }
  };

  render = () => {
    return (
      <div className="home" onClick={this.checkAndCloseWishMenu}>
        <HomeIntro />

        <WishList />

        <AddWish />
      </div>
    );
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ CloseAllWishMenuAndAnimate }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Home);
