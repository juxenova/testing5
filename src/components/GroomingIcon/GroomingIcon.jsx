/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const GroomingIcon = ({ className, groomingIcon = "/img/grooming-icon-1.png" }) => {
  return <img className={`grooming-icon ${className}`} alt="Grooming icon" src={groomingIcon} />;
};

GroomingIcon.propTypes = {
  groomingIcon: PropTypes.string,
};
