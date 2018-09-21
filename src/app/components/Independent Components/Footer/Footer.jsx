import React from "react";

const Footer = (props) => {
  const { className } = props;
  return <footer className={`footer ${className}`}>{props.children}</footer>;
};

export default Footer;
