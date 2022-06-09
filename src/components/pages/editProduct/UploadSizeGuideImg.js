import { useRef } from "react";
import uploadImagePic from "../../../assets/images/uploadImagePic.png"

function UploadSizeGuideImg({ sizeGuide, onChange, onDelete }) {
  const inputEl = useRef();
  return (
    <>
      <div
        className="position-relative"
        role="button"
        onClick={() => inputEl.current.click()}
      >
        {sizeGuide ? (
          <>
            <button
              className="btn-close position-absolute mt-5"
              style={{ top: 6, right: 6 }}
              onClick={(e) => {
                e.stopPropagation();
                inputEl.current.sizeGuide = "";
                onDelete();
              }}
            />
            <img
              src={URL.createObjectURL(sizeGuide)}
              alt="post"
              className="img-fluid w-100 mt-5 mb-5"
            />
          </>
        ) : (
          <img
            src={uploadImagePic}
            className="me-4 bg-color-blank-image-grey p-5 w-100 mt-5 mb-5"
            alt="facebook"
          />
        )}
      </div>
      <input type="file" className="d-none" ref={inputEl} onChange={onChange} />
    </>
  );
}

export default UploadSizeGuideImg;
