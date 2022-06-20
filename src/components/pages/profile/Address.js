import axios from "../../../config/axios";
import { useContext, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { ErrorContext } from "../../../context/ErrorContext";

function Address() {

  let navigate = useNavigate();

  //deconstruct ตาม route
  const {customerId} = useParams();
  // console.log(customerId)

  const { user } = useContext(AuthContext);


  return (
    <>
      {/* Add a New Address */}
      <h5 className="fw-bold mt-5">My Address</h5>
      <div className="form-group mt-3">
        <label for="addressName">Address Name</label>
        <input
          type="text"
          className="form-control mt-3"
          id="addressName"
          value={user.addressName}
          placeholder="first name"
        />
      </div>

      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control mt-5"
          id="addressFirstName"
          value={user.address}
          placeholder="Address  (Room no., Buiding, Street)"
        />
      </div>
      <div className="form-group mt-3">
        <label for="city">City</label>
        <input
          type="text"
          className="form-control mt-3"
          id="city"
          value={user.city}
          placeholder="Province"
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control mt-5"
          id="district"
          value={user.district}
          placeholder="District"
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control mt-5"
          id="postalCode"
          value={user.postalCode}
          placeholder="Postal Code"
        />
      </div>
      <div className="form-group mt-3">
        <label for="moreDetails">More Details</label>
        <textarea
          className="form-control mt-3"
          id="moreDetails"
          value={user.moreDetails}
          rows="7"
          defaultValue={""}
        ></textarea>
      </div>

      
    </>
  );
}

export default Address;
