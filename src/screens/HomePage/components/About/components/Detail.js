import React from "react";

export const Detail = props => {
  return (
    <div className="course-detail-container mb-5">
      <p>
        <span className="course-title mr-3">{props.title}</span>
        {props.contain}
      </p>
    </div>
  );
};
