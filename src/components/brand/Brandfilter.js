import { Link, useLocation, useNavigate } from "react-router-dom";

function Brandfilter() {
  const navigate = useNavigate();
  let location = useLocation();

  console.log(location.pathname)
  return (
    <div className="bg-color-brow-plus-grey-filter">
      <div className="container">
        <div className="row">
          <Link
            to="/Brand"
            className={`col-2  text-center text-decoration-none ${
              location.pathname === "/Brand"
                ? "border-bottom-dark-brown-filter"
                : null
            }`}
          >
            <div className="mt-2 mb-2 text-dark">Home</div>
          </Link>
          <Link
            to="/Brand/AllProduct"
            className={`col-2  text-center text-decoration-none ${
              location.pathname === "/Brand/AllProduct"
                ? "border-bottom-dark-brown-filter"
                : null
            }`}
          >
            <div className="mt-2 mb-2 text-dark">All Products</div>
          </Link>
          <Link
            to="/Brand/Shirt"
            className={`col-2  text-center text-decoration-none ${
              location.pathname === "/Brand/Shirt"
                ? "border-bottom-dark-brown-filter"
                : null
            }`}
          >
            <div className="mt-2 mb-2 text-dark">T-shirt</div>
          </Link>
          <Link
            to="/Brand/Pants"
            className={`col-2  text-center text-decoration-none ${
              location.pathname === "/Brand/Pants"
                ? "border-bottom-dark-brown-filter"
                : null
            }`}
          >
            <div className="mt-2 mb-2 text-dark">Pants</div>
          </Link>
          <Link
            to="/Brand/Accessories"
            className={`col-2  text-center text-decoration-none ${
              location.pathname === "/Brand/Accessories"
                ? "border-bottom-dark-brown-filter"
                : null
            }`}
          >
            <div className="mt-2 mb-2 text-dark">Accessories</div>
          </Link>
          <div className="col-2  ">
            <nav class="navbar navbar-expand-lg p-0 ">
              <div class="collapse navbar-collapse " id="navbarNavDarkDropdown">
                <ul class="navbar-nav ">
                  <li class="nav-item dropdown d-flex justify-contents-center ms-5">
                    <Link
                      className="nav-link dropdown-toggle  text-dark border-start border-dark border-2 p-0 mt-2 mb-2 ps-3"
                      to="/"
                      id="navbarDarkDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      More
                    </Link>
                    <ul
                      class="dropdown-menu dropdown-menu-dark ms-5"
                      aria-labelledby="navbarDarkDropdownMenuLink"
                    >
                      <li>
                        <Link class="dropdown-item" to="/">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="/">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="/">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brandfilter;
