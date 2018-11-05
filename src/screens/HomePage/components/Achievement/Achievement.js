import React from "react";

import { Achieve } from "./components/index";

export const Achievement = props => {
  return (
    <div className="achievement-container text-center">
      <div className="achievement container text-center">
        <h4 className="session-title">
          Our <span className="highlight-caption">Achievements</span>
        </h4>
        <div className="row">
          <Achieve counter="2001" counterTitle="Year of Foudation" />
          <Achieve counter="765" counterTitle="Graduates" />
          <Achieve counter={props.counter} counterTitle="Certified Staff" />
          <Achieve counter="150" counterTitle="Students" />
        </div>
      </div>
    </div>
  );
};
