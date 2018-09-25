import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CloseAddForm } from "../../../store/reducers/reducer.add_wish";
class AddWishForm extends Component {
  render() {
    const { CloseAddForm } = this.props;
    return (
      <div className="add-wish-form__container">
        <div className="add-wish-form" onClick={CloseAddForm}>
          ADD WISH FORM
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ CloseAddForm }, dispatch);
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddWishForm);
