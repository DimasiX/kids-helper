import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {CloseMenuAndAnimate, EditWishAndAnimate, RemoveWish} from "../../../../../store/reducers/reducer.wishes";
import connect from "react-redux/es/connect/connect";

class WishMenu extends Component {
  render() {
    const SAVE_TEXT = "Save";
    const EDIT_TEXT = "Edit";

    const {
      wishID,
      isEditing,
      onSave,
      CloseMenuAndAnimate,
      EditWishAndAnimate,
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
          className="menu__btn menu__btn--edit"
          onClick={() => EditWishAndAnimate(wishID)}
        >
          {EDIT_TEXT}
        </div>
      );
    };

    return (
      <div className="menu">
        <div
          className="menu__close"
          onClick={() => CloseMenuAndAnimate(wishID)}
        />
        {isEditing ? saveBtn() : editBtn()}
        {/*<div className="menu__" />*/}
        <div
          className="menu__btn menu__btn--delete"
          onClick={() => RemoveWish(wishID)}
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
      CloseMenuAndAnimate,
      EditWishAndAnimate,
      RemoveWish
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(WishMenu);
