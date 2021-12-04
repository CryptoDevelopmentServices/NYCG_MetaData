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
                src="https://gateway.pinata.cloud/ipfs/QmXWsxs3YUZTBNVF8a8WrbzWwURUEUzBzw1diY8WhuiyFe"
                alt="1"
              />
            </div>
            <div className="collageColumn">
              <img
                src="https://gateway.pinata.cloud/ipfs/QmNMboxeuHBaEZXpFsbvAwPTCkygYy28npCmfD2hTTSsqV"
                alt="2"
              />
            </div>
            <div className="collageColumn">
              <img
                src="https://gateway.pinata.cloud/ipfs/QmNZaWr4XFUoPwHKqZQxXKhaNHQpoqwvu3EkQYwqRRvKot"
                alt="3"
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
