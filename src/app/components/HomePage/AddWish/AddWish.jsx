import React, { Component, Fragment } from "react";
import PlusButton from "../../single/PlusButton/PlusButton";
import AddWishForm from "./Form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  CloseAddWishFormAndAnimate,
  OpenAddWishForm
} from "../../../../store/reducers/reducer.add_wish";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { animations } from "../../../../services/api.animate";
class AddWish extends Component {
  toggleAddWishForm = () => {
    const { isAddFormOpen, OpenAddWishForm, CloseAddWishForm } = this.props;
    if (isAddFormOpen) {
      CloseAddWishForm();
      animations.AnimateAddFormOnClose();
    } else {
      OpenAddWishForm();
      animations.AnimateAddFormOnOpen();
    }
  };
  render() {
    const { isAddFormOpen } = this.props;
    return (
      <div className="add-wish">
        <PlusButton
          styles="thin"
          isLink={false}
          onClick={this.toggleAddWishForm}
        />

        <form action="">
          {isAddFormOpen && (
            <div className="close-on-click" onClick={this.toggleAddWishForm} />
          )}
          <AddWishForm />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAddFormOpen: state.addWishes.isAddFormOpen
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { OpenAddWishForm, CloseAddWishForm: CloseAddWishFormAndAnimate },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddWish);
