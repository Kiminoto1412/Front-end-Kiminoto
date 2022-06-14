import bookShipping from "../../../assets/images/bookShipping.png";
import { Outlet, useLocation } from "react-router-dom";

function PaymentHeader() {
  const location = useLocation();
  return (
    <>
      <div className="container mt-5">
        <div className="row text-center">
          <div
            className={`col-4 ${
              location.pathname === "/PaymentMethod/Step1" || location.pathname ==="/PaymentMethod/EditStep1"
                ? "black-bold-bottom-header"
                : "black-bottom-header"
            }`}
          >
            Shipping
          </div>
          <div
            className={`col-4 ${
              location.pathname === "/PaymentMethod/Step2"
                ? "black-bold-bottom-header"
                : "black-bottom-header"
            }`}
          >
            Payment
          </div>
          <div
            className={`col-4 ${
              location.pathname === "/PaymentMethod/Step3"
                ? "black-bold-bottom-header"
                : "black-bottom-header"
            }`}
          >
            Confirm
          </div>
        </div>
        {location.pathname === "/PaymentMethod/Step1" ? (
          <div className="text-center mt-5">
            <img
              src={bookShipping}
              className="img-fluid"
              style={{ width: "32px" }}
              alt="bookShipping"
            />
          </div>
        ) : (
          <div></div>
        )}
        <Outlet />
      </div>
    </>
  );
}

export default PaymentHeader;
