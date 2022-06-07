import { Link } from "react-router-dom";


function EditProfile() {

  return (
    <>
      <h5 className="fw-bold ">Edit Profile</h5>
      {/* <form> */}
      <div className="form-group mt-3">
        <label form="firstName">First Name</label>
        <input
          type="text"
          className="form-control mt-3"
          id="firstName"
          placeholder="first name"
        />
      </div>
      <div className="form-group mt-3">
        <label form="email">Email address</label>
        <input
          type="email"
          className="form-control mt-3"
          id="email"
          aria-describedby="emailHelp"
          placeholder="email"
        />
      </div>
      <div className="form-group mt-3">
        <label form="tel">Tel.</label>
        <input
          type="text"
          className="form-control mt-3"
          id="tel"
          placeholder="tel"
        />
      </div>
      <div className="form-group mt-3">
        <label form="password">Password</label>
        <input
          type="password"
          className="form-control mt-3"
          id="password"
          placeholder="password"
        />
      </div>
      <div className="form-group mt-3">
        <label form="confirmPassword">Confirm Password</label>
        <input
          type="password"
          className="form-control mt-3"
          id="confirmPassword"
          placeholder="confirm password"
        />
      </div>

      <div className="row mt-5 p-0">
      </div>
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-dark mt-5 w-25 text-center">
          Save Profile
        </button>
      </div>
    </>
  );
}

export default EditProfile
