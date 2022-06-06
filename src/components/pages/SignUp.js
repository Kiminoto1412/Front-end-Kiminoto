import uploadImage from "../../assets/images/uploadImage.png";

function SignUp() {
  return (
    <>
      <div className="container mt-5">
        <form>
          <div className="row d-flex">
            <div className="col-4">
              <div className="text-center">
                <img
                  src={uploadImage}
                  className="me-4 bg-color-blank-image-grey p-5 "
                  alt="facebook"
                />
              </div>
            </div>
            <div className="col-8">
              <h5 className="fw-bold">Sign Up</h5>
              {/* Add Profile */}
              <h5 className="fw-bold mt-3">Profile</h5>
              {/* <form> */}
              <div className="form-group mt-3">
                <label for="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control mt-3"
                  id="firstName"
                  placeholder="first name"
                />
              </div>
              <div className="form-group mt-3">
                <label for="email">Email address</label>
                <input
                  type="email"
                  className="form-control mt-3"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="email"
                />
              </div>
              <div className="form-group mt-3">
                <label for="tel">Tel.</label>
                <input
                  type="text"
                  className="form-control mt-3"
                  id="tel"
                  placeholder="tel"
                />
              </div>
              <div className="form-group mt-3">
                <label for="password">Password</label>
                <input
                  type="password"
                  className="form-control mt-3"
                  id="password"
                  placeholder="password"
                />
              </div>
              <div className="form-group mt-3">
                <label for="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control mt-3"
                  id="confirmPassword"
                  placeholder="confirm password"
                />
              </div>
              {/* Add a New Address */}
              <h5 className="fw-bold mt-5">Add a New Address</h5>
              <div className="form-group mt-3">
                <label for="addressName">Address Name</label>
                <input
                  type="text"
                  className="form-control mt-3"
                  id="addressName"
                  placeholder="first name"
                />
              </div>

              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control mt-5"
                  id="addressFirstName"
                  placeholder="Address  (Room no., Buiding, Street)"
                />
              </div>
              <div className="form-group mt-3">
                <label for="city">City</label>
                <input
                  type="text"
                  className="form-control mt-3"
                  id="city"
                  placeholder="Province"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control mt-5"
                  id="district"
                  placeholder="District"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control mt-5"
                  id="postalCode"
                  placeholder="Postal Code"
                />
              </div>
              <div className="form-group mt-3">
                <label for="moreDetails">More Details</label>
                <textarea
                  className="form-control mt-3"
                  id="moreDetails"
                  rows="7"
                ></textarea>
              </div>

              {/* </form> */}
            </div>
            <div className="row mt-5 p-0">
              <div className="black-bottom-header"></div>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-dark mt-5 w-25 text-center"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
