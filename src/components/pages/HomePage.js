import { Link } from "react-router-dom";
import HomePic from "../../assets/images/HomePic.png";
import CardContainer from "../cardsList/CardContainer";

function HomePage() {
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

      
    </>
  );
}

export default HomePage;
