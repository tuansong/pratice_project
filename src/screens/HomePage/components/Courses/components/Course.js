import React from "react";

export const Course = props => {
  return (
    <React.Fragment>
      {props.left ? (
        <div className="course-container mb-5">
          <div className="course-icon">
            <i className={`fas fa-${props.iconName} text-center`} />
          </div>
          <div>
            <div className="course-info">
              <h3>{props.courseTitle}</h3>
              <p>{props.courseDetail}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="course-container mb-5">
          <div className="course-info">
            <h3>{props.courseTitle}</h3>
            <p>{props.courseDetail}</p>
          </div>
          <div className="course-icon">
            <i className={`fas fa-${props.iconName} text-center`} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
