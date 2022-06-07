
function ChangePassword() {
  return (
    <>
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
    </>
  );
}

export default ChangePassword;
