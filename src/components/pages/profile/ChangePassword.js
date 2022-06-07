
function ChangePassword() {
  return (
    <>
      <div className="form-group mt-3">
        <label form="password">Old Password</label>
        <input
          type="password"
          className="form-control mt-3"
          id="password"
          placeholder="old password"
        />
      </div>
      <div className="form-group mt-3">
        <label form="confirmPassword">New Password</label>
        <input
          type="password"
          className="form-control mt-3"
          id="confirmPassword"
          placeholder="new password"
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
          Save Password
        </button>
      </div>
    </>
  );
}

export default ChangePassword;
