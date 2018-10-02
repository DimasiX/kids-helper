import React, { Component } from "react";
import PlusButton from "../../single/PlusButton/PlusButton";
import Form from "./Form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { OpenAddWishForm } from "../../../../store/reducers/reducer.add_wish";
class AddWish extends Component {
  render() {
    const { OpenAddWishForm, isAddFormOpen} = this.props;
    return (
      <div className="add-wish">
        <PlusButton styles="thin" isLink={false} onClick={OpenAddWishForm} />
        {isAddFormOpen && <Form />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAddFormOpen: state.addWishes.isAddFormOpen
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ OpenAddWishForm }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddWish);
