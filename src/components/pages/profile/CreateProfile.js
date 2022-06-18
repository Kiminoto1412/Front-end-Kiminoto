import axios from "../../../config/axios";
import { useContext, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { ErrorContext } from "../../../context/ErrorContext";

function CreateProfile({setFirstName,setLastName,setEmail,setPhoneNumber,setPassword,setConfirmPassword}) {
  let location = useLocation();
  let navigate = useNavigate();


  return (
    <>
     
        <h5 className="fw-bold ">Edit Profile</h5>
        <div className="form-group mt-3">
          <label form="firstName">First Name</label>
          <input
            type="text"
            className="form-control mt-3"
            id="firstName"
            placeholder="first name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label form="lastName">Last Name</label>
          <input
            type="text"
            className="form-control mt-3"
            id="lastName"
            placeholder="last name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label form="email">Email address</label>
          <input
            type="email"
            className="form-control mt-3"
            id="email"
            aria-describedby="emailHelp"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label form="tel">Tel.</label>
          <input
            type="text"
            className="form-control mt-3"
            id="tel"
            placeholder="tel"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label form="password">Password</label>
          <input
            type="text"
            className="form-control mt-3"
            id="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label form="confirmPassword">Confirm Password</label>
          <input
            type="text"
            className="form-control mt-3"
            id="confirmPassword"
            placeholder="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>


     
    </>
  );
}

export default CreateProfile;