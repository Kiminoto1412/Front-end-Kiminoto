import CartContextProvider from "../../../context/CartContext";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Cart from "../../cart/Cart";
import Footer from "../footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { CategoriesContext } from "../../../context/CategoriesContext";
// import { Dropdown } from "bootstrap";

function Header() {
  const navigate = useNavigate();

  const { user, loading, logout } = useContext(AuthContext);
  const { categories } = useContext(CategoriesContext);

  console.log(user);
  console.log(categories)

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
                    {/* Categories */}

                    <li className="nav-item dropdown">
                      <div
                        className="nav-link dropdown-toggle"
                        to="/"
                        id="categoriesDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Categories
                      </div>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="categoriesDropdown"
                      >
                        {categories.map((category) => (
                          <li className="nav-item">
                            <Link
                              className="dropdown-item"
                              // to={`/categories/${category.id}`}
                              to={`/Brand/${category.name}`}
                              >
                              <p>{category.name}</p>
                            </Link>
                          </li>
                        ))}
                      </ul>
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
                          <Link
                            className="dropdown-item"
                            to="/PaymentMethod/Step1"
                          >
                            Payment
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/">
                            Something else here
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/orderTracking">
                            Order tracking
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
                      {user ? (
                        <Link className="nav-link" to={`/Profile/${user?.id}`}>
                          <i className="fas fa-user-circle"></i>
                        </Link>
                      ) : (
                        <></>
                      )}
                    </li>
                    {/* <li className="nav-item">
                      <Link className="nav-link" to="/sign-up">
                        <p>Sign in</p>
                      </Link>
                    </li> */}
                    <li className="nav-item">
                      <Link className="nav-link" onClick={logout} to="/">
                        <p>Log out</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className=" body-container">
        <Outlet />
      </div>
      <CartContextProvider>
        <Cart />
      </CartContextProvider>
      <Footer />
    </>
  );
}

export default Header;
