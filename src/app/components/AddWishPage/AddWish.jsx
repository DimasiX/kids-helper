import React, { Component } from "react";
import PlusButton from "../single/PlusButton/PlusButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { OpenAddForm } from "../../../store/reducers/reducer.add_wish";
import AddWishForm from "./AddWishForm";
class AddWish extends Component {
  render = () => {
    const { OpenAddForm, isAddFormOpen } = this.props;
    return (
      <div className="add">
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
  return bindActionCreators({ OpenAddForm }, dispatch);
};

const mapStateToProps = state => {
  return { isAddFormOpen: state.addWishes.isAddFormOpen };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddWish);
