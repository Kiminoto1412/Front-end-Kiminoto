import { useState } from "react";
import { Link } from "react-router-dom";
import paymentCard from "../../../assets/images/paymentCard.png";
import UploadImage from "../form/UploadImage";
import UploadSlip from "../form/UploadSlip";

function PaymentStep2() {
  const [slipPic, setSlipPic] = useState();
  // console.log(slipPic.name)
  return (
    <>
      <div className="container mt-5 mx-5">
        <div className="d-flex align-items-center">
          <h5 className="fw-bold m-0">Payment Method</h5>
          <img
            src={paymentCard}
            className="img-fluid"
            style={{ width: "32px" }}
            alt="bookShipping"
          />
        </div>

        {/* block1 */}
        <div className="bg-grey-plus-border-round">
          <div className="form-group mt-3 ms-4 me-4">
            <label htmlFor="addressName">Order number</label>
            <input
              type="text"
              className="form-control mt-3"
              id="addressName"
              placeholder="order number"
              style={{ backgroundColor: "#F6F6F6" }}
              // value={addressName}
            />
          </div>

          <div className="form-group mt-3 ms-4 me-4">
            <label htmlFor="addressName">Bank account</label>
            <input
              type="text"
              className="form-control mt-3"
              id="addressName"
              placeholder="bank account"
              style={{ backgroundColor: "#F6F6F6" }}
              // value={addressName}
            />
          </div>

          <div className="form-group mt-3 ms-4 me-4">
            <label htmlFor="addressName">Bank name</label>
            <input
              type="text"
              className="form-control mt-3"
              id="addressName"
              placeholder="bank name"
              style={{ backgroundColor: "#F6F6F6" }}
              // value={addressName}
            />
          </div>

          <div className="form-group mt-3 ms-4 me-4">
            <label htmlFor="addressName">Transfer Amount</label>
            <input
              type="text"
              className="form-control mt-3"
              id="addressName"
              placeholder="transfer amount "
              style={{ backgroundColor: "#F6F6F6" }}
              // value={addressName}
            />
          </div>

          <div className="form-group mt-3 ms-4 me-4">
            <label htmlFor="addressName">Proof of transaction</label>

            <input
              type="file"
              className="form-control mt-3"
              style={{ backgroundColor: "#F6F6F6" }}
              onChange={(e) => {
                setSlipPic(e.target.files[0]);
              }}
            />
          </div>
        </div>
      </div>
      <div className="border-top-black mt-5"></div>
      <div className="d-flex justify-content-center">
        <Link type="button" className="btn btn-dark mt-5 w-25 text-center" to="/PaymentMethod/Step3">
          SELECT THIS LOCATION
        </Link>
      </div>
    </>
  );
}

export default PaymentStep2;
