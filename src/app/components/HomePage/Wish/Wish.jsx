import React, { Component } from "react";
import WishMenu from "./Menu/WishMenu";
import { WISH_DATE, WISH_NAME } from "./Info/WishInfo";
import SaveWishButton from "./SaveWishButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import WishInfoContainer from "./Info/WishInfoContainer";
import MenuDots from "./Menu/MenuDots";

class Wish extends Component {
  render() {
    const { wish, wishKey } = this.props;
    return (
      <div className="wish">
        <div className="more-options">
          <MenuDots wishKey={wishKey} />
          {wish.isMenuOpen ? (
            <WishMenu wishKey={wishKey} isEditing={wish.isEditing} />
          ) : null}
        </div>

        <div
          className={`wish__info ${wish.isEditing ? "wish__info--edit" : ""}`}
        >
          <WishInfoContainer elName={WISH_NAME} wish={wish} />
          <WishInfoContainer elName={WISH_DATE} wish={wish} />
        </div>

        <SaveWishButton wish={wish} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    wishList: state.wishList
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wish);
