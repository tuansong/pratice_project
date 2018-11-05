import React from "react";

export const Footer = props => {
  return (
    <div className="footer-container">
      <div className="first-footer pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h3>
                <span className="highlight-caption">About</span> Us
              </h3>
              <p className="grey-text">
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus. lacinia eget consectetur sed, convallis at tellus..
              </p>
            </div>
            <div className="col-lg-3">
              <h3>
                <span className="highlight-caption">Lastest</span> News
              </h3>
              <ul className="no-padding grey-text small-spacing">
                <li>
                  <span>
                    <i className="fas fa-arrow-right" />
                  </span>
                  <a>Lorem ipsum neque</a>
                </li>
                <li>
                  <span>
                    <i className="fas fa-arrow-right" />
                  </span>
                  <a>Lorem ipsum neque</a>
                </li>
                <li>
                  <span>
                    <i className="fas fa-arrow-right" />
                  </span>
                  <a>Lorem ipsum neque</a>
                </li>
                <li>
                  <span>
                    <i className="fas fa-arrow-right" />
                  </span>
                  <a>Lorem ipsum neque</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h3>
                <span className="highlight-caption">Quick</span> Links
              </h3>
              <ul className="no-padding grey-text small-spacing">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Services</a>
                </li>
                <li>
                  <a>Gallery</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h3>
                <span className="highlight-caption">Subscribe</span> Us
              </h3>
              <p />
              <form>
                <input type="text" placeholder="Your email" />
                <button>
                  <i className="fas fa-envelope" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="second-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <p className="copyright">
                &#169 2018 Opsimathy. All Rights Reserved | Design by{" "}
                <span className="highlight-caption">W3layouts</span>
              </p>
            </div>
            <div className="col-lg-4 d-flex align-items-center">
              <h5>Follow us on: </h5>
              <ul className="social mb-0 float-right no-padding">
                <li>
                  <i className="fab fa-facebook-f" />
                </li>
                <li>
                  <i className="fab fa-twitter" />
                </li>
                <li>
                  <i className="fab fa-google-plus-g" />
                </li>
                <li>
                  <i className="fab fa-instagram" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
