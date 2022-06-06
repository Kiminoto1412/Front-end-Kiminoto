import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import HomePic from "../../assets/images/HomePic.png";
import CardContainer from "../cardsList/CardContainer";

function HomePage() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container mt-2">
        <div className="row text-center m-0">
          <div className="col-md-4 text-center  order-md-1 px-0">
            <img src={HomePic} className="img-fluid" alt="HomePagePic" />
          </div>
          <div className="col-md-8 text-md-start mt-4 mt-md-0 order-md-2 bg-color-brown d-flex flex-column justify-content-center align-items-center position-relative">
            <div>
              <h1 className="fw-bold text-light-grey ">
                Summer Weekend Styles
              </h1>
              <p className="text-light-grey text-center">
                {" "}
                Build your perfect capsule wardrobe with daily staples
              </p>
            </div>
            <Link
              className="btn bg-color-light-grey text-brown  position-absolute bottom-0 mb-5"
              to="/"
              role="button"
            >
              Shop now
            </Link>
          </div>
        </div>
        <CardContainer />
      </div>

      {/* Modal Log in */}
      <Modal
        show={show}
        centered
        backdrop={'static'}
        onHide={handleClose}
        style={{ minHeight: 600 }}
        size="s"
      >
        <Modal.Header
          closeButton
          bsPrefix
          className="d-flex justify-content-end mt-2 me-3"
        />

        <div className="container ps-5 pe-5 pt-5">
          <form>
            <h1 className="text-center fw-bold">Log In</h1>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
                style={{ fontWeight: "500" }}
              >
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label"
                style={{ fontWeight: "500" }}
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" className="btn btn-dark w-100 fs-4 p-0 mt-3">
              LOG IN
            </button>
          </form>
          <div className="mt-5 border-top-black"></div>
          <div className="d-flex mt-3">
            <Link to="/sign-up" className="text-decoration-none">
              <p className="text-primary ">Sign Up</p>
            </Link>
            <p className="ms-3">If you don’t have an account.</p>
          </div>
        </div>
      </Modal>

    </>
  );
}

export default HomePage;
