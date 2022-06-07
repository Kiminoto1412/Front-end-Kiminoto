import { useRef } from "react";
import uploadImagePic from "../../../assets/images/uploadImagePic.png"

function UploadImage({ profilePic, onChange, onDelete }) {
  const inputEl = useRef();
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
            />
          </>
        ) : (
            <img
            src={uploadImagePic}
            className="me-4 bg-color-blank-image-grey p-5 "
            alt="facebook"
          />
        )}
      </div>
      <input type="file" className="d-none" ref={inputEl} onChange={onChange} />
    </>
  );
}

export default UploadImage;

// onClick={() => inputEl.current.click()}  บอกว่าให้click กล่อง divนั้น แล้วให้เหมือนclick ที่ input
