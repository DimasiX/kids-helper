import React from "react";
import { Link } from "react-router-dom";

const PlusButton = props => {
  const { styles } = props;
  return (
    <Link to="add" className="plus plus--link">
      <span className={styles}/>
      <span className={styles}/>
    </Link>
  );
};

export default PlusButton;
