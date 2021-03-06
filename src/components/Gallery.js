import React, { Component } from "react";
import {ReactDOM} from "react-dom";
import "../css/styles.css";
import image1 from "../assets/img/2.png";
import ScrollAnimation from "react-animate-on-scroll";



var img = [];
class Gallery extends React.Component {
  async componentWillMount() {
    img = [];
    await this.showImages();
  }

  async showImages() {
    for (var i = 1; i <= 46; i++) {
      var pic = "/img/" + (i % 46) + ".png";
      if (i % 46) {
        img.push(
          <div className="col-md-6 col-lg-4 mb-5">
            <div
              className="portfolio-item mx-auto"
              data-toggle="modal"
              data-target="#portfolioModal1"
            >
              <div>
                <img className="img-fluid" src={pic} alt="..." />
              </div>
              
            </div>
          </div>
        );
      }
    }
  }
  render() {
    return (
      <div style={{ background: "" }}>
        <section className="page-section portfolio" id="portfolio">
          <div className="container" key="container">
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
              Gallery
            </h2>

            <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="divider-custom-line"></div>
            </div>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={2}>
              <div className="row justify-content-center">{img}</div>
              
              
            </ScrollAnimation>
          </div>
        </section>
      </div>
    );
  }
}
export default Gallery;

