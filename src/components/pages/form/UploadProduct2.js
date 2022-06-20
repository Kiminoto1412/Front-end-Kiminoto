import { useRef } from "react";
import uploadImagePic from "../../../assets/images/uploadImagePic.png";

function UploadProduct2({ productPic,defaultProductPic ,onChange, onDelete }) {
  const inputEl = useRef();
  return (
    <>
      <div
        className="position-relative "
        role="button"
        onClick={() => inputEl.current.click()}
      >
       
       {productPic ? (
          <>
            <button
              className="btn-close position-absolute"
              style={{ top: 6, right: 6 }}
              onClick={(e) => {
                e.stopPropagation();
                inputEl.current.productPic = "";
                onDelete();
              }}
            />
            <img
              src={URL.createObjectURL(productPic)}
              alt="post"
              className="img-fluid "
              style={{width:210 ,height:210 }}
            />
          </>
        ) : (
          <div className="d-flex align-items-center justify-content-center  border border-dark" style={{ backgroundColor: "#C4C4C4" , width:210 ,height:210}}>
          <img
            src={defaultProductPic || uploadImagePic}
            style={{backgroundColor: "#C4C4C4", width: 140 }}
            alt="uploadImagePic"
          />
          </div>
        )}
      </div>
      <input type="file" className="d-none" ref={inputEl} onChange={onChange} />
    </>
  );
}

export default UploadProduct2;

// onClick={() => inputEl.current.click()}  บอกว่าให้click กล่อง divนั้น แล้วให้เหมือนclick ที่ input
