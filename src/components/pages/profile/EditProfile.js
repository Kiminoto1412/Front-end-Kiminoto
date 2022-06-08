import { useLocation } from "react-router-dom";

function EditProfile({
  setFirstName,
  setLastName,
  setEmail,
  setPhoneNumber,
  setPassword,
  setConfirmPassword,
}) {
  const location = useLocation();
  // let locatiobVariable =location.pathname
  // console.log(location.pathname);

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
          // value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-group mt-3">
        <label form="lastName">Last Name</label>
        <input
          type="text"
          className="form-control mt-3"
          id="lastName"
          placeholder="last name"
          // value={lastName}
          onChange={(e) => setLastName(e.target.value)}
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
          // value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group mt-3">
        <label form="tel">Tel.</label>
        <input
          type="text"
          className="form-control mt-3"
          id="tel"
          placeholder="tel"
          // value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="form-group mt-3">
        <label form="password">Password</label>
        <input
          type="password"
          className="form-control mt-3"
          id="password"
          placeholder="password"
          // value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group mt-3">
        <label form="confirmPassword">Confirm Password</label>
        <input
          type="password"
          className="form-control mt-3"
          id="confirmPassword"
          placeholder="confirm password"
          // value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      {location.pathname === "/Profile/EditProfile/:customerId" ? (
        <>
          <div className="row mt-5 p-0"></div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-dark mt-5 w-25 text-center"
            >
              Save Profile
            </button>
          </div>
        </>
      ) : null}
    </>
  );
}

export default EditProfile;
