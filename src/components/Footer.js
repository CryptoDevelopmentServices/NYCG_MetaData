import "../css/styles.css";
function Footer() {
  return (
    <div>
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4"></h4>
              <p className="lead mb-0">
                <br />
              </p>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">
                Created By Crypto Development Services
              </h4>

              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://twitter.com/CryptoDevelopm3"
                target="_blank"
              >
                <i className="fab fa-fw fa-twitter"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://discord.gg/xUZNT9Zzcp"
              >
                <i className="fab fa-fw fa-discord"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://github.com/CryptoDevelopmentServices"
              >
                <i className="fab fa-fw fa-github"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://www.cryptodevservices.com/"
              >
                <i className="fab fa-fw fa-dribbble"></i>
              </a>

              <h3 className="text-uppercase mb-4">For Wrapped NewYorkCoin</h3>
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://twitter.com/Wrapped_NYC"
                target="_blank"
              >
                <i className="fab fa-fw fa-twitter"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://discord.gg/3HjUpMkW9y"
              >
                <i className="fab fa-fw fa-discord"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://wrappednyc.com/"
              >
                <i className="fab fa-fw fa-dribbble"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
