import React, { Component } from "react";
import WishMenu from "./WishMenu";
import WishInfo, { WISH_DATE, WISH_NAME } from "./WishInfo";
import SaveWishButton from "./SaveWishButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import WishInfoContainer from "./WishInfoContainer";
class Wish extends Component {
  render() {
    const { wish } = this.props;
    return (
      <div className="wish">
        <div className="more-options" />

        {wish.isMenuOpen ? <WishMenu /> : null}

        <div className="wish__info">
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
