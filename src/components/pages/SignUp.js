import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ErrorContext } from "../../context/ErrorContext";

import CreateProfile from "../pages/profile/CreateProfile";
import EditAddress from "../../components/pages/profile/EditAddress";
import { Spinner } from "react-bootstrap";
import UploadImage from "./form/UploadImage";

function SignUp() {
  let navigate = useNavigate();

  const { setLoading } = useContext(AuthContext);

  //setFirstName={setFirstName} , setLastName={setLastName},setEmail={setEmail} ,setPhoneNumber={setPhoneNumber},setPassword={setPassword},setConfirmPassword={setConfirmPassword}
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //Image State
  const [profilePic, setProfilePic] = useState(null);
  // const [loading, setLoading] = useState(false);

  //setAddressName={setAddressName} setAddress={setAddress} setProvince={setProvince} setDistrict={setDistrict} setPostalCode={setPostalCode} setMoreDetails={setMoreDetails}
  const [addressName, setAddressName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [moreDetails, setMoreDetails] = useState("");

  const { signUp } = useContext(AuthContext);
  const { setError, setTrigger } = useContext(ErrorContext);
  const handleSubmitSignUp = async (e) => {
    try {
      e.preventDefault();
      //validate input first

      setLoading(true);
      //end validate
      await signUp({
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        confirmPassword,
        profilePic,
        addressName,
        address,
        city,
        district,
        postalCode,
        moreDetails,
      });
      // console.log(profilePic)

      setLoading(false);
      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <>
      {/* {loading && <Spinner />} */}

      <div className="container mt-5">
        <form onSubmit={handleSubmitSignUp}>
          <div className="row d-flex">
            <div className="col-4">
              <div className="text-center">
                {/* <img
                  src={uploadImage}
                  className="me-4 bg-color-blank-image-grey p-5 "
                  alt="facebook"
                /> */}
                <UploadImage
                  profilePic={profilePic}
                  // ถ้า profilePic ยังไม่มีค่า จะเป้น null ถ้ากดcancel เป็น undefined
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      setProfilePic(e.target.files[0]);
                    }
                  }}
                  onDelete={() => setProfilePic(null)}
                />
              </div>
            </div>
            <div className="col-8">
              <CreateProfile
                title={"SignUp"}
                setFirstName={setFirstName}
                setLastName={setLastName}
                setEmail={setEmail}
                setPhoneNumber={setPhoneNumber}
                setPassword={setPassword}
                setConfirmPassword={setConfirmPassword}
              />
              {/* Add a New Address */}
              <h5 className="fw-bold mt-5">Edit Address </h5>
        <div className="form-group mt-3">
          <label htmlFor="addressName">Address Name</label>
          <input
            type="text"
            className="form-control mt-3"
            id="addressName"
            placeholder="address name"
            onChange={(e) => setAddressName(e.target.value)}
          />
        </div>

        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control mt-5"
            id="address"
            placeholder="Address  (Room no., Buiding, Street)"
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
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control mt-5"
            id="district"
            placeholder="District"
            onChange={(e) => setDistrict(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control mt-5"
            id="postalCode"
            placeholder="Postal Code"
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="moreDetails">More Details</label>
          <textarea
            className="form-control mt-3"
            id="moreDetails"
            rows="7"
            onChange={(e) => setMoreDetails(e.target.value)}
          ></textarea>
        </div>

              {/* </form> */}
            </div>
            <div className="row mt-5 p-0">
              <div className="black-bottom-header"></div>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-dark mt-5 mb-5 w-25 text-center"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
