import { Link, Outlet } from "react-router-dom";
import MamProfile from "../../assets/images/MamProfile.jpg";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import UploadImage from "./form/UploadImage";

function Profile() {
  const location = useLocation();

  const { user } = useContext(AuthContext);

  console.log(user);
  const [profilePic, setProfilePic] = useState(null);

  console.log(user.profilePic);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-3 ms-5 me-5 ">
          <div className="text-center">
            {/* {location.pathname === "/Profile" ? (
              <img
                src={profilePic}
                className=" border border-dark img-fluid"
                style={{ width: 250, height: 250 }}
                alt="profilePic"
              />
            ) : (
              <></>
            )} */}
        
              <UploadImage
                profilePic={profilePic }
                defaultProfilePic={user.profilePic}
                // ถ้า profilePic ยังไม่มีค่า จะเป้น null ถ้ากดcancel เป็น undefined
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setProfilePic(e.target.files[0]);
                  }
                }}
                onDelete={() => setProfilePic(null)}
              />
           
            <div className="black-bottom-header mt-3 mb-4"></div>
            <div className="d-flex justify-content-center">
              <Link
                to={`/Profile/${user.id}`}
                className={`text-dark text-decoration-none  ${
                  location.pathname === `/Profile/${user.id}` ? "fw-bold" : ""
                } `}
              >
                My account
              </Link>
              <Link
                to={`/Profile/EditProfile/${user.id}`}
                className={`text-dark text-decoration-none ${
                  location.pathname === `/Profile/EditProfile/${user.id}`
                    ? "fw-bold"
                    : ""
                }`}
              >
                <i
                  className="fa-solid fa-pencil ms-3"
                  style={{
                    fontSize: 12,
                    color:
                      location.pathname === `/Profile/EditProfile/${user.id}`
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
                    to={`/Profile/Address/${user.id}`}
                    className={`text-dark text-decoration-none ${
                      location.pathname === `/Profile/Address/${user.id}`
                        ? "fw-bold"
                        : ""
                    }`}
                  >
                    Address
                  </Link>
                  <Link
                    to={`/Profile/EditAddress/${user.id}`}
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
                          `/Profile/EditAddress/${user.id}`
                            ? "black"
                            : "grey",
                      }}
                    ></i>
                  </Link>
                </li>
              </div>

              <li>
                <Link
                  to={`/Profile/ChangePassword/${user.id}`}
                  className={`text-dark text-decoration-none ${
                    location.pathname === `/Profile/ChangePassword/${user.id}`
                      ? "fw-bold"
                      : ""
                  }`}
                >
                  Change Password
                </Link>
              </li>
            </div>
            <Link
              to={`/Profile/MyPurchase/${user.id}`}
              className={`text-dark text-decoration-none ${
                location.pathname === `/Profile/MyPurchase/${user.id}`
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
          <Outlet context={[profilePic, setProfilePic]} />
          {/* Add a New Address */}

          {/* </form> */}
        </div>
        {/* <div className="row mt-5 p-0">
            <div className="black-bottom-header"></div>
          </div> */}
      </div>
    </div>
  );
}

export default Profile;
