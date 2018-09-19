import React, { Component } from "react";
import { bindActionCreators } from "redux";
import {
  CloseMenu,
  EditWish
} from "../../../../../store/reducers/reducer.wishes";
import connect from "react-redux/es/connect/connect";

class WishMenu extends Component {
  render() {
    const { wishKey, CloseMenu, EditWish } = this.props;
    return (
      <div className="menu ">
        <div className="menu__close" onClick={() => CloseMenu(wishKey)} />
        <div
          className="menu__btn menu__btn--save"
          onClick={() => EditWish(wishKey)}
        >
          Edit
        </div>
        {/*<div className="menu__" />*/}
        <div className="menu__btn menu__btn--delete">Remove</div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      CloseMenu: wishID => CloseMenu(wishID),
      EditWish: wishID => EditWish(wishID)
    },
    dispatch
  );

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WishMenu);
