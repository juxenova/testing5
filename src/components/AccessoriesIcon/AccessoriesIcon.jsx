/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const AccessoriesIcon = ({ className, accessoriesIcon = "/img/accessories-icon-1.png" }) => {
  return <img className={`accessories-icon ${className}`} alt="Accessories icon" src={accessoriesIcon} />;
};

AccessoriesIcon.propTypes = {
  accessoriesIcon: PropTypes.string,
};
