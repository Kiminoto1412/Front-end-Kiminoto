import { useRef } from "react";
import { useLocation } from "react-router-dom";
import uploadImagePic from "../../../assets/images/uploadImagePic.png";

function UploadImage({ profilePic, defaultProfilePic, onChange, onDelete }) {
  const inputEl = useRef();
  let location = useLocation();

  console.log(location.pathname)
  return (
    <>
      <div
        className="position-relative"
        role="button"
        onClick={() => inputEl.current.click()}
      >
        {profilePic ? (
          <>
            <button
              className="btn-close position-absolute"
              style={{ top: 6, right: 6 }}
              onClick={(e) => {
                e.stopPropagation();
                inputEl.current.profilePic = "";
                onDelete();
              }}
            />
            <img
              src={URL.createObjectURL(profilePic)}
              alt="post"
              className="img-fluid"
              style={{ width: 250, height: 250 }}
            />
          </>
        ) : (
          <img
            src={defaultProfilePic || uploadImagePic}
            className="ms-4 me-4 bg-color-blank-image-grey img-fluid "
            style={{ width: 250, height: 250 }}
            alt="uploadImagePic"
          />
        )}
      </div>
      {location.pathname.startsWith("/Profile/EditProfile")  ? (
        <input
          type="file"
          className="d-none"
          ref={inputEl}
          onChange={onChange}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default UploadImage;

// onClick={() => inputEl.current.click()}  บอกว่าให้click กล่อง divนั้น แล้วให้เหมือนclick ที่ input
