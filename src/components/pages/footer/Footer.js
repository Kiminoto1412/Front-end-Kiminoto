import { Link } from "react-router-dom";
import facebook from "../../../assets/images/facebook.png";
import instragram from "../../../assets/images/instagram.png";
import line from "../../../assets/images/line.png";

function Footer() {
  return (
    <footer>
      <div className="bg-color-footer-grey p-3 mt-5">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col ms-5">
                <h2
                  className="fw-bold"
                  //   style={{fontWeight:"400"}}
                >
                  KIMINOTO
                </h2>
                <h5 className="fw-bold mt-3">Find us on</h5>
                <div className="d-flex mt-2">
                  <img src={facebook} className="me-4" alt="facebook" />
                  <img src={instragram} className="me-4" alt="instragram" />
                  <img src={line} className="me-4" alt="line" />
                </div>
              </div>
              <div className="col text-end">
                <p className="fw-bold  mt-2 me-4">Shop</p>
                <Link
                  className="text-dark mt-2"
                  to="/"
                  role="button"
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  &#8226; Brand
                </Link>
              </div>
              <div className="col text-center">
                <p className="fw-bold mt-2">Help &#38; Support</p>
                <Link
                  className="text-dark mt-2"
                  to="/"
                  role="button"
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  &#8226; Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 mb-3 d-flex justify-content-center">
          <small>Copyright © 2021, Mammothzstyles.com</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
