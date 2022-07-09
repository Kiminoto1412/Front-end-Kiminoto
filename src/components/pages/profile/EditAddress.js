import axios from "axios";
import { useContext, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { ErrorContext } from "../../../context/ErrorContext";

function EditAddress() {
  const location = useLocation();
  let navigate = useNavigate();

  const { customerId } = useParams();

  const { user } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);

    const [addressName, setAddressName] = useState(user?.addressName);
    const [address, setAddress] = useState(user?.address);
    const [city, setCity] = useState(user?.city);
    const [district, setDistrict] = useState(user?.district);
    const [postalCode, setPostalCode] = useState(user?.postalCode);
    const [moreDetails, setMoreDetails] = useState(user?.moreDetails);

  // let locatiobVariable =location.pathname
  // console.log(location.pathname);

  const handleSubmitEditAddress = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append("addressName", addressName);
      formData.append("address", address);
      formData.append("city", city);
      formData.append("district", district);
      formData.append("postalCode", postalCode);
      formData.append("moreDetails", moreDetails);

      await axios.patch("/customers/me", formData);
      navigate(`/Profile/${customerId}`);
    } catch (err) {
      setError(err.response.data.message);
      // console.log(err.response.data)
    }
  };
  // /Profile/EditAddress/1
  return (
    <>
      <form onSubmit={handleSubmitEditAddress}>
        {/* Add a New Address */}
        <h5 className="fw-bold mt-5">Edit Address </h5>
        <div className="form-group mt-3">
          <label htmlFor="addressName">Address Name</label>
          <input
            type="text"
            className="form-control mt-3"
            id="addressName"
            placeholder="address name"
            defaultValue={user?.addressName}
            onChange={(e) => setAddressName(e.target.value)}
          />
        </div>

        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control mt-5"
            id="address"
            placeholder="Address  (Room no., Buiding, Street)"
            defaultValue={user?.address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className="form-control mt-3"
            id="city"
            placeholder="Province"
            defaultValue={user?.city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control mt-5"
            id="district"
            placeholder="District"
            defaultValue={user?.district}
            onChange={(e) => setDistrict(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control mt-5"
            id="postalCode"
            placeholder="Postal Code"
            defaultValue={user?.postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="moreDetails">More Details</label>
          <textarea
            className="form-control mt-3"
            id="moreDetails"
            rows="7"
            defaultValue={user?.moreDetails}
            onChange={(e) => setMoreDetails(e.target.value)}
          ></textarea>
        </div>

        {/* </form> */}

        {location.pathname === `/Profile/EditAddress/${customerId}` ? (
          <>
            <div className="row mt-5 p-0">
              <div className="black-bottom-header"></div>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-dark mt-5 w-25 text-center"
              >
                Save Address
              </button>
            </div>
          </>
        ) : null}
      </form>
    </>
  );
}

export default EditAddress;
