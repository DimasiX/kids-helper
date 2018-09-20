import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { WISH_DATE, WISH_NAME } from "./WishInfo";
import InputText from "../../../Inputs/InputText";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { DATEFORMAT } from "../../../../../services/api.values";
import moment from "moment";

class WishInfoEdit extends Component {
  state = {
    wishText: "",
    dateToAchieve: ""
  };

  componentWillMount() {
    const { wish } = this.props;
    this.setState({
      wishText: wish.wishText,
      dateToAchieve: wish.dateToAchieve
    });
  }

  onTextInputChange = e => {
    let v = e.target.value;
    this.setState({
      wishText: v
    });
  };

  onDateInputChange = date => {
    let newDate = moment(date);
    this.setState({
      dateToAchieve: newDate
    });
  };

  renderEditElement = elName => {
    let { wishText, dateToAchieve } = this.state;
    dateToAchieve = dateToAchieve.format(DATEFORMAT);

    switch (elName) {
      case WISH_NAME:
        return (
          <div className="wish__info__text wish__info__text--edit">
            <p>Your Wish:</p>
            <InputText onChange={this.onTextInputChange} value={wishText} />
          </div>
        );
      case WISH_DATE:
        return (
          <div className="wish__info__date wish__info__date--edit">
            <p>Date to achieve:</p>
            <DayPickerInput
              onDayChange={this.onDateInputChange}
              value={dateToAchieve}
              showOverlay={true}
              placeholder="Select Date"
            />
          </div>
        );
      default:
        return null;
    }
  };
  render() {
    const { elName, wish } = this.props;
    return this.renderEditElement(elName);
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WishInfoEdit);
