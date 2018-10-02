import React from "react";
import { Link } from "react-router-dom";

const PlusButton = props => {
  const { styles = "", endpoint, size = "s", isLink = true, onClick } = props;

  const renderPlus = isLink => {
    if (isLink) {
      return (
        <Link to={endpoint} className="plus plus--link">
          <span className={`${styles} ${size}`} />
          <span className={`${styles} ${size}`} />
        </Link>
      );
    } else {
      return (
        <div className="plus plus--regular" onClick={onClick}>
          <span className={`${styles} ${size}`} />
          <span className={`${styles} ${size}`} />
        </div>
      );
    }
  };

  return renderPlus(isLink);
};

export default PlusButton;
