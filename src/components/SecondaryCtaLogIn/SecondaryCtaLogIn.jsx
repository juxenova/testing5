/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SecondaryCtaLogIn = ({ className, href, href1 }) => {
  return (
    <a className={`secondary-CTA-log-in ${className}`} href={href} rel="noopener noreferrer" target="_blank">
      <div className="div">
        <div className="hover" />
        <div className="get-started">Log in</div>
        <a className="live-link" href={href1} rel="noopener noreferrer" target="_blank">
          Log in
        </a>
      </div>
    </a>
  );
};

SecondaryCtaLogIn.propTypes = {
  href: PropTypes.string,
  href1: PropTypes.string,
};
