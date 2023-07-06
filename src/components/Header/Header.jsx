/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { PrimaryCtaGet } from "../PrimaryCtaGet";
import "./style.css";

export const Header = ({
  property1,
  className,
  text = "Fresh ingredients slowly baked into our super delicious food. Available in a range of delicious flavors, delivered to your door.",
  href,
  href1,
}) => {
  return (
    <div className={`header ${property1} ${className}`}>
      <div className="div-2">
        {["header-1-1280px", "header-2-1280px"].includes(property1) && (
          <>
            <div className="div-3">
              {property1 === "header-1-1280px" && (
                <div className="frame-2">
                  <div className="frame-3">
                    <div className="title">Pet Store &amp; Beyond</div>
                    <p className="subtitle">{text}</p>
                  </div>
                  <a className="primary-CTA-get-wrapper" href={href} rel="noopener noreferrer" target="_blank">
                    <PrimaryCtaGet
                      className="primary-CTA-get-started"
                      href={href1}
                      overlapGroupClassName="primary-CTA-get-instance"
                    />
                  </a>
                </div>
              )}

              {property1 === "header-2-1280px" && (
                <>
                  <div className="title-2">Pet Store &amp; Beyond</div>
                  <p className="p">{text}</p>
                  <div className="primary-CTA-get-started-wrapper">
                    <PrimaryCtaGet className="primary-CTA-get-started-instance" />
                  </div>
                </>
              )}
            </div>
            <img
              className="image"
              alt="Image"
              src={property1 === "header-2-1280px" ? "/img/image-1.png" : "/img/image-2.png"}
            />
          </>
        )}

        {property1 === "header-3-1280px" && (
          <>
            <PrimaryCtaGet className="instance-node" overlapGroupClassName="primary-CTA-get-instance" />
            <p className="subtitle-2">
              Fresh ingredients slowly baked into our super delicious food. Available in a range of delicious flavours,
              delivered to your door.
            </p>
            <div className="title-3">Pet Store &amp; Beyond</div>
          </>
        )}
      </div>
    </div>
  );
};

Header.propTypes = {
  property1: PropTypes.oneOf(["header-2-1280px", "header-3-1280px", "header-1-1280px"]),
  text: PropTypes.string,
  href: PropTypes.string,
  href1: PropTypes.string,
};
