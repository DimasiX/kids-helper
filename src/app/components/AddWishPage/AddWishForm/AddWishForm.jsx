import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {CloseAddForm} from "../../../../store/reducers/reducer.add_wish";
import InputText from "../../single/Inputs/InputText";
import InputDate from "../../single/Inputs/InputDate";

class AddWishForm extends Component {
  state = {
    inputText: "",
    inputDate: ""
  };

  componentDidMount() {
    // AnimateAddFormOpen();
  }

  onInputChange = e => {
    const value = e.target.value;
    this.setState({
      inputText: value
    });
  };

  render() {
    const { inputText, inputDate } = this.state;
    const { CloseAddForm } = this.props;
    return (
      <div className="add-wish-form__container">
        <div className="add-wish-form">
          <form action="">
            <div className="wish-text">
              <div className="wish-text__q">Your Wish:</div>
              <InputText
                color="elegant_black"
                name="wish-text"
                value={inputText}
                onChange={this.onInputChange}
              />
            </div>

            <div className="wish-date">
              <div className="wish-date__q">Date To Achieve:</div>
              <InputDate color="elegant_black" showOverlay={true} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ CloseAddForm }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(AddWishForm);
