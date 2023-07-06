/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { PrimaryCtaContact } from "../PrimaryCtaContact";
import "./style.css";

export const Cta = ({ property1, className, href, href1 }) => {
  return (
    <div className={`CTA ${property1} ${className}`}>
      <div className="frame-11">
        <div className="frame-12">
          {property1 === "CTA-3-1280px" && (
            <>
              <div className="title-8">Let’s talk, woof!</div>
              <p className="subtitle-7">You can ask us questions about your pet, and we will be happy to answer you!</p>
            </>
          )}

          {["CTA-1-1280px", "CTA-2-1280px"].includes(property1) && (
            <>
              <div className="frame-13">
                <div className="title-9">Let’s talk, woof!</div>
                <p className="subtitle-8">
                  You can ask us questions about your pet, and we will be happy to answer you!
                </p>
              </div>
              <PrimaryCtaContact className="primary-CTA-contact-us" href={href} href1={href1} />
            </>
          )}
        </div>
        {["CTA-1-1280px", "CTA-2-1280px"].includes(property1) && (
          <img
            className="image-2"
            alt="Image"
            src={property1 === "CTA-2-1280px" ? "/img/image-5.png" : "/img/image-6.png"}
          />
        )}

        {property1 === "CTA-3-1280px" && <PrimaryCtaContact className="primary-CTA-contact-us" />}
      </div>
    </div>
  );
};

Cta.propTypes = {
  property1: PropTypes.oneOf(["CTA-3-1280px", "CTA-1-1280px", "CTA-2-1280px"]),
  href: PropTypes.string,
  href1: PropTypes.string,
};
