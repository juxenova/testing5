/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ImageDesktop } from "../ImageDesktop";
import { QuoteIcon } from "../QuoteIcon";
import "./style.css";

export const UserFeedback = ({ property1, className }) => {
  return (
    <div className={`user-feedback ${property1} ${className}`}>
      <div className="frame-7">
        {["user-feedback-1-1280px", "user-feedback-3-1280px"].includes(property1) && (
          <div className="frame-8">
            {property1 === "user-feedback-1-1280px" && (
              <>
                <ImageDesktop className="image-desktop-instance" ellipseClassName="image-desktop-2" />
                <div className="quote">
                  <div className="frame-9">
                    <QuoteIcon className="quote-icon-instance" quoteIcon="/img/quote-icon-3.png" />
                    <p className="we-love-using">
                      We love using &#39;PETWORLD&#39; products.&nbsp;&nbsp;Environmentally friendly and sustainable.{" "}
                      <br />
                      We have the sustainable dog bowls and regularly use the mint scented poo bags which were all such
                      great value for money.
                    </p>
                  </div>
                  <div className="dylan-shaw">Dylan Shaw</div>
                </div>
              </>
            )}

            {property1 === "user-feedback-3-1280px" && (
              <>
                <div className="quote-2">
                  <QuoteIcon className="quote-icon-instance" quoteIcon="/img/quote-icon-2.png" />
                  <p className="we-love-using-2">
                    We love using &#39;PETWORLD&#39; products. Environmentally friendly and sustainable. We have the
                    sustainable dog bowls and regularly use the mint scented poo bags which were all such great value
                    for money.
                  </p>
                </div>
                <div className="dylan-shaw-2">Dylan Shaw</div>
              </>
            )}
          </div>
        )}

        {property1 === "user-feedback-2-1280px" && (
          <>
            <p className="text">
              “We love using &#39;PETWORLD&#39; products. Environmentally friendly and sustainable. We have the
              sustainable dog bowls and regularly use the mint scented poo bags which were all such great value for
              money”.
            </p>
            <div className="user">
              <div className="image-mobile">
                <div className="ellipse-2" />
              </div>
              <div className="frame-10">
                <div className="dylan-shaw-3">Dylan Shaw</div>
                <div className="stars">
                  <div className="star">
                    <img className="img" alt="Star" src="/img/star.png" />
                  </div>
                  <div className="star-wrapper">
                    <img className="img" alt="Star" src="/img/star.png" />
                  </div>
                  <div className="img-wrapper">
                    <img className="img" alt="Star" src="/img/star.png" />
                  </div>
                  <div className="star-2">
                    <img className="img" alt="Star" src="/img/star.png" />
                  </div>
                  <div className="star-3">
                    <img className="img" alt="Star" src="/img/star.png" />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

UserFeedback.propTypes = {
  property1: PropTypes.oneOf(["user-feedback-3-1280px", "user-feedback-1-1280px", "user-feedback-2-1280px"]),
};
