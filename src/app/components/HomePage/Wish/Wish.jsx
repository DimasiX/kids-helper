import React, { Component } from "react";
import WishMenu from "./Menu/WishMenu";
import { WISH_DATE, WISH_NAME } from "./Info/WishInfo";
import SaveWishButton from "./SaveWishButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import WishInfoContainer from "./Info/WishInfoContainer";
import MenuDots from "./Menu/MenuDots";
import moment from "moment";

class Wish extends Component {
  constructor() {
    super();
    this.state = {
      wishText: "",
      dateToAchieve: ""
    };
  }

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

  render() {
    const { wishText, dateToAchieve } = this.state;

    const { wish, wishKey } = this.props;
    return (
      <div className="wish">
        <div className="more-options">
          <MenuDots wishKey={wishKey} />
          {wish.isMenuOpen ? (
            <WishMenu wishKey={wishKey} isEditing={wish.isEditing} />
          ) : null}
        </div>

        <div
          className={`wish__info ${wish.isEditing ? "wish__info--edit" : ""}`}
        >
          <WishInfoContainer
            dateToAchieve={dateToAchieve}
            wishText={wishText}
            onTextChange={this.onTextInputChange}
            elName={WISH_NAME}
            wish={wish}
          />
          <WishInfoContainer
            dateToAchieve={dateToAchieve}
            wishText={wishText}
            onDateChange={this.onDateInputChange}
            elName={WISH_DATE}
            wish={wish}
          />
        </div>

        <SaveWishButton wish={wish} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    wishList: state.wishList
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wish);
