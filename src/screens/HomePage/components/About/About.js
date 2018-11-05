import React from "react";

import { Detail } from "./components/index";
import img from "../../../../assets/img.jpg";

export const About = props => {
  return (
    <div className="about-container">
      <div className="container">
        <h4 className="session-title pt-5">
          What our <span className="highlight-caption">customer saying</span>
        </h4>
        <div className="row">
          <div className="col-lg-6">
            <Detail
              title="1.Design Course"
              contain="Itaque earum rerum hic tenetur a sapiente delectusum hic tenetur a sapiente delectus"
            />
            <Detail
              title="2.Marketing Course"
              contain="Itaque earum rerum hic tenetur a sapiente delectusum hic tenetur a sapiente delectus"
            />
            <Detail
              title="3.Financial Course"
              contain="Itaque earum rerum hic tenetur a sapiente delectusum hic tenetur a sapiente delectus"
            />
            <Detail
              title="4.Design Course"
              contain="Itaque earum rerum hic tenetur a sapiente delectusum hic tenetur a sapiente delectus"
            />
          </div>
          <div className="col-lg-6">
            <img src={img} alt="Course" />
          </div>
        </div>
      </div>
    </div>
  );
};
