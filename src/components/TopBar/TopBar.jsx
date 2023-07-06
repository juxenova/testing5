/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Logo } from "../Logo";
import { SecondaryCtaLogIn } from "../SecondaryCtaLogIn";
import "./style.css";

export const TopBar = ({ className, href, href1, href2 }) => {
  return (
    <div className={`top-bar ${className}`}>
      <Logo
        className="logo-instance"
        overlapGroupClassName="design-component-instance-node"
        vector="/img/vector-5.png"
      />
      <div className="frame">
        <a className="sign-up" href={href} rel="noopener noreferrer" target="_blank">
          Sign Up
        </a>
        <SecondaryCtaLogIn className="secondary-CTA-log-in-instance" href={href2} href1={href1} />
      </div>
    </div>
  );
};

TopBar.propTypes = {
  href: PropTypes.string,
  href1: PropTypes.string,
  href2: PropTypes.string,
};
