import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { SaveEditedWish, OpenWishMenu } from "../../../../store/reducers/reducer.wishes";
import Wish from "./Wish";
import moment from "moment";

class WishContainer extends Component {
  componentWillMount() {
    this.setWishStateForNextEditing();
  }

  setWishStateForNextEditing = () => {
    const { wish } = this.props;
    const { wishText, dateToAchieve } = wish;
    this.setState({
      wishText,
      dateToAchieve
    });
  };

  onTextInputChange = e => {
    const value = e.target.value;
    this.setState({
      wishText: value
    });
  };

  onDateInputChange = date => {
    let newDate = moment(date);
    this.setState({
      dateToAchieve: newDate
    });
  };

  onSaveWish = e => {
    e.preventDefault();

    const { SaveEditedWish, wishID } = this.props;

    let wishData = { ...this.state };
    SaveEditedWish(wishID, wishData);
  };

  render() {
    const { wishID, wish, OpenWishMenu } = this.props;
    const { isMenuOpen, isEditing } = wish;
    const { wishText, dateToAchieve } = this.state;
    return (
      <Wish
        wishID={wishID}
        isMenuOpen={isMenuOpen}
        isEditing={isEditing}
        wishText={wishText}
        dateToAchieve={dateToAchieve}
        onTextInputChange={this.onTextInputChange}
        onDateInputChange={this.onDateInputChange}
        onSaveWish={this.onSaveWish}
        onOpenWishMenu={OpenWishMenu}
      />
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ SaveEditedWish, OpenWishMenu }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(WishContainer);
