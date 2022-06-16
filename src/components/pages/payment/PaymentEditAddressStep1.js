import axios from "axios";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { ErrorContext } from "../../../context/ErrorContext";
import { useNavigate } from "react-router-dom";

function PaymentEditAddressStep1() {
  let navigate = useNavigate();
  
  const { user } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);

  const [addressName, setAddressName] = useState(user.addressName);
  const [address, setAddress] = useState(user.address);
  const [city, setCity] = useState(user.city);
  const [district, setDistrict] = useState(user.district);
  const [postalCode, setPostalCode] = useState(user.postalCode);
  const [moreDetails, setMoreDetails] = useState(user.moreDetails);

  const handleSubmitEditAddress = async (e) => {
    try {
      e.preventDefault();

      await axios.patch("/customers/me ", {
        addressName,
        address,
        city,
        district,
        postalCode,
        moreDetails,
      });
      navigate("/PaymentMethod/Step1")
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitEditAddress}>
        <div className="mt-5 mx-5">
          {/* Add a New Address */}
          <h5 className="fw-bold mt-5">My Address</h5>
          <div className="form-group mt-3">
            <label htmlFor="addressName">Address Name</label>
            <input
              type="text"
              className="form-control mt-3"
              id="addressName"
              defaultValue={user.addressName}
              placeholder="first name"
              onChange={(e) => setAddressName(e.target.value)}
            />
          </div>

          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control mt-5"
              id="addressFirstName"
              defaultValue={user.address}
              placeholder="Address  (Room no., Buiding, Street)"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control mt-5"
              id="district"
              placeholder="District"
              defaultValue={user.district}
              onChange={(e) => setDistrict(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="city">City</label>
            <input
              type="text"
              className="form-control mt-3"
              id="city"
              placeholder="Province"
              defaultValue={user.city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control mt-5"
              id="postalCode"
              placeholder="Postal Code"
              defaultValue={user.postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="moreDetails">More Details</label>
            <textarea
              className="form-control mt-3"
              id="moreDetails"
              rows="7"
              defaultValue={user.moreDetails}
              onChange={(e) => setMoreDetails(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="border-top-black mt-5"></div>
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-dark mt-5 w-25 text-center"
            to="/PaymentMethod/Step1"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
}

export default PaymentEditAddressStep1;
