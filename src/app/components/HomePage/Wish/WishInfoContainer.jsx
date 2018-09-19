import React, { Component, Fragment } from "react";
import WishInfo from "./WishInfo";
import WishInfoEdit from "./WishInfoEdit";

class WishInfoContainer extends Component {
  render() {
    const { elName, wish } = this.props;
    return (
      <Fragment>
        {wish.isEditing ? (
          <WishInfoEdit elName={elName} wish={wish} />
        ) : (
          <WishInfo elName={elName} wish={wish} />
        )}
      </Fragment>
    );
  }
}

export default WishInfoContainer;
