import Address from "../profile/Address";
import { AuthContext } from "../../../context/AuthContext";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";

function PaymentStep1() {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  // console.log(user)

  return (
    <div className="container mt-4">
      <h3 className="text-center fw-bold">Select Your Shipping Method</h3>
      {/* Button disabled */}
      <div className=" border-top-black mt-5 mx-5 ">
        <div className="row mt-4 align-items-center ">
          <div className="col-1 text-center">
            <input
              type="color"
              id="head"
              name="head"
              defaultValue="#000"
              disabled={true}
            />
          </div>
          {/* Address name */}
          <div className="col-9 p-0 ">
            <p className="m-0 align-items-center fw-bold">{user.addressName}</p>
          </div>
          <Link className="col-1 p-0 text-end" to="/PaymentMethod/EditStep1">
            <i
              className="fa-solid fa-pencil ms-3"
              style={{
                fontSize: 12,
                color: "grey",
              }}
            ></i>
          </Link>
          {/* <Link className="col-1 p-0 text-center" to="/PaymentMethod/EditStep1">
            <i
              className="fa-solid fa-trash ms-3"
              style={{
                fontSize: 12,
                color: "grey",
              }}
            ></i>
          </Link> */}
        </div>

        {/* row2 */}
        {/* Address  */}
        <div className="row mt-2">
          <div className="col-1"></div>
          <div className="col-11 p-0">
            <p className="m-0 align-items-center">{user.address}</p>
          </div>
        </div>

        {/* row2 */}
        {/* District */}
        <div className="row mt-2">
          <div className="col-1"></div>
          <div className="col-11 p-0">
            <p className="m-0 align-items-center">{user.district}</p>
          </div>
        </div>

        {/* row3 */}
        {/* City */}
        <div className="row mt-2">
          <div className="col-1"></div>
          <div className="col-11 p-0">
            <p className="m-0 align-items-center">
              {user.city} {user.postalCode}
            </p>
          </div>
        </div>
      </div>
      <div className="border-top-black mt-5 mx-5"></div>
      <div className="d-flex justify-content-center">
        <Link type="button" className="btn btn-dark mt-5 w-25 text-center" to="/PaymentMethod/Step2">
          SELECT THIS LOCATION
        </Link>
      </div>
    </div>
  );
}

export default PaymentStep1;
