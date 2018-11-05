import React from "react";

import { Course } from "./components/index";
import img from "../../../../assets/2.png";

export const Courses = props => {
  return (
    <div className="courses-container">
      <div className="container">
        <h4 className="session-title">
          Education <span className="highlight-caption">Courses</span>
        </h4>
        <div className="row text-center">
          <div className="courses-left col-lg-4 col-md-6 col-sm-12">
            <Course
              left
              iconName="book"
              courseTitle="Design Course"
              courseDetail="Lorem ipsum magna, vehicula"
            />
            <Course
              left
              iconName="passport"
              courseTitle="Marketing Course"
              courseDetail="Lorem ipsum magna, vehicula"
            />
            <Course
              left
              iconName="lock"
              courseTitle="Financial Course"
              courseDetail="Lorem ipsum magna, vehicula"
            />
          </div>
          <div className="middle-person mobile-hiding col-lg-4">
            <img src={img} alt="person" />
          </div>
          <div className="courses-right col-lg-4 col-md-6 col-sm-12">
            <Course
              iconName="lock"
              courseTitle="Marketing Course"
              courseDetail="Lorem ipsum magna, vehicula"
            />
            <Course
              iconName="passport"
              courseTitle="Financial Course"
              courseDetail="Lorem ipsum magna, vehicula"
            />
            <Course
              iconName="lock"
              courseTitle="Design Course"
              courseDetail="Lorem ipsum magna, vehicula"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
