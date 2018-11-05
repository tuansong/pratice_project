import React from "react";

import img from "../../../../assets/1.png";

export const Education = props => {
  return (
    <div className="education-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="row mt-5">
              <div className="col-sm-3">
                <i className="fas fa-check" />
              </div>
              <div className="col-sm-9">
                <h4>VISION</h4>
                <p>Consectetur adipiscing elit estibulum nibh urna</p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-sm-3">
                <i className="fas fa-book" />
              </div>
              <div className="col-sm-9">
                <h4>AFFORDABLE</h4>
                <p>Elit consectetur adipiscing estibulum nibh urna</p>
              </div>
            </div>
          </div>
          <div className="mobile-hiding col-lg-4">
            <img className="middle-guy" src={img} alt="Agay" />
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="row mt-5">
              <div className="col-sm-9">
                <h4>VISION</h4>
                <p>Consectetur adipiscing elit estibulum nibh urna</p>
              </div>
              <div className="col-sm-3">
                <i className="fas fa-check" />
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-sm-9">
                <h4>AFFORDABLE</h4>
                <p>Elit consectetur adipiscing estibulum nibh urna</p>
              </div>
              <div className="col-sm-3">
                <i className="fas fa-book" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
