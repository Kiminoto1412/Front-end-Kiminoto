import uploadImage from "../../assets/images/uploadImage.png";
import EditProfile from "../../components/pages/profile/EditProfile";
import EditAddress from "../../components/pages/profile/EditAddress";

function SignUp() {
  return (
    <>
      <div className="container mt-5">
        <form>
          <div className="row d-flex">
            <div className="col-4">
              <div className="text-center">
                <img
                  src={uploadImage}
                  className="me-4 bg-color-blank-image-grey p-5 "
                  alt="facebook"
                />
              </div>
            </div>
            <div className="col-8">
              <EditProfile title={"SignUp"}/>
              {/* Add a New Address */}
              <EditAddress />

              {/* </form> */}
            </div>
            <div className="row mt-5 p-0">
              <div className="black-bottom-header"></div>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-dark mt-5 w-25 text-center"
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
