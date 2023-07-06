import React from "react";
import { Cta } from "../../components/Cta";
import { Features } from "../../components/Features";
import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";
import { SecondaryCtaSend } from "../../components/SecondaryCtaSend";
import { TextInput } from "../../components/TextInput";
import { TopBar } from "../../components/TopBar";
import { UserFeedback } from "../../components/UserFeedback";
import { Video } from "../../components/Video";
import "./style.css";

export const Home = () => {
  return (
    <div className="home">
      <TopBar
        className="design-component-instance-node-2"
        href="https://animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-pets&utm_medium=figma-samples"
        href1="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-portfolio&utm_medium=figma-samples"
        href2="https://animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-pets&utm_medium=figma-samples"
      />
      <Header
        className="design-component-instance-node-2"
        href="https://animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-pets&utm_medium=figma-samples"
        href1="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-portfolio&utm_medium=figma-samples"
        property1="header-1-1280px"
        text="This is a sample landing page, created with Figma and Anima. No coding involved."
      />
      <Video className="video-px" />
      <img className="logos" alt="Logos" src="/img/logos-1280px.svg" />
      <Features
        accessoriesIconAccessoriesIcon="/img/accessories-icon.png"
        className="design-component-instance-node-2"
        property1="features-1-1280px"
      />
      <UserFeedback className="design-component-instance-node-2" property1="user-feedback-1-1280px" />
      <Cta
        className="design-component-instance-node-2"
        href="https://animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-pets&utm_medium=figma-samples"
        href1="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-portfolio&utm_medium=figma-samples"
        property1="CTA-1-1280px"
      />
      <div className="footer">
        <div className="group-2">
          <Logo className="logo-2" overlapGroupClassName="logo-3" vector="/img/vector-13.png" />
          <div className="frame-14">
            <div className="frame-15">
              <p className="text-wrapper-2">Updates right to your Inbox</p>
              <div className="text-input-2">
                <TextInput className="text-input-instance" />
                <SecondaryCtaSend
                  className="secondary-CTA-send-instance"
                  href="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-portfolio&utm_medium=figma-samples"
                  overlapGroupClassName="secondary-CTA-send-2"
                />
              </div>
            </div>
            <div className="frame-16">
              <div className="PETWORLD-2">
                <div className="text-wrapper-3">©</div>
                <div className="text-wrapper-4">PETWORLD 2022</div>
              </div>
              <div className="text-wrapper-4">Privacy policy</div>
              <div className="text-wrapper-4">Terms of use</div>
            </div>
          </div>
          <div className="frame-17">
            <div className="frame-18">
              <div className="frame-19">
                <div className="text-wrapper-5">Our story</div>
                <div className="text-wrapper-6">FAQ</div>
                <div className="text-wrapper-6">Contact</div>
              </div>
              <div className="frame-20">
                <div className="text-wrapper-5">Pet care</div>
                <div className="text-wrapper-6">Treatments</div>
                <div className="text-wrapper-6">Health</div>
                <div className="text-wrapper-6">Hygiene</div>
              </div>
              <div className="frame-21">
                <div className="text-wrapper-5">Shop</div>
                <div className="text-wrapper-6">Pet Food</div>
                <div className="text-wrapper-6">Toys</div>
                <div className="text-wrapper-6">Accessories</div>
              </div>
            </div>
            <div className="socials-icons">
              <img className="img-2" alt="Facebook" src="/img/facebook-2.png" />
              <img className="img-2" alt="Linkedin" src="/img/linkedin-2.png" />
              <div className="instagram">
                <img className="instagram-2" alt="Instagram" src="/img/instagram-1.png" />
              </div>
              <img className="img-2" alt="Twitter" src="/img/twitter-2.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
