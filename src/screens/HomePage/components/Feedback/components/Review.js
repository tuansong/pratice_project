import React from "react";

export const Review = props => {
  return (
    <div className="review-container">
      <div className="my-tooltip mb-1">
        <p>{props.review}</p>
      </div>
      <div className="review-person text-white">
        <img src={props.url} alt="review-person" />
        <div className="review-info">
          <h3>{props.personName}</h3>
          <p>{props.personJob}</p>
        </div>
      </div>
    </div>
  );
};
