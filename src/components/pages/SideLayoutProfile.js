import { Link, Outlet } from "react-router-dom";
import MamProfile from "../../assets/images/MamProfile.jpg";
import { useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();
  // let locatiobVariable =location.pathname
  console.log(location.pathname);

  return (
    <div className="container mt-5">
      <form>
        <div className="row">
          <div className="col-3 ms-5 me-5 ">
            <div className="text-center">
              <img
                src={MamProfile}
                className=" border border-dark img-fluid"
                style={{ width: 250 }}
                alt="facebook"
              />
              <div className="black-bottom-header mt-3 mb-4"></div>
              <div className="d-flex justify-content-center">
                <Link
                  to="/Profile/:customerId"
                  className={`text-dark text-decoration-none  ${
                    location.pathname === "/Profile/:customerId"
                      ? "fw-bold"
                      : ""
                  } `}
                >
                  My account
                </Link>
                <Link
                  to="/Profile/EditProfile/:customerId"
                  className={`text-dark text-decoration-none ${
                    location.pathname === "/Profile/EditProfile/:customerId"
                      ? "fw-bold"
                      : ""
                  }`}
                >
                  <i
                    className="fa-solid fa-pencil ms-3"
                    style={{
                      fontSize: 12,
                      color:
                        location.pathname === "/Profile/EditProfile/:customerId"
                          ? "black"
                          : "grey",
                    }}
                  ></i>
                </Link>
              </div>
              <div className="text-start" style={{ marginLeft: "120px" }}>
                <div className="d-flex justify-content-start">
                  <li>
                    <Link
                      to="/Profile/Address/:customerId"
                      className={`text-dark text-decoration-none ${
                        location.pathname === "/Profile/Address/:customerId"
                          ? "fw-bold"
                          : ""
                      }`}
                    >
                      Address
                    </Link>
                    <Link
                      to="/Profile/EditAddress/:customerId"
                      className={`text-dark text-decoration-none ${
                        location.pathname === "/Profile/EditAddress/:customerId"
                          ? "fw-bold"
                          : ""
                      }`}
                    >
                      <i
                        className="fa-solid fa-pencil ms-3"
                        style={{
                          fontSize: 12,
                          color:
                            location.pathname ===
                            "/Profile/EditAddress/:customerId"
                              ? "black"
                              : "grey",
                        }}
                      ></i>
                    </Link>
                  </li>
                </div>

                <li>
                  <Link
                    to="/Profile/ChangePassword/:customerId"
                    className={`text-dark text-decoration-none ${
                      location.pathname ===
                      "/Profile/ChangePassword/:customerId"
                        ? "fw-bold"
                        : ""
                    }`}
                  >
                    Change Password
                  </Link>
                </li>
              </div>
              <Link
                to="/Profile/MyPurchase/:customerId"
                className={`text-dark text-decoration-none ${
                  location.pathname === "/Profile/MyPurchase/:customerId"
                    ? "fw-bold"
                    : ""
                }`}
                style={{ marginRight: "20px" }}
              >
                My Purchase
              </Link>
            </div>
          </div>
          <div className="col-8">
            <Outlet />
            {/* Add a New Address */}

            {/* </form> */}
          </div>
          <div className="row mt-5 p-0">
            <div className="black-bottom-header"></div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Profile;
