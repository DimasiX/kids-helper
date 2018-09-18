import React from "react";
import { Link } from "react-router-dom";

const AddWishButton = () => {
  return (
    <div className="add-wish-butt">
      <Link to="add-wish">
        <span />
        <span />
      </Link>
    </div>
  );
};

export default AddWishButton;
