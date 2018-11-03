import React, { Component } from "react";
import { bindActionCreators } from "redux";
import {
  CloseMenuAndAnimate,
  EditWishAndAnimate,
  RemoveWish
} from "../../../../store/reducers/reducer.wishes";
import connect from "react-redux/es/connect/connect";
import { animations} from "../../../../services/api.animate";

class WishMenu extends Component {
  constructor() {
    super();
    this.menuRef = React.createRef();
  }

  componentDidMount() {
    animations.AnimateWishMenuOnOpen(this.menuRef.current);
  }

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
          onClick={() => EditWishAndAnimate(wishID, this.menuRef.current)}
        >
          {EDIT_TEXT}
        </div>
      );
    };

    return (
      <div className="wrapper-listener">
        <div className="menu" ref={this.menuRef}>
          <div
            className="menu__close"
            onClick={() => CloseMenuAndAnimate(wishID, this.menuRef.current)}
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
