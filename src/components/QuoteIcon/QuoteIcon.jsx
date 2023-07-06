/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const QuoteIcon = ({ className, quoteIcon = "/img/quote-icon-1.png" }) => {
  return <img className={`quote-icon ${className}`} alt="Quote icon" src={quoteIcon} />;
};

QuoteIcon.propTypes = {
  quoteIcon: PropTypes.string,
};
