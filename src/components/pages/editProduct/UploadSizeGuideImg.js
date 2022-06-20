import { useRef } from "react";
import uploadImagePic from "../../../assets/images/uploadImagePic.png"

function UploadSizeGuideImg({ sizeGuide,defaultSizeGuide, onChange, onDelete }) {
  const inputEl = useRef();
  return (
    <>
      <div
        className="position-relative mt-5 mb-4"
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
              style={{ height: 830  }}
            />
          </>
        ) : (
          <div className="d-flex align-items-center justify-content-center  border border-dark" style={{ backgroundColor: "#C4C4C4" , height:830}}>
          <img
            src={defaultSizeGuide || uploadImagePic}
            style={{backgroundColor: "#C4C4C4", width:"100%" ,height:"100%"}}
            alt="uploadImagePic"
          />
          </div>
        )}
      </div>
      <input type="file" className="d-none" ref={inputEl} onChange={onChange} />
    </>
  );
}

export default UploadSizeGuideImg;
