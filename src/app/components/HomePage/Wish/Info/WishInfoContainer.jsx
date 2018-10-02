import React, { Component, Fragment } from "react";
import WishInfo from "./WishInfo";
import WishInfoEdit from "./WishInfoEdit";

class WishInfoContainer extends Component {
  render() {
    const {
      elName,
      isEditing,
      onTextChange,
      onDateChange,
      dateToAchieve,
      wishText,
    } = this.props;
    return (
      <Fragment>
        {isEditing ? (
          <WishInfoEdit
            dateToAchieve={dateToAchieve}
            wishText={wishText}
            onTextChange={onTextChange}
            onDateChange={onDateChange}
            elName={elName}
          />
        ) : (
          <WishInfo elName={elName} wishText={wishText} dateToAchieve={dateToAchieve}/>
        )}
      </Fragment>
    );
  }
}

export default WishInfoContainer;
