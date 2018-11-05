import React from "react";

export const Achieve = props => {
  return (
    <div className="achieve-container col-lg-3 col-md-6 col-sm-12">
      <p className="icon-color counter mb-2">{props.counter}</p>
      <p className="achieve">{props.counterTitle}</p>
    </div>
  );
};
