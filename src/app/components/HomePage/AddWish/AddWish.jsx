import React, { Component } from "react";
import PlusButton from "../../single/PlusButton/PlusButton";
import AddWishForm from "./Form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  CloseAddWishFormAndAnimate,
  OpenAddWishForm
} from "../../../../store/reducers/reducer.add_wish";
import { animations } from "../../../../services/api.animate";
import moment from "moment";
import { AddNewWish } from "../../../../store/reducers/reducer.wishes";

class AddWish extends Component {
  state = {
    wishText: "",
    dateToAchieve: moment()
  };

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
  onInputChange = e => {
    const value = e.target.value;
    this.setState({
      wishText: value
    });
  };
  onDateChange = date => {
    console.log("DATE:", date);
    this.setState({
      dateToAchieve: moment(date)
    });
  };
  onSave = e => {
    e.preventDefault();
    const { AddNewWish, CloseAddWishForm } = this.props;
    const { wishText, dateToAchieve } = this.state;
    if (wishText !== "" && dateToAchieve !== "") {
      this.setState({
        wishText: "",
        dateToAchieve: moment()
      });
      AddNewWish({ wishText, dateToAchieve });
      CloseAddWishForm();
      animations.AnimateAddFormOnClose();
    }
  };
  render() {
    const { wishText, dateToAchieve } = this.state;
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
          <AddWishForm
            wishText={wishText}
            dateToAchieve={dateToAchieve}
            onSave={this.onSave}
            onInputChange={this.onInputChange}
            onDateChange={this.onDateChange}
          />
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
    {
      AddNewWish,
      OpenAddWishForm,
      CloseAddWishForm: CloseAddWishFormAndAnimate
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddWish);
