import React, { Children } from "react";

const Menu = ({ className, children }) => {
  return <ul className={`${className}`}>{children}</ul>;
};

export default Menu;
