import React, { Component } from "react";
import WishMenu from "./WishMenu";
import WishEdit, { WISH_DATE, WISH_NAME } from "./WishEdit";
import SaveWishButton from "./SaveWishButton";

class Wish extends Component {
  render() {
    const { wish, onToggleEditMenu } = this.props;
    console.log(wish.isEdit);
    return (
      <div className="wish">
        <div
          className="more-options"
          onClick={() => {
            onToggleEditMenu(wish);
          }}
        />

        {wish.isEdit ? <WishMenu /> : null}

        <WishEdit element={WISH_NAME} wish={wish} />
        <WishEdit element={WISH_DATE} wish={wish} />
        <SaveWishButton wish={wish} />
      </div>
    );
  }
}

export default Wish;
