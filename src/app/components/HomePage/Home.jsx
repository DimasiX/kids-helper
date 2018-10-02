import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import WishList from "./WishList/WishList";
import PlusButton from "../single/PlusButton/PlusButton";
import HomeIntro from "./HomeIntro/HomeIntro";
import Footer from "../single/Footer/Footer";
import {CloseAllWishMenuAndAnimate} from "../../../store/reducers/reducer.wishes";
import {WHO_CANNOT_CLOSE_WISH_MENU} from "../../../constants/constants";

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
      <div className="home" onClick={this.checkAndClose}>
        <HomeIntro />

        <WishList />

        <Footer className="black center">
          <PlusButton endpoint="add" styles="gold" />
        </Footer>
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
