import { useRef } from "react";

function UploadSlip({ slipPic, onChange, onDelete }) {
  const inputEl = useRef();
  return (
    <>
      <div
        className="position-relative"
        role="button"
        onClick={() => inputEl.current.click()}
      >
       
          <>
            <button
              className="btn-close position-absolute"
              style={{ top: 6, right: 6 }}
              onClick={(e) => {
                e.stopPropagation();
                inputEl.current.slipPic = "";
                onDelete();
              }}
            />
            <img
              src={URL.createObjectURL(slipPic)}
              alt="post"
              className="img-fluid"
            />
          </>
        
      </div>
      <input type="file" className="d-none" ref={inputEl} onChange={onChange} />
    </>
  );
}

export default UploadSlip;

// onClick={() => inputEl.current.click()}  บอกว่าให้click กล่อง divนั้น แล้วให้เหมือนclick ที่ input
