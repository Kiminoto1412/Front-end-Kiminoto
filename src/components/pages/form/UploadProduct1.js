import { useRef } from "react";
import uploadImagePic from "../../../assets/images/uploadImagePic.png";

function UploadProduct1({  productPic,defaultProductPic ,onChange, onDelete }) {
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
              src={ URL.createObjectURL(productPic)}
              alt="post"
              className="img-fluid w-100"
              style={{ height: 830  }}
            />
          </>
        ) : (
          <div className="d-flex align-items-center justify-content-center w-100 border border-dark" style={{ backgroundColor: "#C4C4C4" , height:830}}>
          <img
            src={defaultProductPic || uploadImagePic}
            style={{backgroundColor: "#C4C4C4", height: 140 }}
            alt="uploadImagePic"
          />
          </div>
        )}
      </div>
      <input type="file" className="d-none" ref={inputEl} onChange={onChange} />
    </>
  );
}

export default UploadProduct1;

// onClick={() => inputEl.current.click()}  บอกว่าให้click กล่อง divนั้น แล้วให้เหมือนclick ที่ input
