import React from "react";
import { Link } from "react-router-dom";

const PlusButton = props => {
  const { styles, endpoint } = props;
  return (
    <Link to={endpoint} className="plus plus--link">
      <span className={styles}/>
      <span className={styles}/>
    </Link>
  );
};

export default PlusButton;
