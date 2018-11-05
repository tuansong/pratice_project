import React from "react";
import { Offer } from "./components/index";

export const Banner = props => {
  return (
    <div className="banner-container">
      <div className="banner d-flex justify-content-center align-items-center">
        <h4 className="banner-title text-center">Graphic Work Designing</h4>
        <div className="offer-banner container text-center p-5">
          <h2 className="session-title">
            What <span className="highlight-caption">We Offer</span>
          </h2>
          <div className="row">
            <Offer
              iconName="graduation-cap"
              offerCaption="Professional Study"
              offerDesciption="Nulla pellentesque mi non ac fermentum est. Cras mi ipsum"
            />
            <Offer
              iconName="book"
              offerCaption="Summer Session"
              offerDesciption="Nulla pellentesque mi non ac fermentum est. Cras mi ipsum"
            />
            <Offer
              iconName="globe"
              offerCaption="Global Education"
              offerDesciption="Nulla pellentesque mi non ac fermentum est. Cras mi ipsum"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
