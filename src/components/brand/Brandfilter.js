import { Link, useNavigate } from "react-router-dom";

function Brandfilter() {
  const navigate = useNavigate();
  return (
    <div className="bg-color-brow-plus-grey-filter">
      <div className="container">
        <div className="row">
          <div className="col-2  text-center border-bottom-dark-brown-filter">
            <div className="mt-2 mb-2">Home</div>
          </div>
          <div className="col-2  text-center text-dark">
            <div className="mt-2 mb-2">All Products</div>
          </div>
          <div className="col-2  text-center text-dark">
            <div className="mt-2 mb-2">T-shirt</div>
          </div>
          <div className="col-2  text-center text-dark">
            <div className="mt-2 mb-2">Shorts</div>
          </div>
          <div className="col-2  text-center text-dark">
            <div className="mt-2 mb-2">Pants</div>
          </div>
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
