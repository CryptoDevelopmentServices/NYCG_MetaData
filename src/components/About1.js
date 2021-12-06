import "../css/styles.css";
import { Link } from "react-router-dom";
import image1 from "../assets/img/2.png";
import ScrollAnimation from "react-animate-on-scroll";
function About1() {
  return (
    <div>
      <section className="page-section bg-white text-white mb-0" id="about">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-black">
            discover the universe of NYCG
          </h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>

          <div className="row">
            <div className="ml-auto">
              <p className="lead text-black text-center">
                NYCG exist in many generations and colours, each differing in
                unique looks and individual rarity, Generation Zero being the
                rarest.
              </p>
            </div>
          </div>
        </div>
        <ScrollAnimation
          animateIn="bounceInLeft"
          animateOnce={true}
          duration={1.5}
        >
          <div className="collageRow">
            <div className="collageColumn">
              <img
              
                src="https://gateway.pinata.cloud/ipfs/QmYAU1AVGG3fhi8jSQ1pDyVEExjYfP7NcG1d4UMppxcHyg"
                alt="1"
                width="245px"
                height="700px"
              />
            </div>
            <div className="collageColumn">
              <img
                src="https://gateway.pinata.cloud/ipfs/QmQ143WuDhzxXYz7ms6PVqr21swWfq9dX2FJ95HejZ8gmG"
                alt="2"
                width="245px"
                height="700px"
              />
            </div>
            <div className="collageColumn">
              <img
                src="https://gateway.pinata.cloud/ipfs/QmbqvMTGxrXfNAwoBpr5vFkngXMcy9brebFyUDFkFFtPe3"
                alt="3"
                width="245px"
                height="700px"
              />
            </div>
          </div>
        </ScrollAnimation>
        <br />
        <br />
        <div className="text-center mt-4">
          <Link className="btn btn-xl btn-outline-primary" to="/Wallet">
            GET YOUR NYCG NFT
          </Link>
        </div>
      </section>
    </div>
  );
}
export default About1;
