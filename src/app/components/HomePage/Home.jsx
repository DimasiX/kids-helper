import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import WishList from "./WishList/WishList";
import HomeIntro from "./HomeIntro/HomeIntro";
import {CloseAllWishMenuAndAnimate} from "../../../store/reducers/reducer.wishes";
import {WHO_CANNOT_CLOSE_WISH_MENU} from "../../../constants/constants";
import AddWish from "./AddWish/AddWish";
import {animations} from "../../../services/api.animate";

class Home extends Component {
  checkAndClose = e => {
    const { CloseAllWishMenuAndAnimate } = this.props;
    const clickedClass = e.target.className;

    let clickedOutside = WHO_CANNOT_CLOSE_WISH_MENU.filter(
      classWhoCantClose => classWhoCantClose === clickedClass
    ).length;

    if (clickedOutside === 0) {
      CloseAllWishMenuAndAnimate();
    }
  };

  render = () => {
    return (
      <div
        className="home"
        onClick={this.checkAndClose}
        onScroll={CloseAllWishMenuAndAnimate}
      >
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
