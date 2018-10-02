import React, { Component } from "react";
import PlusButton from "../single/PlusButton/PlusButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  OpenAddForm,
  CloseAddForm
} from "../../../store/reducers/reducer.add_wish";
import AddWishForm from "./AddWishForm/AddWishForm";
import { WHO_CANT_CLOSE_ADD_FORM } from "../../../constants/constants";

class AddWish extends Component {
  checkAndClose = e => {
    const { CloseAddForm } = this.props;
    const clickedClass = e.target.className;

    console.log(clickedClass);

    let clickedOutside = WHO_CANT_CLOSE_ADD_FORM.filter(
      classWhoCantClose => classWhoCantClose === clickedClass
    ).length;

    if (clickedOutside === 0) {
      CloseAddForm();
    } else {
      console.log("DON'T CLOSE");
    }
  };
  render = () => {
    const { OpenAddForm } = this.props;
    return (
      <div className="add" onClick={this.checkAndClose}>
        <div className="add__intro">Add Wish</div>

        <AddWishForm />

        <div className="add__plus">
          <PlusButton size={"m"} isLink={false} onClick={OpenAddForm} />
        </div>
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ OpenAddForm, CloseAddForm }, dispatch);
};

const mapStateToProps = state => {
  return { isAddFormOpen: state.addWishes.isAddFormOpen };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddWish);
