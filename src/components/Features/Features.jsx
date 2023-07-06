/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { AccessoriesIcon } from "../AccessoriesIcon";
import { GroomingIcon } from "../GroomingIcon";
import { MedicalIcon } from "../MedicalIcon";
import { PetFoodIcon } from "../PetFoodIcon";
import "./style.css";

export const Features = ({ property1, className, accessoriesIconAccessoriesIcon = "/img/accessories-icon-1.png" }) => {
  return (
    <div className={`features ${property1} ${className}`}>
      <div className="frame-4">
        <div className="best_quality_pet">
          {property1 === "features-1-1280px" && (
            <>
              <p className="subtitle-3">Super delicious food. Available in a range of delicious flavors.</p>
              <div className="tile">Best quality pet food</div>
              <PetFoodIcon className="instance-node-2" />
            </>
          )}

          {property1 === "features-2-1280px" && (
            <div className="frame-5">
              <div className="div-5">
                <PetFoodIcon className="instance-node-3" petFoodIcon="/img/pet-food-icon-2.png" />
              </div>
              <div className="frame-6">
                <div className="title-4">Best quality pet food</div>
                <p className="subtitle-4">Super delicious food. Available in a range of delicious flavors.</p>
              </div>
            </div>
          )}
        </div>
        <div className="toys_accessories">
          {property1 === "features-1-1280px" && (
            <>
              <p className="subtitle-3">Soft toys, chew toys, and rope toys. Strong, interactive, and fun.</p>
              <div className="title-5">Toys &amp; Accessories</div>
              <AccessoriesIcon accessoriesIcon={accessoriesIconAccessoriesIcon} className="instance-node-2" />
            </>
          )}

          {property1 === "features-2-1280px" && (
            <div className="frame-5">
              <div className="div-5">
                <AccessoriesIcon accessoriesIcon="/img/group-2x.png" className="group" />
              </div>
              <div className="frame-6">
                <div className="title-4">Toys &amp; Accessories</div>
                <p className="subtitle-5">Soft toys, chew toys, and rope toys. Strong, interactive, and fun.</p>
              </div>
            </div>
          )}
        </div>
        <div className="pets_medical_care">
          {property1 === "features-1-1280px" && (
            <>
              <p className="subtitle-3">You can get a wide range of great treatments for your dog.</p>
              <div className="title-6">Pets medical care</div>
              <MedicalIcon className="instance-node-2" />
            </>
          )}

          {property1 === "features-2-1280px" && (
            <div className="frame-5">
              <div className="div-5">
                <MedicalIcon className="instance-node-3" medicalIcon="/img/group-1.png" />
              </div>
              <div className="frame-6">
                <div className="title-4">Pets medical care</div>
                <p className="subtitle-6">You can get a wide range of great treatments for your dog.</p>
              </div>
            </div>
          )}
        </div>
        <div className="full_service">
          {property1 === "features-1-1280px" && (
            <>
              <p className="subtitle-3">It&#39;s the right time to groom your dog with a variety of treatments.</p>
              <div className="title-7">Full service grooming</div>
              <GroomingIcon className="instance-node-2" groomingIcon="/img/grooming-icon-2.png" />
            </>
          )}

          {property1 === "features-2-1280px" && (
            <div className="frame-5">
              <div className="div-5">
                <GroomingIcon className="instance-node-3" groomingIcon="/img/group.png" />
              </div>
              <div className="frame-6">
                <div className="title-4">Full service grooming</div>
                <p className="subtitle-4">It&#39;s the right time to groom your dog with a variety of treatments.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Features.propTypes = {
  property1: PropTypes.oneOf(["features-1-1280px", "features-2-1280px"]),
  accessoriesIconAccessoriesIcon: PropTypes.string,
};
