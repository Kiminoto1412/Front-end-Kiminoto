import { useLocation } from "react-router-dom";


function EditAddress({setAddressName ,setAddress,setCity, setDistrict,setPostalCode,setMoreDetails}) {

  const location = useLocation();
  // let locatiobVariable =location.pathname
  // console.log(location.pathname);

  return (
    <>
      {/* Add a New Address */}
      <h5 className="fw-bold mt-5">Edit Address </h5>
      <div className="form-group mt-3">
        <label htmlFor="addressName">Address Name</label>
        <input
          type="text"
          className="form-control mt-3"
          id="addressName"
          placeholder="address name"
          // value={addressName}
          onChange={(e) => setAddressName(e.target.value)}
        />
      </div>

      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control mt-5"
          id="address"
          placeholder="Address  (Room no., Buiding, Street)"
          // value={address}
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
          // value={province}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control mt-5"
          id="district"
          placeholder="District"
          // value={district}
          onChange={(e) => setDistrict(e.target.value)}
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control mt-5"
          id="postalCode"
          placeholder="Postal Code"
          // value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
      </div>
      <div className="form-group mt-3">
        <label htmlFor="moreDetails">More Details</label>
        <textarea
          className="form-control mt-3"
          id="moreDetails"
          rows="7"
          // value={moreDetails}
          onChange={(e) => setMoreDetails(e.target.value)}
        ></textarea>
      </div>

      {/* </form> */}
      
      {location.pathname === "/Profile/EditProfile/:customerId" ? (
        <>
      <div className="row mt-5 p-0">
        <div className="black-bottom-header"></div>
      </div>
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-dark mt-5 w-25 text-center">
          Save Address
        </button>
      </div>
      </>
      ) : null}
    </>
  );
}

export default EditAddress;
