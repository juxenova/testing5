/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PetFoodIcon = ({ className, petFoodIcon = "/img/pet-food-icon-1.png" }) => {
  return <img className={`pet-food-icon ${className}`} alt="Pet food icon" src={petFoodIcon} />;
};

PetFoodIcon.propTypes = {
  petFoodIcon: PropTypes.string,
};
