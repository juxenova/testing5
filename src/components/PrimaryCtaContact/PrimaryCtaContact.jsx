/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PrimaryCtaContact = ({ className, href, href1 }) => {
  return (
    <a className={`primary-CTA-contact ${className}`} href={href} rel="noopener noreferrer" target="_blank">
      <div className="overlap-group-3">
        <div className="hover-3" />
        <div className="contact-us">Contact us</div>
        <a className="live-link-3" href={href1} rel="noopener noreferrer" target="_blank">
          Contact us
        </a>
      </div>
    </a>
  );
};

PrimaryCtaContact.propTypes = {
  href: PropTypes.string,
  href1: PropTypes.string,
};
