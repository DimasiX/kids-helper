import React, { Component } from "react";
import { bindActionCreators } from "redux";
import {
  CloseMenu,
  EditWish,
  RemoveWish
} from "../../../../../store/reducers/reducer.wishes";
import connect from "react-redux/es/connect/connect";

class WishMenu extends Component {

  render() {
    const SAVE_TEXT = "Save";
    const EDIT_TEXT = "Edit";

    const {
      wishKey,
      isEditing,
      onSave,
      CloseMenu,
      EditWish,
      RemoveWish
    } = this.props;

    const saveBtn = () => {
      return (
        <div className="menu__btn menu__btn--save" onClick={onSave}>
          {SAVE_TEXT}
        </div>
      );
    };

    const editBtn = () => {
      return (
        <div
          className="menu__btn menu__btn--save"
          onClick={() => EditWish(wishKey)}
        >
          {EDIT_TEXT}
        </div>
      );
    };

    return (
      <div className="menu ">
        <div className="menu__close" onClick={() => CloseMenu(wishKey)} />
        {isEditing ? saveBtn() : editBtn()}
        {/*<div className="menu__" />*/}
        <div
          className="menu__btn menu__btn--delete"
          onClick={() => RemoveWish(wishKey)}
        >
          Remove
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      CloseMenu: wishID => CloseMenu(wishID),
      EditWish: wishID => EditWish(wishID),
      RemoveWish: wishID => RemoveWish(wishID)
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
