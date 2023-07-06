/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PrimaryCtaGet = ({ className, overlapGroupClassName, href }) => {
  return (
    <div className={`primary-CTA-get ${className}`}>
      <div className={`overlap-group-2 ${overlapGroupClassName}`}>
        <div className="hover-2" />
        <div className="text-wrapper">Get Started</div>
        <a className="live-link-2" href={href} rel="noopener noreferrer" target="_blank">
          Get Started
        </a>
      </div>
    </div>
  );
};

PrimaryCtaGet.propTypes = {
  href: PropTypes.string,
};
