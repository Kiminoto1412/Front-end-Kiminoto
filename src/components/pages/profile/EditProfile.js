import axios from "../../../config/axios";
import { useContext, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { ErrorContext } from "../../../context/ErrorContext";
import { useOutletContext } from "react-router-dom";

function EditProfile() {
  let location = useLocation();
  let navigate = useNavigate();

  //deconstruct ตาม route
  const { customerId } = useParams();
  // console.log(customerId);

  const { user } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);

  const [profilePic, setProfilePic] = useOutletContext();

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

  // console.log(profilePic)

  const handleSubmitEditProfile = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append("firstName",firstName)
      formData.append("lastName" , lastName)
      formData.append("email" , email)
      formData.append("phoneNumber" , phoneNumber)
      formData.append("profilePic" , profilePic)
      // console.log("first");
      // console.log(formData)

      await axios.patch("/customers/me",formData);
      navigate(`/Profile/${customerId}`)
    } catch (err) {
      setError(err.response.data.message);
      // console.log(err.response.data)
    }
  };

  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("aaa");
  };

  // const handle = (e) => {
  //   e.preventDefault();
  //   console.log("first");
  // };
  return (
    <>

      <form onSubmit={handleSubmitEditProfile}>
        <h5 className="fw-bold ">Edit Profile</h5>
        <div className="form-group mt-3">
          <label form="firstName">First Name</label>
          <input
            type="text"
            className="form-control mt-3"
            id="firstName"
            placeholder="first name"
            defaultValue={user.firstName}
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
            defaultValue={user.lastName}
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
            defaultValue={user.email}
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
            defaultValue={user.phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        {location.pathname === `/Profile/EditProfile/${customerId}` ? (
          <>
            <div className="row mt-5 p-0"></div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-dark mt-5 w-25 text-center"
              >
                Save Profile
              </button>
            </div>
          </>
        ) : null}
      </form>
    </>
  );
}

export default EditProfile;
