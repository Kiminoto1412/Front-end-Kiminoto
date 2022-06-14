import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ErrorContext } from "../../context/ErrorContext";

import EditProfile from "../../components/pages/profile/EditProfile";
import EditAddress from "../../components/pages/profile/EditAddress";
import { Spinner } from "react-bootstrap";
import UploadImage from "./form/UploadImage";

function SignUp() {
  //setFirstName={setFirstName} , setLastName={setLastName},setEmail={setEmail} ,setPhoneNumber={setPhoneNumber},setPassword={setPassword},setConfirmPassword={setConfirmPassword}
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //Image State
  const [profilePic, setProfilePic] = useState(null);
  const [loading, setLoading] = useState(false);

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
      console.log(profilePic)
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <>
      {loading && <Spinner />}
     
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
              <EditProfile
                title={"SignUp"}
                setFirstName={setFirstName}
                setLastName={setLastName}
                setEmail={setEmail}
                setPhoneNumber={setPhoneNumber}
                setPassword={setPassword}
                setConfirmPassword={setConfirmPassword}
              />
              {/* Add a New Address */}
              <EditAddress
                setAddressName={setAddressName}
                setAddress={setAddress}
                setCity={setCity}
                setDistrict={setDistrict}
                setPostalCode={setPostalCode}
                setMoreDetails={setMoreDetails}
              />

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
