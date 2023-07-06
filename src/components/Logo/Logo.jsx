/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Logo = ({ className, overlapGroupClassName, vector = "/img/vector-7.png" }) => {
  return (
    <div className={`logo ${className}`}>
      <div className="logo-illustration-wrapper">
        <div className="logo-illustration">
          <div className={`overlap-group ${overlapGroupClassName}`}>
            <img className="vector" alt="Vector" src={vector} />
            <div className="element">12kg</div>
          </div>
        </div>
      </div>
      <div className="PETWORLD">PETWORLD</div>
    </div>
  );
};

Logo.propTypes = {
  vector: PropTypes.string,
};
