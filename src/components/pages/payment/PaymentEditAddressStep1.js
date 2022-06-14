import { Link } from "react-router-dom";

function PaymentEditAddressStep1() {
  return (
    <>
      <div className="mt-5 mx-5">
          
         {/* Add a New Address */}
      <h5 className="fw-bold mt-5">My Address</h5>
      <div className="form-group mt-3">
        <label htmlFor="addressName">Address Name</label>
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
        <label htmlFor="city">City</label>
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
        <label htmlFor="moreDetails">More Details</label>
        <textarea
          className="form-control mt-3"
          id="moreDetails"
          rows="7"
        ></textarea>
      </div>
      </div>
      <div className="border-top-black mt-5"></div>
      <div className="d-flex justify-content-center">
        <Link type="button" className="btn btn-dark mt-5 w-25 text-center" to="/PaymentMethod/Step1">
          SUBMIT
        </Link>
      </div>
    </>
  );
}

export default PaymentEditAddressStep1;
