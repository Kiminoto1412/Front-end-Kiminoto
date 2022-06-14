import { Link } from "react-router-dom";

function PaymentStep3() {
  return (
    <>
      <div className="container mt-5 ms-3">
        <div style={{ marginTop: "5rem" }}></div>
        <h3 className="fw-bold">Your order has been confirmed.</h3>
        <h5 className="fw-bold mt-4">
          You can check the status of the products at my order list .
        </h5>
        <div style={{ marginTop: "12rem" }}></div>
      </div>
      <div className="border-top-black mt-5"></div>
      <div className="d-flex justify-content-center">
        <Link
          type="button"
          className="btn btn-dark mt-5 w-25 text-center"
          to="/"
        >
          BACK TO HOME
        </Link>
      </div>
    </>
  );
}

export default PaymentStep3;
