// import { ErrorContext } from "../../context/ErrorContext";

import { useContext, useEffect , useState } from "react";
import { Link ,useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

function MyProfile() {
  let navigate = useNavigate();
  const {customerId} = useParams();
  console.log(customerId)

  const { user } = useContext(AuthContext);
  // const { setError } = useContext(ErrorContext);

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

  return (
    <>
      <h5 className="fw-bold ">Profile</h5>
      {/* <form> */}
      <div className="form-group mt-3">
        <label form="firstName">First Name</label>
        <input
          type="text"
          className="form-control mt-3"
          id="firstName"
          value={firstName}
          placeholder="first name"
        />
      </div>
      <div className="form-group mt-3">
        <label form="lastName">Last Name</label>
        <input
          type="text"
          className="form-control mt-3"
          id="lastName"
          value={lastName}
          placeholder="first name"
        />
      </div>
      <div className="form-group mt-3">
        <label form="email">Email address</label>
        <input
          type="email"
          className="form-control mt-3"
          id="email"
          value={email}
          aria-describedby="emailHelp"
          placeholder="email"
        />
      </div>
      <div className="form-group mt-3">
        <label form="tel">Tel.</label>
        <input
          type="text"
          className="form-control mt-3"
          id="tel"
          value={phoneNumber}
          placeholder="tel"
        />
      </div>
    

      
    </>
  );
}

export default MyProfile;
