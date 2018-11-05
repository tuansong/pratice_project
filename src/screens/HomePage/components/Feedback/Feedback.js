import React from "react";
import ReactSiema from "react-siema";

import { Review } from "./components/index";
import img1 from "../../../../assets/t1.jpg";
import img2 from "../../../../assets/t2.jpg";
import img3 from "../../../../assets/t3.jpg";

export const Feedback = props => {
  return (
    <div className="feedback-container mb-5">
      <div className="container">
        <h4 className="session-title pt-5">
          What our <span className="highlight-caption">customer saying</span>
        </h4>
        <ReactSiema {...props.options}>
          <div className="slide">
            <Review
              review="Vivamus sed porttitor felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Sed lorem enim, ."
              url={img1}
              personName="Shane Watson"
              personJob="Programmer"
            />
          </div>
          <div className="slide">
            <Review
              review="Vivamus sed porttitor felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Sed lorem enim, ."
              url={img2}
              personName="Lil Tay"
              personJob="Gammer"
            />
          </div>
          <div className="slide">
            <Review
              review="Vivamus sed porttitor felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Sed lorem enim, ."
              url={img3}
              personName="Shane Long"
              personJob="Player"
            />
          </div>
        </ReactSiema>
      </div>
    </div>
  );
};
