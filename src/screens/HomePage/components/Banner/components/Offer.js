import React from "react";

export const Offer = props => {
  return (
    <div className="offer-container col-lg-4 text-center">
      <i className={`fas fa-${props.iconName} icon-color`} />
      <h3 className="mt-3 mb-3">{props.offerCaption}</h3>
      <p>{props.offerDesciption}</p>
    </div>
  );
};
