import React, { Component, Fragment } from "react";
import WishInfo from "./WishInfo";
import WishInfoEdit from "./WishInfoEdit";

class WishInfoContainer extends Component {
  render() {
    const {
      elName,
      wish,
      onTextChange,
      onDateChange,
      dateToAchieve,
      wishText
    } = this.props;
    return (
      <Fragment>
        {wish.isEditing ? (
          <WishInfoEdit
            dateToAchieve={dateToAchieve}
            wishText={wishText}
            onTextChange={onTextChange}
            onDateChange={onDateChange}
            elName={elName}
          />
        ) : (
          <WishInfo elName={elName} wish={wish} />
        )}
      </Fragment>
    );
  }
}

export default WishInfoContainer;
