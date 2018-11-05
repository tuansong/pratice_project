import React, { Component } from "react";

import { Header } from "../../components/Header/index";
import { Banner } from "./components/Banner/index";
import { Achievement } from "./components/Achievement/index";
import { About } from "./components/About/index";
import { Education } from "./components/Education/index";
import { Feedback } from "./components/Feedback/index";
import { Courses } from "./components/Courses/index";
import { Footer } from "../../components/Footer/index";

import "./homePage.css";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: "0",
      isOpen: false,
      siemaConfig: {
        duration: 500,
        loop: true,
        perPage: 2
      }
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  resize = () => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1200) {
        let newConfig = {
          duration: 500,
          loop: true,
          perPage: 1
        }
        this.setState({
          siemaConfig: newConfig
        })
      }
    })
  } 

  countUp = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 413) {
        let counter = this.state.counter;
        setInterval(() => {
          if (this.state.counter < 200) {
            this.setState({
              counter: counter++
            });
          }
        }, 0.00001);
      }
    });
  };

  componentDidMount() {
    //this.countUp();
    this.resize();
  }

  render() {
    return (
      <div className="homepage-container">
        <Header isOpen={this.state.isOpen} />
        <Banner />
        <Achievement counter={this.state.counter} />
        <Education />
        <Courses />
        <Feedback options={this.state.siemaConfig}/>
        <About />
        <Footer />
      </div>
    );
  }
}
