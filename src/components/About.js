import "../css/styles.css";
import { Link } from "react-router-dom";
import image1 from "../assets/img/#2.png";
import FadeIn from "react-fade-in";
import ScrollAnimation from "react-animate-on-scroll";
import { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <section className="page-section bg-white text-white mb-0" id="about">
          <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-black">
              NewYorkCatsGame!
            </h2>
            <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="divider-custom-line"></div>
            </div>
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOnce={true}
              duration={1}
            >
              <div className="row">
                <div className="col-lg-4 ml-auto">
                  <p className="lead text-black">
                    NewYorkCatsGame is a digital art project on the Binance
                    Smart Chain Blockchain paying homage to NewYorkCatsGame.
                    They are unique and have several generations, Starting from
                    Generation Zero. Only 65535 Generation Zero Kitties will
                    ever exist. This project is inspired by CryptoKitties and is
                    not affiliated with Larva Labs. The Kitties are stored as
                    ERC-721 tokens on the Binance Smart Chain blockchain and
                    hosted on IPFS.
                  </p>
                </div>
                <div className="col-lg-4 ml-auto">
                  <p className="lead">
                    <img src="/img/6.png" alt="/" className="hari1" />
                  </p>
                </div>
                {/* <div className="col-lg-4 ml-auto">
                  <p className="lead text-black">
                    Each Avatar is unique and programmatically generated from
                    over 60 possible animations. All avatars are rarer than
                    others. Meebit Avatars were inspired by the original
                    Meebits. They follow the archetype of different types(Male,
                    Female) and have similar attributes...but they're animated
                    and there will only ever be a 4096 of them!
                  </p>
                </div> */}
              </div>
            </ScrollAnimation>
          </div>
          <div className="text-center mt-4">
          <a
                     className="btn btn-xl btn-outline-light"
                     href="https://newyorkcatgame.netlify.app"
                     target="_blank"
                   >
                     Grab your NYCG NFT
          </a>
          </div>
        </section>
      </div>
    );
  }
}
export default About;
