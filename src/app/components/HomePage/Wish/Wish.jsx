import React, {Component} from "react";
import WishMenu from "./Menu/WishMenu";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import MenuDots from "./Menu/MenuDots";
import {OpenWishMenu, SaveEditedWish} from "../../../../store/reducers/reducer.wishes";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import WishInfoContainer from "./Info/WishInfoContainer";
import SaveWishButton from "./SaveWishButton";
import {WISH_DATE, WISH_NAME} from "./Info/WishInfo";

class Wish extends Component {
  render() {
    const {
      isMenuOpen,
      wishID,
      isEditing,
      OpenWishMenu,
      dateToAchieve,
      wishText,
      onTextInputChange,
      onDateInputChange,
      onSaveWish
    } = this.props;

    return (
      <div className="wish">
        <div className="more-options">
          <MenuDots onWishMenuOpen={OpenWishMenu} wishID={wishID} />
          <ReactCSSTransitionGroup
            transitionName="menu"
            transitionEnterTimeout={250}
            transitionLeaveTimeout={300}
          >
            {isMenuOpen && (
              <WishMenu
                onSave={onSaveWish}
                wishID={wishID}
                isEditing={isEditing}
              />
            )}
          </ReactCSSTransitionGroup>
        </div>

        <form
          onSubmit={() => {
            console.log("SUBMIT");
          }}
          className={`wish__info ${isEditing ? "wish__info--edit" : ""}`}
        >
          <WishInfoContainer
            isEditing={isEditing}
            dateToAchieve={dateToAchieve}
            wishText={wishText}
            onTextChange={onTextInputChange}
            elName={WISH_NAME}
          />
          <WishInfoContainer
            isEditing={isEditing}
            dateToAchieve={dateToAchieve}
            wishText={wishText}
            onDateChange={onDateInputChange}
            elName={WISH_DATE}
          />
          <SaveWishButton
            type={"submit"}
            onClick={onSaveWish}
            isEditing={isEditing}
          />
        </form>

      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ SaveEditedWish, OpenWishMenu }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Wish);
