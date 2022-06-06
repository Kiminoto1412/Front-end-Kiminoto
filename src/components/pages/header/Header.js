import { Link, Outlet, useNavigate } from "react-router-dom";
import Cart from "../../cart/Cart";
import Footer from "../footer/Footer";
// import { Dropdown } from "bootstrap";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      {/* ----- Header ----- */}
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <div className="container-fluid m-1 black-bottom-header p-2 ">
              <div className="row justify-content-between">
                <div className="col ">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Brand">
                        Brand
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <div
                        className="nav-link dropdown-toggle"
                        to="/"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown
                      </div>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <Link className="dropdown-item" to="/">
                            Action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/">
                            Another action
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/">
                            Something else here
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="col d-flex justify-content-center ">
                  <Link className="navbar-brand p-0" to="/">
                    <h1>KIMINOTO</h1>
                  </Link>
                </div>
                <div className="col d-flex justify-content-end">
                  <ul className="navbar-nav ml-auto  ">
                    <li className="nav-item dropdown-container">
                      <Link
                        className="btn dropdown-toggle nav-link"
                        to="/"
                        role="button"
                        id="languagesDropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        En
                      </Link>
                      <ul
                        className="dropdown-menu p-3"
                        aria-labelledby="languagesDropdown"
                      >
                        <li>
                          <Link className="dropdown-item" to="/">
                            <p>English</p>
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/">
                            <p className="th-option">ไทย</p>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        <i className="fas fa-search"></i>
                      </Link>
                    </li>
                    
                    <li className="nav-item">
                      <button
                      className="remove-all-config  m-2"
                      
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                      >
                        <i className="fas fa-shopping-cart "></i>
                      </button>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        <i className="fas fa-user-circle"></i>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/sign-up">
                        <p>Sign in</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />

      <Cart />
    </>
  );
}

export default Header;
