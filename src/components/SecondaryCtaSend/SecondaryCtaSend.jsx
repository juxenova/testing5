/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SecondaryCtaSend = ({ className, overlapGroupClassName, href }) => {
  return (
    <div className={`secondary-CTA-send ${className}`}>
      <div className={`overlap-group-4 ${overlapGroupClassName}`}>
        <div className="hover-4" />
        <div className="get-started-2">Send</div>
        <a className="live-link-4" href={href} rel="noopener noreferrer" target="_blank">
          Send
        </a>
      </div>
    </div>
  );
};

SecondaryCtaSend.propTypes = {
  href: PropTypes.string,
};
